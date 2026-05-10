import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, FileText, Code, Lightbulb, BookOpen, Maximize2, X } from 'lucide-react';
import { activities, periodColors, periodTextColors, periodBgColors } from '../data/activities';

export function ActivityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const activity = activities.find((a) => a.id === id);

  const [activeDocIndex, setActiveDocIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [csvRows, setCsvRows] = useState<string[][]>([]);
  const [csvError, setCsvError] = useState<string | null>(null);
  const [isCsvLoading, setIsCsvLoading] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-card p-12 text-center max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-slate-300 mb-4">Activity not found</h2>
          <button
            onClick={() => navigate('/activities')}
            className="text-sky-400 hover:text-sky-300 transition-colors"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const activeDoc = activity.documents[activeDocIndex];
  const hasMultipleDocs = activity.documents.length > 1;
  const isCsvDoc = activeDoc.link.toLowerCase().endsWith('.csv');

  const parseCsv = (text: string) => {
    const rows: string[][] = [];
    let currentRow: string[] = [];
    let currentField = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          currentField += '"';
          i += 1;
        } else {
          inQuotes = !inQuotes;
        }
        continue;
      }

      if (!inQuotes && (char === ',' || char === '\n' || char === '\r')) {
        if (char === '\r' && nextChar === '\n') {
          i += 1;
        }
        currentRow.push(currentField.trim());
        currentField = '';
        if (char !== ',') {
          if (currentRow.some((cell) => cell.length > 0)) {
            rows.push(currentRow);
          }
          currentRow = [];
        }
        continue;
      }

      currentField += char;
    }

    if (currentField.length > 0 || currentRow.length > 0) {
      currentRow.push(currentField.trim());
      if (currentRow.some((cell) => cell.length > 0)) {
        rows.push(currentRow);
      }
    }

    return rows;
  };

  const { csvHeaders, csvBodyRows } = useMemo(() => {
    if (csvRows.length === 0) {
      return { csvHeaders: [], csvBodyRows: [] };
    }

    const inferredMaxCols = Math.max(...csvRows.map((row) => row.length));
    const firstRow = csvRows[0] ?? [];
    const hasExplicitHeader = firstRow.some((value) => value.length > 0);

    if (!hasExplicitHeader) {
      const fallbackHeaders = Array.from({ length: inferredMaxCols }, (_, index) => `Column ${index + 1}`);
      return { csvHeaders: fallbackHeaders, csvBodyRows: csvRows };
    }

    const normalizedHeaders = Array.from({ length: Math.max(firstRow.length, inferredMaxCols) }, (_, index) =>
      firstRow[index] || `Column ${index + 1}`,
    );

    return { csvHeaders: normalizedHeaders, csvBodyRows: csvRows.slice(1) };
  }, [csvRows]);

  useEffect(() => {
    if (!isCsvDoc) {
      setCsvRows([]);
      setCsvError(null);
      setIsCsvLoading(false);
      return;
    }

    let isMounted = true;
    setIsCsvLoading(true);
    setCsvError(null);

    fetch(activeDoc.link)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load CSV');
        }
        return response.text();
      })
      .then((text) => {
        if (!isMounted) {
          return;
        }
        setCsvRows(parseCsv(text));
      })
      .catch((error: Error) => {
        if (!isMounted) {
          return;
        }
        setCsvError(error.message);
      })
      .finally(() => {
        if (!isMounted) {
          return;
        }
        setIsCsvLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [activeDoc.link, isCsvDoc]);

  const handleTabClick = (index: number) => {
    setActiveDocIndex(index);
    const tab = tabRefs.current[index];
    if (tab) {
      tab.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate('/activities')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/15 border border-sky-500/40 text-sky-400 hover:bg-sky-500/25 hover:border-sky-400 hover:text-sky-300 font-medium transition-all duration-200 mb-10 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${periodBgColors[activity.period]} ${periodTextColors[activity.period]}`}>
              {activity.period} Period
            </span>
            <span className="text-slate-500 text-sm">{activity.type}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            {activity.title}
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl">{activity.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-5">
            {activity.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* LEFT: Reflection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-lg bg-gradient-to-br ${periodColors[activity.period]}`}>
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-100">Reflection</h2>
              </div>

              {activity.reflection ? (
                <p
                  className="text-slate-300 leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{
                    __html: activity.reflection
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n/g, '<br />'),
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Lightbulb className="w-12 h-12 text-slate-600 mb-3" />
                  <p className="text-slate-500 text-sm">
                    Reflection coming soon
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT: Document Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div className="glass-card overflow-hidden flex flex-col" style={{ minHeight: '600px' }}>
              {/* Tab Bar / Header */}
              <div className="flex items-center border-b border-slate-700/60">
                {/* Tabs (multi-doc) or label (single doc) */}
                <div className="flex-1 overflow-x-auto tab-scroll">
                  {hasMultipleDocs ? (
                    <div className="flex items-center gap-1.5 px-2 py-1 whitespace-nowrap">
                      {activity.documents.map((doc, i) => (
                        <button
                          key={i}
                          ref={(el) => {
                            tabRefs.current[i] = el;
                          }}
                          onClick={() => handleTabClick(i)}
                          className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                            activeDocIndex === i
                              ? `border-current ${periodTextColors[activity.period]} bg-slate-800/50`
                              : 'border-transparent text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {doc.isNotebook ? (
                            <BookOpen className="w-4 h-4" />
                          ) : (
                            <FileText className="w-4 h-4" />
                          )}
                          {doc.label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 px-5 py-3.5">
                      {activeDoc.isNotebook ? (
                        <Code className={`w-4 h-4 ${periodTextColors[activity.period]}`} />
                      ) : (
                        <FileText className={`w-4 h-4 ${periodTextColors[activity.period]}`} />
                      )}
                      <span className={`text-sm font-medium ${periodTextColors[activity.period]}`}>
                        {activeDoc.label}
                      </span>
                    </div>
                  )}
                </div>

                {/* CSV Download */}
                {isCsvDoc && (
                  <a
                    href={activeDoc.link}
                    download={activeDoc.downloadName}
                    className="flex items-center gap-1.5 mx-3 px-3 py-1.5 rounded-md bg-slate-700/50 hover:bg-slate-600/60 text-slate-400 hover:text-slate-200 text-xs font-medium transition-all duration-200 flex-shrink-0"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Download CSV
                  </a>
                )}

                {/* Fullscreen Button */}
                {!isCsvDoc && (
                  <button
                    onClick={() => setIsFullscreen(true)}
                    className="flex items-center gap-1.5 mx-3 px-3 py-1.5 rounded-md bg-slate-700/50 hover:bg-slate-600/60 text-slate-400 hover:text-slate-200 text-xs font-medium transition-all duration-200 flex-shrink-0"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    Fullscreen
                  </button>
                )}
              </div>

              {/* Content */}
              {isCsvDoc ? (
                <div className="p-4 overflow-auto csv-scroll" style={{ minHeight: '550px' }}>
                  <p className="text-xs text-slate-500 mb-3">CSV preview</p>
                  {isCsvLoading ? (
                    <p className="text-slate-400 text-sm">Loading CSV preview...</p>
                  ) : csvError ? (
                    <p className="text-rose-400 text-sm">{csvError}</p>
                  ) : csvRows.length === 0 ? (
                    <p className="text-slate-400 text-sm">No data found in this CSV.</p>
                  ) : (
                    <div className="overflow-auto rounded-lg border border-slate-700/60 csv-scroll">
                      <table className="min-w-full text-xs text-slate-300">
                        <thead className="bg-slate-800/70 text-slate-200 sticky top-0 z-10">
                          <tr>
                            {csvHeaders.map((header, index) => (
                              <th key={`${header}-${index}`} className="px-3 py-2 text-left font-semibold whitespace-nowrap">
                                {header || `Column ${index + 1}`}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {csvBodyRows.map((row, rowIndex) => (
                            <tr key={`row-${rowIndex}`} className="border-t border-slate-700/50">
                              {csvHeaders.map((_, colIndex) => (
                                <td key={`cell-${rowIndex}-${colIndex}`} className="px-3 py-2 whitespace-nowrap">
                                  {row[colIndex] ?? ''}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs text-slate-500">Scroll to view all rows.</p>
                    <button
                      onClick={() => setIsFullscreen(true)}
                      className="text-xs font-semibold text-sky-400 hover:text-sky-300"
                    >
                      Open fullscreen
                    </button>
                  </div>
                </div>
              ) : (
                <iframe
                  key={activeDoc.link}
                  src={activeDoc.link}
                  className="w-full flex-1"
                  style={{ minHeight: '550px' }}
                  title={`${activity.title} – ${activeDoc.label}`}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-slate-950"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-700/60 flex-shrink-0">
              <div className="flex items-center gap-2">
                {hasMultipleDocs ? (
                  activity.documents.map((doc, i) => (
                    <button
                      key={i}
                      onClick={() => handleTabClick(i)}
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeDocIndex === i
                          ? `${periodTextColors[activity.period]} bg-slate-800`
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {doc.isNotebook ? <BookOpen className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                      {doc.label}
                    </button>
                  ))
                ) : (
                  <span className={`text-sm font-medium ${periodTextColors[activity.period]}`}>
                    {activeDoc.label}
                  </span>
                )}
              </div>

              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-700/50 hover:bg-red-500/20 hover:text-red-400 text-slate-400 text-sm font-medium transition-all duration-200"
              >
                <X className="w-4 h-4" />
                Close
              </button>
            </div>

            {/* Fullscreen content */}
            {isCsvDoc ? (
              <div className="flex-1 overflow-auto p-4 csv-scroll">
                {isCsvLoading ? (
                  <p className="text-slate-400 text-sm">Loading CSV preview...</p>
                ) : csvError ? (
                  <p className="text-rose-400 text-sm">{csvError}</p>
                ) : csvRows.length === 0 ? (
                  <p className="text-slate-400 text-sm">No data found in this CSV.</p>
                ) : (
                  <div className="overflow-auto rounded-lg border border-slate-700/60 csv-scroll">
                    <table className="min-w-full text-xs text-slate-300">
                      <thead className="bg-slate-800/70 text-slate-200 sticky top-0 z-10">
                        <tr>
                          {csvHeaders.map((header, index) => (
                            <th key={`${header}-${index}`} className="px-3 py-2 text-left font-semibold whitespace-nowrap">
                              {header || `Column ${index + 1}`}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {csvBodyRows.map((row, rowIndex) => (
                          <tr key={`fs-row-${rowIndex}`} className="border-t border-slate-700/50">
                            {csvHeaders.map((_, colIndex) => (
                              <td key={`fs-cell-${rowIndex}-${colIndex}`} className="px-3 py-2 whitespace-nowrap">
                                {row[colIndex] ?? ''}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ) : (
              <iframe
                key={`fs-${activeDoc.link}`}
                src={activeDoc.link}
                className="w-full flex-1"
                title={`${activity.title} – ${activeDoc.label} (fullscreen)`}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
