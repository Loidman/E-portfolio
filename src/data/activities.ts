const BASE = import.meta.env.BASE_URL;

export interface ActivityDocument {
  label: string;
  link: string;
  isNotebook: boolean;
  downloadName?: string;
  downloadLink?: string;
  sheets?: { label: string; link: string; description?: string }[];
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  period: 'Prelim' | 'Midterm' | 'Finals';
  yearLevel: string;
  semester: string;
  type: string;
  techStack: string[];
  reflection: string;
  documents: ActivityDocument[];
}

export const activities: Activity[] = [
  /* ──────────────────────────────────────────
     4th Year · 1st Semester · Prelim Period
     ────────────────────────────────────────── */
  {
    id: '4y-pt-p1',
    title: 'PT-P1: Data Analysis with Pivot Tables',
    description:
      'Performance task applying structured data analysis using pivot tables and step-by-step data transformation workflows for systematic insight extraction.',
    period: 'Prelim',
    yearLevel: '4th Year',
    semester: '1st Semester',
    type: 'Performance Task',
    techStack: ['Data Analysis', 'Pivot Tables', 'Excel', 'Data Visualization'],
    reflection: `For this exercise I built a customer feedback classifier for a sports team's online store and ticketing app, using Machine Learning for Kids. I picked that domain because it naturally produces the three kinds of messages the exercise needed: fans praising a smooth checkout, fans complaining about a damaged jersey, and fans panicking because their tickets won't load before kickoff. I wrote 100 example sentences per class, Positive Praise, Negative Complaint, and Urgent Support, trained the model, then tested it in three rounds. Clear, unambiguous phrases scored 90%. Phrases built around sarcasm, sentiment reversal, and hedged urgency dropped that to 33%. Out-of-vocabulary questions had no fixed right answer, but the model still tagged a few of them with high confidence even when it clearly shouldn't have been. After that, I added 32 new training examples targeting the failure patterns from the ambiguous round and re-tested seven of the phrases that had failed. Three flipped to correct, four stayed wrong.

That whole sequence changed how I think about rules versus tagged learning. Before this, I would have assumed IF/ELSE rules could get you pretty far with something like sentiment sorting, since complaint words feel like they should be listable. What the sarcasm round showed me is that they're not. A rule like "if the sentence has a positive word, tag it praise" breaks the moment sentiment flips partway through a sentence, and no fixed list of words can catch that, because the meaning depends on the whole sentence, not one word. A trained model at least has a shot at learning that pattern if it sees enough of it, which is what my refinement step tried to do.

I also learned something about data that I wouldn't have guessed going in. I already had 100 examples per class before refinement, so the ambiguous-round failures weren't about lacking data overall, they were about lacking one specific kind of data: sarcasm, reversal, and hedged urgency. Adding more plain praise or plain complaints wouldn't have helped, since the model was never confused about those. But targeted data didn't fix everything either. Three of seven retested phrases flipped to correct, four didn't, probably because those phrases used a slightly different structure than what I added. So volume and diversity aren't the same lever, and a model can be swimming in data and still miss a pattern it's never actually seen represented.

The last thing I took from this was about where the model actually "understands" language versus where it doesn't. Based on how it failed on sentiment reversal, I think it's working off something closer to a bag of words than anything that tracks sentence structure or word order, since it kept latching onto individual words like "cancel" instead of noticing a "but" that flipped the meaning.

This exercise is useful to me beyond just this one assignment. Learning to test a model in stages, clear cases first, then edge cases, then genuinely ambiguous ones, is a habit I want to carry into every model I build after this, including the ones for our capstone. And the data lesson especially will matter there: if our capstone's document-matching system ever underperforms on a specific type of accreditation document, my instinct now is to ask what kind of example is missing, not just how much data we have overall. That's a much more useful way to debug a model than just throwing more data at it and hoping.`,
    documents: [
      {
        label: 'Report (PDF)',
        link: `${BASE}activities/4th-year-prelim/PT-P1_BERNARDO, Luke Joaquin (1).pdf`,
        isNotebook: false,
      },
      {
        label: 'Workbook',
        link: `${BASE}activities/4th-year-prelim/PT-P1_TestA_ClearPatterns.csv`,
        isNotebook: false,
        downloadLink: `${BASE}activities/4th-year-prelim/PT-P1_BERNARDO, Luke Joaquin.xlsx`,
        downloadName: 'PT-P1_BERNARDO_Workbook.xlsx',
        sheets: [
          { label: 'Test A: Clear Patterns', link: `${BASE}activities/4th-year-prelim/PT-P1_TestA_ClearPatterns.csv` },
          { label: 'Test B: Ambiguous', link: `${BASE}activities/4th-year-prelim/PT-P1_TestB_AmbiguousSarcastic.csv` },
          { label: 'Test C: Out-of-Vocab', link: `${BASE}activities/4th-year-prelim/PT-P1_TestC_OutOfVocabulary.csv` },
          { label: 'Step 5: Refinement', link: `${BASE}activities/4th-year-prelim/PT-P1_Step5_Refinement.csv` },
        ],
      },
      {
        label: 'Step 4 Screenshot',
        link: `${BASE}activities/4th-year-prelim/PT-P1_BERNARDO_Step 4 (1).png`,
        isNotebook: false,
      },
      {
        label: 'Step 5 Screenshot',
        link: `${BASE}activities/4th-year-prelim/PT-P1_BERNARDO_Step 5.png`,
        isNotebook: false,
      },
    ],
  },
  {
    id: '4y-pt-p2',
    title: 'PT-P2: Neural Network Training & Testing (FFBP)',
    description:
      'Implementation and evaluation of a Feed-Forward Back-Propagation (FFBP) neural network, including structured training logs, IEEE-formatted reporting, and full notebook experimentation.',
    period: 'Prelim',
    yearLevel: '4th Year',
    semester: '1st Semester',
    type: 'Machine Learning Project',
    techStack: ['Python', 'Neural Networks', 'FFBP', 'IEEE Report', 'Jupyter Notebook'],
    reflection: `For this exercise I rebuilt my earlier no-code sentiment classifier from scratch in Keras, using the same 332 customer messages split across three classes. That no-code version had topped out at 43.3% validation accuracy on ambiguous phrasing after refinement, and I used that as the benchmark to beat. I ran fifteen experiments total: a baseline, three runs pushed deliberately toward underfitting, overfitting, and a regularized middle ground, one custom configuration, and then ten ablation runs where I changed exactly one setting at a time off whatever combination had worked best so far. Every run used the same pipeline and the same four-layer architecture, so I could isolate what each individual change actually did. My best run combined early stopping, an expanded and more diverse dataset, a recovered vocabulary, and a smaller batch size, and reached a weighted F1 of 0.8416, well past the benchmark.

Along the way I saw underfitting and overfitting exactly the way they get described in lectures, but seeing them on my own loss curves made them click in a way reading about them never did. A tiny hidden layer and a tiny learning rate left both curves flat and high the whole time, the model never really learning anything. A huge hidden layer, a high learning rate, and no dropout did the opposite, training loss collapsing to zero while validation loss climbed the entire time, the model memorizing instead of generalizing. Early stopping was the clearest lesson of the whole exercise: rolling the weights back to the best validation point instead of letting training run to the end improved results almost for free, and it's the kind of safeguard I want to build into anything I train from now on rather than treating as optional.

I also learned that more capacity isn't automatically better, which pushed back on my own instinct going in. Once early stopping and more data were already doing their job, adding a bigger hidden layer on top didn't help and sometimes made things slightly worse, probably by giving the model more room to latch onto noise before early stopping caught it. More data, on the other hand, helped every single time I tried it. That's consistent with what I noticed in the no-code version too: it's not really about how much data you have, it's about whether that data actually covers the patterns the model is missing.

The other big realization was about control itself. In the no-code tool, every hyperparameter decision was hidden behind one training button, so when something went wrong, I had no way to tell whether it was a learning rate problem, a capacity problem, or something about how the tool reads text in the first place. Working directly in Keras meant I could actually test that. Swapping Adam for plain SGD at the exact same learning rate nearly broke training completely, something I never could have discovered without being able to change one variable at a time and watch what happened.

This exercise gave me something more useful than just a better score: a method. Testing one variable at a time, reading loss curves honestly instead of only checking the final accuracy number, and treating early stopping and data quality as first tools rather than last resorts, is exactly the kind of process I'll need for our capstone's sentence-transformer models, where I won't have a no-code tool's defaults to fall back on and will have to make these same calls myself. Knowing which levers actually move the needle, and which ones just look like they should, is going to save me a lot of wasted experiments later.`,
    documents: [
      {
        label: 'IEEE Report',
        link: `${BASE}activities/4th-year-prelim/Luke_Joaquin_IEEE_Report (2).pdf`,
        isNotebook: false,
      },
      {
        label: 'Notebook',
        link: `${BASE}activities/4th-year-prelim/Luke_Joaquin_Neural_Network_Training_Testing.html`,
        isNotebook: true,
      },
      {
        label: 'Training Log',
        link: `${BASE}activities/4th-year-prelim/PT-P2_FFBP_Training_Log.csv`,
        isNotebook: false,
        downloadLink: `${BASE}activities/4th-year-prelim/Luke_Joaquin_FFBP_Training_Log_Template (1).xlsx`,
        downloadName: 'FFBP_Training_Log.xlsx',
      },
    ],
  },
  {
    id: '4y-prelim-exam',
    title: 'Prelim Exam: Neural Network Basics',
    description:
      'Summative prelim exam covering word embeddings, neuron-to-linear-regression relationships, neural network depth and width, and the distinction between parameters and hyperparameters.',
    period: 'Prelim',
    yearLevel: '4th Year',
    semester: '1st Semester',
    type: 'Exam',
    techStack: ['Word Embeddings', 'Neural Networks', 'Backpropagation', 'Hyperparameters'],
    reflection: `The prelim had three questions on neural network basics. The first asked me to explain word embeddings. I wrote that they turn words into numbers so computers can work with language, with each word placed as a vector in a semantic space. Words with close meanings sit near each other, and I used the lecture example of "cat" and "kitten" being close while "cat" and "bus" are far apart. I drew a small diagram of that. The second asked how a single neuron relates to linear regression, and how adding depth and width helps. I wrote that a neuron takes inputs, multiplies them by weights, and makes a prediction, just like linear regression, and that stacking neurons lets each one look at the data at the same time. I used the example of one neuron learning a cat's shape, another learning its color, and later layers combining those into ears, eyes, and the whole shape. The third asked me to separate parameters from hyperparameters. I said parameters, like weights, are learned from training data through backpropagation, while hyperparameters are settings I choose, like the number of hidden layers and epochs.

What I learned from the first two is that both ideas come down to the same thing: simple pieces that become useful when combined. Embeddings measure closeness in meaning instead of spelling, and neurons are just weighted sums that get powerful when layered. The third question taught me the clearest distinction. Parameters are what the model learns on its own, and hyperparameters are what I decide before training starts.

But I made a mistake on that third question. In my parameter versus hyperparameter table, I listed ReLU as an optimizer. ReLU is an activation function, which decides what a neuron passes forward. An optimizer, like Adam or SGD, is what updates the weights during training. I mixed up two different pieces of the training loop.

I had a chance to fix that confusion later, in the Keras exercise. Choosing between Adam and SGD there showed me what an optimizer actually does, since the same learning rate that worked with Adam nearly broke training under SGD. Going forward, I will keep activation functions and optimizers in separate boxes in my head: one shapes what a neuron outputs, and the other decides how the weights change. That will matter any time I set up or explain a model for our capstone.`,
    documents: [
      {
        label: 'Exam (PDF)',
        link: `${BASE}activities/4th-year-prelim/Prelim_Exam.pdf`,
        isNotebook: false,
      },
    ],
  },
  {
    id: '4y-ww-p2',
    title: 'WW-P2: Written Work – Prelim 2',
    description:
      'Written work submission for the prelim period covering analytical reasoning, technical documentation, and course concept application.',
    period: 'Prelim',
    yearLevel: '4th Year',
    semester: '1st Semester',
    type: 'Written Work',
    techStack: ['Technical Writing', 'Analysis', 'Documentation'],
    reflection: `For this module I worked through Microsoft's "Introduction to Natural Language Processing Concepts" course, which moved step by step from common text analysis tasks into tokenization and preprocessing, then into statistical scoring methods like TF-IDF and TextRank, then into embedding-based semantic models, and finally into a hands-on exercise comparing a generative model against a specialized statistical tool. In that exercise, I used a chat playground to have a generative model judge review sentiment, pull out place names, and summarize a transcript, and it handled all three just from plain-language instructions. I also tried a separate tool, the Language Playground, which used statistical pattern matching instead of a generative model for detecting PII, and its documentation was upfront that it could miss things. Along the way I also ran the cosine similarity exercises comparing word vectors, which is where the embedding ideas actually became concrete instead of just theoretical.

Going in, my sense of NLP came mostly from using generative AI tools, not from understanding how they work underneath. What I actually learned is that flexibility and predictability are two different things, and a model doesn't have to be "smart" to be the right choice for a task. The narrower Language Playground tool could still beat the generative model on a well-defined job like PII detection, just by being consistent. I also learned that preprocessing choices like tokenization and normalization aren't just a mechanical first step, they quietly shape everything that happens after them. And comparing TF-IDF against embeddings gave me a much clearer sense of why embeddings matter: TF-IDF only catches exact word matches, but embeddings place words in vector space by meaning, so they catch paraphrasing and synonyms that TF-IDF just can't see.

The idea that stuck with me the most, though, was seeing attention-based embeddings as an extension of the same vector ideas rather than something completely separate. A fixed embedding gives a word the same vector no matter the sentence, but attention-based models calculate a word's vector on the fly depending on what's around it. That reframed generative models for me. They're not a totally different technology from the embeddings covered earlier in the module, they're really just a more context-aware version of the same underlying idea.

This connects directly to my capstone, which my group and I are building under the working title "Integrating NLP for PACUCOA Accreditation Preparedness." We use sentence-transformer embeddings and cosine similarity to match accreditation criteria against institutional documents, so the cosine similarity method from this module isn't background knowledge for us, it's the exact operation our system relies on. Going forward, I want to understand attention and transformer architecture more deeply, since it's the basis for the models our capstone uses, and I want to look into how similarity thresholds get validated against human judgment, since that's the kind of question we'll need a real answer to once our system is actually being evaluated.`,
    documents: [
      {
        label: 'Written Work (PDF)',
        link: `${BASE}activities/4th-year-prelim/WW-P2 - BERNARDO, Luke Joaquin (1).pdf`,
        isNotebook: false,
      },
    ],
  },

  /* ──────────────────────────────────────────
     4th Year · 1st Semester · Midterm Period
     ────────────────────────────────────────── */
  {
    id: '4y-pt-m1',
    title: 'PT-M1: Building and Stress-Testing a Monster Hunter RAG Chatbot',
    description:
      'Performance task implementing a Retrieval-Augmented Generation (RAG) chatbot grounded on Monster Hunter: World lore using ChromaDB, MiniLM embeddings, and a Groq-hosted LLM — including controlled stress tests on grounding, refusal behavior, and temperature sensitivity.',
    period: 'Midterm',
    yearLevel: '4th Year',
    semester: '1st Semester',
    type: 'Performance Task',
    techStack: ['RAG', 'ChromaDB', 'MiniLM', 'Groq API', 'Python', 'Jupyter Notebook'],
    reflection: `For this lab I built a chatbot that only answers questions about Monster Hunter: World and its Iceborne expansion, using retrieval-augmented generation (RAG) instead of letting the model answer from its own memory. I loaded three lore files, split them into 500-character chunks with 50 characters of overlap, embedded them with all-MiniLM-L6-v2, and stored them in an in-memory ChromaDB index. For each question, the retriever pulled the three closest chunks and a Groq-hosted model answered from only those. I tested it four ways. A vague in-domain question pulled a trap-effectiveness table instead of a general summary. A specific question about Nergigante came back detailed and fully sourced. An out-of-domain question about Magnamalo got the exact refusal line I had written. Then I raised the temperature to 1.0 and deleted that refusal line from the system prompt. The model still refused, but it used looser, less consistent wording.

That last result taught me the most. Before this lab, I assumed the biggest risk with a chatbot was the model making things up. What I saw was that grounding and refusal consistency are two different things. Grounding held up even after I removed the fallback sentence, since the instruction to use only the provided context still did real work. But the wording of the refusal changed. For a chatbot that someone else will use, how it says no matters too, and a prompt that only says what to do, without fixing how to say no, leaves that part to chance. One lucky run also doesn't tell me the next one will go the same way.

The vague query taught me something different. The chatbot didn't fail there. The retriever did what it was built to do and returned the three chunks that scored highest, and the model summarized them faithfully and named its source. The mismatch was between my question and what the retriever could match. So when a RAG answer looks off, I should check what was retrieved before blaming the model.

A smaller lesson came from the model itself. The lab template called for llama-3.1-8b-instant, but Groq had retired it by the time I ran the notebook, so I switched to openai/gpt-oss-20b. I only noticed because the notebook broke. That made the lecture point about model deprecation and version tracking feel real, since a pipeline with a hardcoded model name is fragile. I also kept the API key out of the notebook by collecting it at runtime with getpass, which is a small habit that stops a leaked credential from becoming a bigger problem.

I plan to carry three things forward. When I build the next RAG system, I will test the retriever on its own first, since vague questions and weak chunks show up there before they ever reach the model. I will write refusal behavior into the prompt on purpose and test it at a higher temperature, instead of trusting one clean run. And I will not hardcode model names or keys. Those habits apply directly to the RAG work in this course, and the first one applies to our capstone, where the system has to pull the right passages from long accreditation documents.`,
    documents: [
      {
        label: 'IEEE Report (PDF)',
        link: `${BASE}activities/4th-year-midterm/PT-M1_IEEE_Report_BERNARDO.pdf`,
        isNotebook: false,
      },
      {
        label: 'Notebook',
        link: `${BASE}activities/4th-year-midterm/PT-M1_BERNARDO.html`,
        isNotebook: true,
        downloadLink: `${BASE}activities/4th-year-midterm/PT-M1_BERNARDO.ipynb`,
        downloadName: 'PT-M1_BERNARDO.ipynb',
      },
    ],
  },
  {
    id: '4y-ww-m2',
    title: 'WW-M2: RAG Chatbot Proposal for JRU Curriculum Comparisons',
    description:
      'Written work proposing a research study on a RAG chatbot to help Grade 12 students compare JRU CSE program curricula — including research design, evaluation methodology, and question set planning aligned with SDG 4.',
    period: 'Midterm',
    yearLevel: '4th Year',
    semester: '1st Semester',
    type: 'Written Work',
    techStack: ['RAG', 'Research Design', 'Qwen3-8B', 'Technical Writing', 'SDG 4'],
    reflection: `For this exercise, my group, DecisionThree, wrote a proposal for a RAG chatbot study. We did not build anything or collect any data. Our job was to plan a study well enough that someone could run it. We picked SDG 4, Quality Education, and narrowed it step by step. We started with access to tertiary program information, then moved to the difficulty of pulling together curriculum details, then to graduating Grade 12 students, and finally to comparing subjects, units, and practical requirements across the five JRU College of Computer Studies and Engineering programs. We settled on a research question about scale: as students compare more programs at once, how much do correctness, groundedness, and completeness drop off, if at all? We planned to test it with two-program, three-program, and full-set comparisons. We listed our sources, mainly the five official curriculum PDFs from April 2024. We also sketched a set of about 40 questions with a faculty-reviewed answer key, and we proposed Qwen3-8B as a starting model. We also made a short presentation of the proposal.

What I learned first is how much work it takes to narrow a topic. "Access to program information" is too broad to test, and each step down made the question sharper. Even then, the details mattered. BSEMC has two majors in one document, so we decided students would pick a major and the chatbot would compare at that level. Before that, we would have treated BSEMC as one program and mixed up the results. I also learned that a good research question is one where you don't already know the answer. A simple RAG versus no-RAG test would likely come out in RAG's favor. Asking how performance changes as the comparison grows, which is where the "Lost in the Middle" findings point, gave us something we could actually find out.

I also learned to be honest about what a proposal has not yet shown. We kept saying what we had not done: we haven't confirmed that JRU applicants really have this problem, we haven't confirmed permission to use the documents, and we haven't checked that the curriculum versions apply to incoming students. We also left things out on purpose, like grade prediction, "best fit" recommendations, and admissions. That made the plan smaller, but it also made it believable. And the part I found most useful was planning the evaluation before any building. Writing the answer key, locking the model and settings so only comparison size changes, and having two people score a sample made me see that the evaluation is the study, not an afterthought.

I will use this in the next RAG work I do. In PT-M1, I tested a chatbot by trying a few questions. Next time, I want to write the test questions and the correct answers first, change one thing at a time, and score the results the same way each time. It also applies to our capstone, which depends on long accreditation documents. Logging each source with its version and date, and saying clearly what the system will not do, are habits I want to build into that work from the start.`,
    documents: [
      {
        label: 'Proposal IEEE (PDF)',
        link: `${BASE}activities/4th-year-midterm/WW-M2_DecisionThree_Proposal_IEEE.pdf`,
        isNotebook: false,
      },
      {
        label: 'Proposal Presentation (PDF)',
        link: `${BASE}activities/4th-year-midterm/WW-M2_DecisionThree_Proposal_Presentation.pdf`,
        isNotebook: false,
      },
    ],
  },
  {
    id: '4y-ww-m2-revised',
    title: 'WW-M2 (Revised): RAG Chatbot Proposal Extension – JRU CSE Program Inquiries',
    description:
      'Revised and extended group proposal reworking the RAG chatbot study design, refocusing the research question, expanding the evaluation plan with 40 held-out questions across six categories, and introducing source-versioning and structure-based chunking strategies.',
    period: 'Midterm',
    yearLevel: '4th Year',
    semester: '1st Semester',
    type: 'Written Work',
    techStack: ['RAG', 'Research Design', 'Chunking Strategy', 'Evaluation Design', 'Technical Writing'],
    reflection: `For the extension, my group, DecisionThree, went back to our WW-M2 proposal and reworked it. We still did not build anything or collect data. What changed was the study itself. Our first version asked how answer quality drops as students compare more programs at once. In the updated version, we dropped comparison size as the variable and asked how accurately, and with what documentary support, a RAG chatbot can answer Grade 12 students' questions about JRU CSE programs and curriculum requirements. We added a supporting question that compares the chatbot with the same language model without retrieval. We also changed the sources. The main one became the College General Information for School Year 2025–2026, and the April 2024 program profiles became supporting sources that don't automatically override it. Then we filled in the plan. We planned about 40 held-out questions, with 30 fully answerable questions across six categories, five partly answerable, and five unsupported. That gives about 80 responses across the two conditions, scored by two of us against a faculty-reviewed key. We also planned to chunk by document sections and intact course records instead of arbitrary page cuts.

The biggest thing I learned is that the design has to match the question. With a with-retrieval condition and a without-retrieval condition, the model, the settings, and the questions stay the same, and only the retrieved passages differ. Even the instructions needed care. The without-retrieval condition can't be told to answer only from supplied documents, because it gets none. I also learned how much detail goes into scoring. A refusal gets no automatic credit, a response with no factual claims gets an undefined score instead of full marks, and we report every refusal and undefined score so nothing hides a failure. Small rules like those are what keep results honest.

I also learned to treat sources as things with versions. A school-year label is not the same as a curriculum version, and a newer document does not automatically replace an older one, so we plan to log the edition, page numbers, and any conflicts for every source. The same care applies to what the chatbot says. A missing prerequisite does not prove a course has none, and a listed internship subject does not prove training hours. The chatbot should say what the documents support and stop there. And I noticed a link to my midterm. I wrote that structure-based chunking suits documents with sections, but I left out overlap. Here, we planned structure-based chunking and recorded the chunk limits and overlap as settings to choose and freeze before testing.

I plan to reuse this in later RAG work and in our capstone. When I want to know whether retrieval actually helps, I will compare against the same model without it, instead of assuming it does. I will write the scoring rules before I see any results, and I will track document versions from the start. That last habit especially matters for the capstone, where the system depends on accreditation documents that change over time.`,
    documents: [
      {
        label: 'Revised Proposal IEEE (PDF)',
        link: `${BASE}activities/4th-year-midterm/WW-M2_Revised_Proposal_IEEE.pdf`,
        isNotebook: false,
      },
      {
        label: 'Revised Proposal Presentation (PDF)',
        link: `${BASE}activities/4th-year-midterm/WW-M2_Revised_Proposal_Presentation.pdf`,
        isNotebook: false,
      },
    ],
  },
  {
    id: '4y-midterm-exam',
    title: 'Midterm Exam: Traditional ML vs. LLM Development & RAG Chunking',
    description:
      'Summative midterm exam comparing traditional ML and LLM development lifecycles, explaining RAG pipeline chunking and retrieval evaluation, and analyzing chatbot failure modes caused by chunk size and boundaries.',
    period: 'Midterm',
    yearLevel: '4th Year',
    semester: '1st Semester',
    type: 'Exam',
    techStack: ['RAG', 'LLM Development', 'Chunking', 'Retrieval Evaluation', 'Traditional ML'],
    reflection: `The midterm had two tests. Test I asked me to compare how traditional ML and LLM development differ across the lifecycle. I answered that traditional ML trains a model for one defined prediction task, while LLM development usually starts with a pre-trained model and adapts the system around it. I drew both as flows: data, then development, then deployment. For ML, that meant data cleaning, training, tuning, and evaluating, then making specific predictions. For LLMs, it meant prompts and reliable documents, a pre-trained model adapted through prompt engineering, RAG, or fine-tuning, then deployment through an API or direct hosting. Test II asked why RAG development needs chunking and retrieval evaluation, and why a chatbot can fail to retrieve complete information. I drew the RAG pipeline and explained that picking one chunk size and never testing it can give poor answers, since a chunk that is too small misses the meaning the user asked about. For the second question, I tied the failure to chunk size and chunk boundaries, and said structure-based chunking suits documents with headers and sections, while recursive chunking suits long paragraphs.

What I learned is that the real difference between ML and LLM work is where the effort goes. In ML, I build the model. In LLM work, the model already exists, so the effort goes into everything around it, like the prompts, the documents, and how the answer gets grounded. I also learned that there is no best chunking strategy. The right one depends on what the documents look like, and the only way to know is to test it and check what the retriever actually pulls back.

I also missed something. I never mentioned chunk overlap, and that is the most direct fix for the exact problem the second question described. When a sentence gets cut at a chunk boundary, overlap keeps a bit of text shared between neighboring chunks, so the full idea still lands in at least one of them. I explained the problem well, but I left out the standard fix for it.

This will matter in my later RAG work and in our capstone. We match accreditation criteria against long institutional documents, and those documents have headers, sections, and long paragraphs, which is the exact case I wrote about on the exam. Next time I will choose a chunking strategy based on the document structure, set an overlap on purpose, and test a few chunk sizes against real questions instead of picking one and moving on.`,
    documents: [
      {
        label: 'Midterm Exam (PDF)',
        link: `${BASE}activities/4th-year-midterm/Midterm_Exam.pdf`,
        isNotebook: false,
      },
    ],
  },

  /* ──────────────────────────────────────────
     4th Year · 1st Semester · Finals Period
     ────────────────────────────────────────── */
  {
    id: '4y-pt-f1',
    title: 'PT-F1: Chunk Size & Overlap Experiment on a FAISS RAG Notebook',
    description:
      'Performance task running a controlled RAG retrieval experiment with six chunk-size/overlap/top-K configurations on a FAISS index loaded with the JRU College General Information PDF, scored with Precision@3, Recall@3, and MRR@3.',
    period: 'Finals',
    yearLevel: '4th Year',
    semester: '1st Semester',
    type: 'Performance Task',
    techStack: ['RAG', 'FAISS', 'Qwen3-8B', 'MiniLM', 'Precision@3', 'Recall@3', 'MRR@3', 'Python'],
    reflection: `For this exercise, I ran a controlled experiment on chunk size and overlap using a FAISS notebook. First, I split the notebook into logical sections and added a Markdown cell above each code cell to explain it, then checked that it still ran. Next, I switched the model to Qwen3-8B in 4-bit form, which is the model my group, DecisionThree, proposed, and I loaded the assigned JRU College General Information PDF. I wrote five test questions with expected answers and page evidence: two easy, two average, and one difficult. Then I ran six configurations on a Tesla T4: a 1,000/200 baseline, 600/200, 1,400/200, no overlap, 100 overlap, and a Top-K of 5. I scored each with Precision@3, Recall@3, and MRR@3, and I tracked generation time and GPU memory. I provisionally kept 1,400 characters, 200 overlap, and Top-K 3. It had the highest recall, 0.800, and it used less time and memory than Top-K 5.

What I learned first is that the chunk boundary can break an answer. In Q1, the retriever returned the units for course C401, but without the course heading, so the model could not tell which course they belonged to. The complete labeled passage was missed. That is the exact failure I wrote about on my midterm, where a chunk boundary cuts information apart. Overlap showed the same pattern in the numbers. With no overlap, recall fell to 0.600 and MRR to 0.500, while 200 overlap kept the baseline at 0.700 for both. Smaller chunks did worst, with recall of 0.467 at 600 characters. And retrieving more did not help. Top-K 5 added no new relevant evidence over Top-K 3, but it took about 41 seconds per answer and 12 GiB of GPU memory instead of about 30 seconds and 9 GiB.

The second thing I learned is that good retrieval does not guarantee a good answer. Even with the best configuration, the model added things the evidence did not support. In Q3, it said 3 units were required hours and claimed no laboratory units. In Q5, it added a comment that design projects usually involve lab work. In Q4, the policy was right, but the citation used the printed page number, 82, instead of the PDF page label, 10. I had already written guardrails against these in the prompt, so the lesson is that a prompt reduces errors but does not remove them. I also learned to be careful with my own claims. I tested only five questions, ran each setup once, and labeled relevant chunks after the fact, so 1,400/200/3 is a provisional choice, not a proven best setting.

This will help in the next stage of our proposed study, where we planned to pilot retrieval and then freeze the chunk limits, overlap, and number of retrieved passages before evaluating. I now have measured evidence for those choices. It also applies to our capstone, which works with long accreditation documents. There, I will keep headings attached to the content they describe, test a few chunk sizes against real questions, measure retrieval separately from the final answer, and say plainly how small my test was.`,
    documents: [
      {
        label: 'IEEE Report (PDF)',
        link: `${BASE}activities/4th-year-finals/PTF1_BERNARDO_IEEE_Report.pdf`,
        isNotebook: false,
      },
      {
        label: 'Notebook',
        link: `${BASE}activities/4th-year-finals/PTF1_BERNARDO.html`,
        isNotebook: true,
        downloadLink: `${BASE}activities/4th-year-finals/PTF1_BERNARDO.ipynb`,
        downloadName: 'PTF1_BERNARDO.ipynb',
      },
    ],
  },
  {
    id: '4y-pt-f2',
    title: 'PT-F2: Thirteen Chunking Setups – Chunk Size & Overlap Ablation Study',
    description:
      'Extended ablation study comparing 13 chunk-size and overlap combinations (300–1,400 chars × 0–20% overlap) across nine questions and 351 retrieved results, scored with Precision@3, Recall@3, and MRR@3 on an engineering curriculum PDF.',
    period: 'Finals',
    yearLevel: '4th Year',
    semester: '1st Semester',
    type: 'Performance Task',
    techStack: ['RAG', 'FAISS', 'Ablation Study', 'MiniLM', 'Precision@3', 'Recall@3', 'MRR@3', 'Python'],
    reflection: `For this activity, I extended my PT-F1 notebook into a larger experiment on chunk size and overlap. I compared the 1,000-character, 200-overlap baseline against twelve other settings: chunk sizes of 300, 500, 1,000, and 1,400 characters, each with 0%, 10%, and 20% overlap. I kept everything else the same: the same engineering PDF, the same embedding model, the same FAISS index type, and Top-K 3. I wrote nine questions, three easy, three average, and three difficult, and broke them into 26 required facts. Then I scored every setting with Precision@3, Recall@3, and MRR@3, and I tracked chunk count, indexing time, and index size. In total, that was 13 indexes, 117 question tests, and 351 retrieved results, and I checked every one of them. I recommended C10, which uses 1,400-character chunks with no overlap. It beat the baseline on all three scores: precision rose from 0.2222 to 0.2593, recall from 0.3981 to 0.4722, and MRR from 0.3704 to 0.4815. It also needed only 50 chunks instead of 84.

The biggest thing I learned is that no single setting rule holds up on its own. In PT-F1, I thought overlap helped, and that was true at 1,000 characters, where recall rose from 0.1759 with no overlap to 0.3981 with 20%. But at 300 characters, more overlap made recall worse, and at 1,400 characters, no overlap gave the best precision and MRR. Bigger chunks also did not always win. The best setting depended on how size and overlap worked together. I also learned that a high similarity score does not mean a chunk is useful. One 300-character chunk scored 0.8499 for a prerequisite question and contained the right course codes and the 240 hours, but it started in the middle of a word and left out the course heading. Without the heading, you can't tell whose prerequisites they are. That is the same boundary problem I saw in PT-F1 and wrote about on my midterm.

I also learned to read more than one number. C11 had slightly higher recall than C10, 0.4815 against 0.4722, and it fully covered four questions instead of three. If I had looked only at that, I would have chosen it. But on the difficult questions, which need several facts and the right course, C11's recall was 0.1111 and C10's was 0.6667. And no setting could retrieve the answer to Q1, so chunking alone was not going to fix everything.

The hardest lesson was being honest about what the results mean. C10 has 32 of its 50 chunks over the embedding model's 256-token limit, so a fact could count as retrieved even though the vector could not represent it. I had only nine questions, and each difficulty group had only three. I also refined four matching rules after an earlier run, using the same questions, so this is a development experiment, not a clean test. And I measured timing once, so I did not treat the small speed gaps as meaningful. That is why I called C10 provisional.

I will carry three habits forward. Before I pick a chunk size, I will check the embedding model's token limit. I will test chunk settings on questions that need several facts and the right course, not just easy lookups. And I will keep my development questions separate from the ones I use for the final check, which is what our WW-M2 plan already calls for. These matter for our capstone too, since it also works with long documents that have many similar passages. I would rather report a smaller, honest result than a stronger-sounding one I can't support.`,
    documents: [
      {
        label: 'IEEE Report (PDF)',
        link: `${BASE}activities/4th-year-finals/PTF2_BERNARDO_IEEE_Report_v2.pdf`,
        isNotebook: false,
      },
      {
        label: 'Source Document (PDF)',
        link: `${BASE}activities/4th-year-finals/PTF2_BERNARDO_IEEE_Report.pdf`,
        isNotebook: false,
        downloadLink: `${BASE}activities/4th-year-finals/PTF2_BERNARDO_IEEE_Report.pdf`,
        downloadName: 'PTF1_Member1_Computer_and_Electronics_Engineering.pdf',
      },
      {
        label: 'Notebook',
        link: `${BASE}activities/4th-year-finals/PTF2_BERNARDO.html`,
        isNotebook: true,
        downloadLink: `${BASE}activities/4th-year-finals/PTF2_BERNARDO.ipynb`,
        downloadName: 'PTF2_BERNARDO.ipynb',
      },
      {
        label: 'Experiment Results',
        link: `${BASE}activities/4th-year-finals/PTF2_BERNARDO_Experiment_Results_Table_A.csv`,
        isNotebook: false,
        downloadLink: `${BASE}activities/4th-year-finals/PTF2_BERNARDO_Experiment_Results.xlsx`,
        downloadName: 'PTF2_BERNARDO_Experiment_Results.xlsx',
        sheets: [
          { label: "Table A", link: `${BASE}activities/4th-year-finals/PTF2_BERNARDO_Experiment_Results_Table_A.csv`, description: "PT-F2 retrieval experiment\nLuke Joaquin Bernardo. I obtained these results from my executed Google Colab notebook." },
          { label: "Table B", link: `${BASE}activities/4th-year-finals/PTF2_BERNARDO_Experiment_Results_Table_B.csv` },
          { label: "Table C", link: `${BASE}activities/4th-year-finals/PTF2_BERNARDO_Experiment_Results_Table_C.csv` },
          { label: "Question Metrics", link: `${BASE}activities/4th-year-finals/PTF2_BERNARDO_Experiment_Results_Question_Metrics.csv` },
          { label: "Evidence", link: `${BASE}activities/4th-year-finals/PTF2_BERNARDO_Experiment_Results_Evidence.csv` },
        ],
      },
    ],
  },
  {
    id: '4y-ww-f1-f2',
    title: 'WW F1 & F2: Optimizing a RAG Chatbot – CPU vs. GPU Speed & Answer Quality',
    description:
      'Group written work (DecisionThree) comparing five RAG chunking and retrieval configurations for JRU CSE program questions, with controlled CPU and GPU timing experiments on Qwen2.5-1.5B-Instruct, measuring answer correctness, source support, and retrieval precision against generation speed.',
    period: 'Finals',
    yearLevel: '4th Year',
    semester: '1st Semester',
    type: 'Written Work',
    techStack: ['RAG', 'Qwen2.5', 'FAISS', 'GPU Benchmarking', 'Answer Evaluation', 'Python', 'Jupyter Notebook'],
    reflection: `For this activity, my group, DecisionThree, tested a RAG chatbot for JRU College of Computer Studies and Engineering questions. We used the CSE sections of the College General Information and a fixed set of 12 questions: four easy, four average, and four difficult. We compared five chunking and retrieval settings, which we called A to E, and we measured how long the chatbot took on a CPU and on a Tesla T4 GPU. For the speed tests, we ran a warm-up and three measured trials for each setting. We planned to use Qwen3-8B, but its CPU tests did not finish, so we switched to the smaller Qwen2.5-1.5B-Instruct to complete a fair CPU and GPU comparison. The GPU was about 13 to 15 times faster, and most of that came from faster generation. But the fastest setting was not the best one. Setting A answered quickest, yet only three of its 12 answers were fully correct, complete, and supported. We recommended D, which uses 800-character chunks, 200 overlap, top-k of three, and a revised prompt. It fully answered six of 12.

What I learned first is that speed and answer quality are separate problems. A faster setup did not give better answers, so we had to check both. I also learned that the extra retrieval we expected to help did not. Retrieving five passages instead of three raised evidence coverage from 61.8% to 70.1%, but precision fell from 50.0% to 33.3%, completeness dropped, and each answer took longer. More retrieved material did not consistently help the model use the right course information. Raising overlap from 100 to 200 characters gave a smaller but real gain at a small time cost. And the revised prompt, which told the model to match facts to the named course and not to use neighboring courses, helped more than our bigger effort to reorganize the source into 1,094 labeled records. That reorganized version had gains and losses, and its precision dropped to 36.1%.

I also learned how careful the checking has to be. We scored correctness and source support separately, because an answer can be right without being supported by the passages the model was given. One example was the ECE C405 lecture-unit question, where the answer had the correct value but the passage only showed a unit count with no lecture label. When we audited all 84 unique answer and context groups, we found one support score that was wrong, because the answer named the wrong source passage. Fixing it moved configuration C from five fully successful answers to four. A smaller case taught me something too. The source lists Computer Architecture as four units in one place and two in another, so a good answer has to point out the conflict instead of picking one.

Our results also taught me to be honest about what we had and had not shown. We kept the failed Qwen3 CPU attempts in the records and did not make up times for them. We reported that the CPU and GPU ran on different Colab hosts, and we said that 12 questions we had looked at while improving the setup show development gains, not proof that it works on new questions. The prompt also did not fix missing retrieved evidence, since retrieval precision and coverage stayed the same.

I will use this in the rest of our work and in the capstone. When I tune a system, I will measure speed and answer quality together, and I will check answers against the retrieved evidence instead of only against the right answer. I will also try the cheaper fixes, like a clearer prompt, before reworking the data. And before we claim the chatbot is reliable, we need new questions it has never seen, plus questions it should refuse to answer, which our proposal planned from the start.`,
    documents: [
      {
        label: 'RAG Experiment Report (PDF)',
        link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Report.pdf`,
        isNotebook: false,
      },
      {
        label: 'Experiment Notebook',
        link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Notebook.html`,
        isNotebook: true,
        downloadLink: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Notebook.ipynb`,
        downloadName: 'WW-F1F2_DecisionThree_RAG_Notebook.ipynb',
      },
      {
        label: 'Experiment Results',
        link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Results_Results.csv`,
        isNotebook: false,
        downloadLink: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Results.xlsx`,
        downloadName: 'WW-F1F2_RAG_Results.xlsx',
        sheets: [
          { label: "Results", link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Results_Results.csv`, description: "DecisionThree RAG experiment results\nITC-C508 WW1–WW2. Fixed 12-question set. Times are seconds. Three measured trials per configuration.\nCurrent measured timings" },
          { label: "Raw Responses", link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Results_Raw_Responses.csv`, description: "All original response measurements\nTimes and answers are actual notebook outputs. Calculated columns attach matching evaluations without changing observations." },
          { label: "Trial Log", link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Results_Trial_Log.csv`, description: "All recorded trials and attempts\nNotebook trial records: current runs, preserved previous trials, supplementary GPU runs and interrupted CPU pilots." },
          { label: "Answer Review", link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Results_Answer_Review.csv`, description: "Answer correctness, support and completeness\nAll 84 unique cases were source-audited. One citation-related support score was corrected; earlier group verification is preserved in the history." },
          { label: "Retrieved Evidence", link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Results_Retrieved_Evidence.csv`, description: "Retrieved passages used by the chatbot\nActual generation-context passages from notebook records. Relevance flags are prepared source-based judgments." },
          { label: "Questions", link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Results_Questions.csv`, description: "Fixed questions and reference answers\nReference answers and counts come from the fixed notebook evaluation key, not generated chatbot answers." },
          { label: "Source Evidence", link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Results_Source_Evidence.csv`, description: "Handbook excerpts and required answer elements\nAuthoritative source: COL-GI-2026-2027_CSE_Only.pdf, preserved unchanged in the experiment data." },
          { label: "Methods", link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Results_Methods.csv`, description: "Methods, provenance and calculation checks" },
        ],
      },
      {
        label: 'Experiment Data (ZIP)',
        link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Experiment_Data.csv`,
        isNotebook: false,
        downloadLink: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Experiment_Data.zip`,
        downloadName: 'DecisionThree_RAG_Experiment_Data.zip',
        sheets: [
          { label: 'Package Files', link: `${BASE}activities/4th-year-finals/WW-F1F2_DecisionThree_RAG_Experiment_Data.csv`, description: 'Files included in the original experiment data package. Download the ZIP to access their contents.' },
        ],
      },
    ],
  },
  {
    id: '4y-p-f1',
    title: 'P-F1: Group Final Project – RAG Chatbot for JRU CSE Inquiries',
    description:
      'Group final project (DecisionThree) building and evaluating a full RAG pipeline for JRU College of Computer Studies and Engineering inquiries — including CPU and GPU experiments, Hugging Face Spaces deployment, and a 16-question evaluation with correctness and source-support scoring.',
    period: 'Finals',
    yearLevel: '4th Year',
    semester: '1st Semester',
    type: 'Final Project',
    techStack: ['RAG', 'Qwen2.5', 'Chroma', 'MiniLM', 'Gradio', 'Hugging Face Spaces', 'ZeroGPU', 'Python'],
    reflection: `For our final project, my group, DecisionThree, built and evaluated a RAG chatbot that answers questions about JRU's College of Computer Studies and Engineering programs. We used the CSE sections of the College General Information, with Qwen2.5-1.5B-Instruct as the generator and MiniLM embeddings with Chroma for retrieval. We split the work into three areas. John Cyruz Patron wrote the questions and reference answers, evaluated the answers, and prepared the IEEE report. Job Russel Enriquez prepared the source files, designed the interface, and analyzed the results in Excel. My part was the notebook, the CPU and GPU experiments, and the Hugging Face deployment. We also shared the job of checking that the notebook, workbook, CSV, report, and deployed chatbot all agreed with each other.

On the notebook, I kept the supplied flow and connected PDF loading, chunking, embeddings, Chroma retrieval, Qwen generation, and the timing and export code into one working pipeline. I also fixed the runtime problems that came up. For example, Colab supplied a torchvision version that did not work with our pinned Torch installation, so I removed the unused package and added a runtime restart so the pinned packages load before the pipeline starts. For the experiments, I ran the planned configurations on CPU and on the T4 GPU, with a warm-up and three measured trials each, and I checked that the models were really running on the device I intended. I kept the actual outputs, warm-ups, setup times, and failed attempts. That included the Qwen3-8B CPU pilots, which were interrupted before they finished an answer. That is why we switched to the smaller Qwen2.5 model, and we kept those failed runs in the records instead of filling in times. The matched runs showed the GPU was about 13 to 15 times faster, mostly because generation got faster.

For deployment, I put the selected pipeline on Hugging Face Spaces with Gradio and ZeroGPU, using the same model, prompt, and 800/200/3 settings as the notebook. I kept the settings fixed, ran the hosted checks, and saved the downloaded response records. The hosted checks taught me something the notebook could not. The internship answer gave the credit units but left out one of the two prerequisites even though retrieval had supplied both codes. And one tuition question that accidentally included a list number and quotation marks made the model invent a cost of three pesos per unit, while the same question without the list number said the fee was not available. We reported that as a sensitivity to input formatting and kept the bad record.

The final results were humbling. On our 16-question run, the chatbot fully answered 6 of 12 answerable questions and handled only 1 of 4 unanswerable questions correctly, so 7 of 16 overall. Mean response time was 3.580 seconds. The failures were specific. It called six internship credit units six training hours, borrowed "Visual Basic for Excel" from a nearby course as a required Excel version, and made up Monday and Wednesday class times. Our prompt already told it to name missing details, and it still gave unsupported answers on three of the four. That taught me that an instruction in a prompt does not guarantee the behavior, and that speed and reliability are separate things. A fast system that makes up an answer is worse than a slow one that admits it does not know.

I gained several skills. I can now wire a full RAG pipeline together and debug its environment, run a controlled experiment with fixed settings and verify the hardware, and deploy a model on ZeroGPU and check it with real requests. The bigger change was in how I report results. We kept failures visible, said that the original 12 questions were not a clean test, and listed what we did not do, such as the comparison without retrieval and the planned larger question set. Working in a team also showed me why shared review matters. Each of us owned a part, but the project only held together because we checked each other's files against the same evidence. We also disclosed that we used ChatGPT as an assistant and that the final scoring was AI-assisted, with our group responsible for checking everything.

I can use all of this in later projects and in our capstone. I will keep the evaluation questions separate from the ones I tune on, test unanswerable questions from the start, and check a deployed system with real inputs instead of trusting the notebook. The next step for this chatbot is also clear: better course-aware retrieval and tests on new questions before anyone relies on it.`,
    documents: [
      {
        label: 'Final IEEE Report',
        link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_IEEE_Report.pdf`,
        isNotebook: false,
        downloadLink: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_IEEE_Report.docx`,
        downloadName: 'PF1_DecisionThree_Final_IEEE_Report.docx',
      },
      {
        label: 'Final Notebook',
        link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Notebook.html`,
        isNotebook: true,
        downloadLink: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Notebook.ipynb`,
        downloadName: 'PF1_DecisionThree_Final_Notebook.ipynb',
      },
      {
        label: 'Evaluation Results',
        link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Evaluation_Results.csv`,
        isNotebook: false,
        downloadLink: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Evaluation.xlsx`,
        downloadName: 'PF1_DecisionThree_Final_Evaluation.xlsx',
        sheets: [
          { label: "Results", link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Evaluation_Results.csv`, description: "DecisionThree final evaluation\nSelected revised prompt; Qwen2.5-1.5B; GPU D (800/200/3)" },
          { label: "Evaluation", link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Evaluation_Evaluation.csv`, description: "Final 16-question response evaluation" },
          { label: "Elements", link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Evaluation_Elements.csv`, description: "Required answer elements and documentary coverage" },
          { label: "Evidence", link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Evaluation_Evidence.csv`, description: "Actual passages supplied to the language model" },
          { label: "Benchmarks", link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Evaluation_Benchmarks.csv`, description: "Earlier three-trial CPU/GPU experiments" },
          { label: "Measurements", link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Evaluation_Measurements.csv`, description: "Earlier notebook response measurements, including warm-ups" },
          { label: "TrialLog", link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Evaluation_TrialLog.csv`, description: "Earlier notebook trial and setup records" },
          { label: "Setup", link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Evaluation_Setup.csv`, description: "Final evaluation setup and warm-up" },
          { label: "Methods", link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Evaluation_Methods.csv`, description: "Sources, scoring rules and experiment boundaries" },
        ],
      },
      {
        label: 'Response Evaluation (CSV)',
        link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Response_Evaluation.csv`,
        isNotebook: false,
        downloadLink: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Response_Evaluation.csv`,
        downloadName: 'PF1_DecisionThree_Final_Response_Evaluation.csv',
      },
      {
        label: 'Integrity Statement (PDF)',
        link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Integrity_Statement.pdf`,
        isNotebook: false,
      },
      {
        label: 'Member Responsibility Matrix',
        link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Member_Responsibility.pdf`,
        isNotebook: false,
        downloadLink: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Member_Responsibility.docx`,
        downloadName: 'DecisionThree_Member_Responsibility_Matrix.docx',
      },
      {
        label: 'Project Input Package (ZIP)',
        link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Project_Input.csv`,
        isNotebook: false,
        downloadLink: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Project_Input.zip`,
        downloadName: 'DecisionThree_Final_Project_Input.zip',
        sheets: [
          { label: 'Package Files', link: `${BASE}activities/4th-year-finals/PF1_DecisionThree_Final_Project_Input.csv`, description: 'Files included in the original final project input package. Download the ZIP to access their contents.' },
        ],
      },
    ],
  },
];

/*
  Previous project entries were removed from the Projects tab.
  Add new activities here later if you want them displayed again.
*/

/**
 * Legacy content removed from the portfolio UI.
 * The original activity data has been intentionally cleared.
 */

/*
  {
    id: 'prelim-exam-set-b',
    title: 'Prelim Exam: Set B',
    description:
      'Summative prelim assessment task documenting understanding of key course concepts.',
    period: 'Prelim',
    type: 'Assessment Task',
    techStack: ['Course Assessment', 'Problem Solving', 'Technical Writing'],
    reflection: `Test I: Correlation & Data Exploration

The process of working the scatterplot in Test I actually made me see the world of Unit Price and Quantity Sold as I actually see it. Plotting the five data points and putting Quantity Sold on the y-axis it became apparent that the higher the price the lower the quantity sold - an obvious downward trend left to right. That gave the relationship an intuitive feel to it, similar to the textbook example. On that I was confident that the correlation coefficient would be close to -1. The reasoning was clear and easy to follow: the trend was the same and it was indisputable. All the stores of the dataset appeared to act similarly - an increase in price, the decrease in the number of sold units. That is precisely the sort of steady negative pattern that has not a lot of scatters that drives the r value to the strong negative territory.

Responding to the question on whether Unit Price is a predictive variable strong enough to predict Quantity Sold was also made evident when I had the scatterplot in my view. Since the points were also moving in a rather narrow downward trend, I was compelled to assume that, yes, the Unit Price has enough predictive power to be of use. Reflectively, I believe that the strength of a correlation can only be considered not only mathematically but also in a real-world context - in retail pricing almost always has a direct influence on buying behavior which reinforced this conclusion further.

Test II: Model Parameters & Fitness

I did not feel entirely confident as I was responding to this section on which part of the equation was the intercept and which one was the slope. Rather than using guesses, I simply wrote the entire formula: Quantity Sold = 1200 - 0.55(Price) and discussed the model in general. I said that at a price of zero the quantity would be theoretically high and that an addition of one peso would reduce the quantity by 1200 but I did not label the 1200 as the intercept (B0) or the -0.55 as the slope (B1).

In revelation, I realize that there is a difference. An intercept (B0 = 1200) is the quantity of units sold when price is zero - where the regression line begins on the Y-axis. The slope (B1 = -0.55) explains that increasing the price by one peso lowers the amount of the quantity sold by 0.55 units. I understood the message; I was just not comfortable to classify them properly initially. I will ensure that I am more specific on that in future assignments.

On the model fitness, the R-Sq reading of 0.48 I found to be a fair to average fit. An R-squared of 0.48 implies that the effects of unit price on the quantity sold account for about half the change. To any person who follows this model, it offers a helpful tip but it is not supposed to be the only decision making tool.

The most provocative one was the real life question of why a model can never reach zero error. My response centered on the fact that the request to minimize errors to zero would result in a model being recalling the training data, therefore, too sensitive to noise. That is to say that it would do well on the data it experienced but do poorly on new data. It actually pointed me to the trade-off between overfitting data and having a useful model in practice, and it is one that I would like to explore further.`,
    documents: [
      {
        label: 'Task File',
        link: `${BASE}activities/prelim/Exam SET B - BERNARDO.pdf`,
        isNotebook: false,
      },
    ],
  },
  {
    id: 'ww-p2',
    title: 'WW-P2: Customer Data Cleaning Pipeline',
    description:
      'Comprehensive data cleaning and preprocessing pipeline implementing outlier handling, feature engineering, normalization, and categorical encoding for customer analytics.',
    period: 'Prelim',
    type: 'Data Engineering',
    techStack: ['Python', 'Data Cleaning', 'Feature Engineering', 'Data Preprocessing'],
    reflection: `It was a practical exercise to show that data quality is the key to the quality of models. Rather than working with a clean dataset, we initially took a genuinely flawed 300-row customer file (noisyknn300.csv) and created a preparation pipeline ourselves to predict purchase likelihood.

  The best learning experience was at the very start when I established a baseline. I have used a naive k-Nearest Neighbors model, which was just running through rows where the values are missing and leaving the categorical variables out. Since a percentage of the data, 53%, were missing, I eliminated 159 rows. Only 42.86% accuracy was obtained in training on the remaining records, which was worse than random guessing. This clearly demonstrated the collapse of k-NN relying on Euclidean distance in cases of sparse and unscaled data and noise.

  To solve these issues, I developed a pipeline in an organized fashion that retained the missing rows. To start with, I marked physically impossible outliers (e.g. negative incomes or ages above 100) as NaN. The median imputation was then used to fill in the remaining 159 rows. I also did the normalization of inconsistent text like fem and Female in order to be one-hot encoded. More importantly, I used a MinMaxScaler. Since k-NN computes distances, an unnormalized yearly income of 100,000 dominates such a tiny feature as Support Calls. Normalizing all to a 0-1 range removed this bias and increased the accuracy to almost 69%.

  The greatest challenges were technical hiccups of the coding environment. Upon trying to use a log1p transformation to even out the income distribution, I accidentally used the log twice, which caused a corruption of the data. I resolved this by saving a clean copy with df_final.copy() before every transformation and also implemented an automated safety check which filled any NaNs that might have been generated in between. This avoided the throwing of a ValueError by the .fit() call.

  I then pruned the model, removing 11 features whose correlation to the target was less than 0.05, employed distance-weighted voting, and optimized the hyperparameter to k = 3. The last model had an accuracy of 87.93%. The most important conclusion is that the 45% increase in performance was solely due to data hygiene and not because of the change in k. In predictive modeling, the actual work takes place in feature engineering and preprocessing.`,
    documents: [
      {
        label: 'Report',
        link: `${BASE}WW-P2/BERNARDO WW2-datacleaning.pdf`,
        isNotebook: false,
      },
      {
        label: 'Notebook',
        link: `${BASE}WW-P2/BERNARDO_WW2_datacleaning.html`,
        isNotebook: true,
      },
    ],
  },
  {
    id: 'pt-p2',
    title: 'PT-P2: Iris Classification with kNN',
    description:
      'Implementation of K-Nearest Neighbors algorithm for Iris species classification including model training, evaluation, and comprehensive data visualization.',
    period: 'Prelim',
    type: 'Machine Learning Project',
    techStack: ['Python', 'scikit-learn', 'Machine Learning', 'Data Visualization'],
    reflection: `It has been a very practical and grounding experience learning about predictive modeling and the k-Nearest Neighbors (kNN) algorithm. With Python code to classify Iris flowers, and auditing the use of the same logic by government agencies, I was able to look beyond the AI hype and learn how these systems actually function.

  The principle of kNN involves classifying a new point according to the majority of closest neighbors. It is referred to as an instance-based or lazy-learning algorithm as it stores the training data and then waits until it is required to make a prediction where it then calculates the distances. To apply this on the Iris dataset, the data had to be divided into training and testing sets which is necessary to demonstrate that the model has learned patterns and not rote memorized answers.

  One of the most important lessons was the influence of the k parameter, the number of neighbors who vote. The choice of k is not by chance. Researchers applied 5-fold cross-validation in a study of flood prediction in Jakarta, and discovered that the best value of k was k = 3, providing both local flood patterns and sensor noise.

  The demonstration of the algorithm showed real-life weak points. In the Iris case, the model classified Setosa with ease since the measurements of this case are very different; however, it confused Versicolor and Virginica, which share a common size. In actual government data, the problems increase. kNN is based on Euclidean distance, so it is highly sensitive to the scale of features. When the amount of rainfall is assessed in hundreds of millimeters and the frequency of floods in single figures, the large numbers take control in distance calculation. The first step is to normalize the data. kNN has the issue of class imbalance as well. Fraud claims constitute less than 0.1% of data in Medicare fraud detection, and therefore the algorithm will predict legitimate data, reducing accuracy to approximately 79.2% without resampling methods.

  I have not only understood the importance of coding but also the reason why kNN is still popular compared to high-level neural networks in the public sector. It is reduced to transparency. Neural networks are black boxes, meaning it is difficult to explain decisions. kNN is a glass box: when a claim is vote-like, investigators can analyze the specific historical claims (the neighbors) that contributed to the vote. This reasonability and ease of auditing results make kNN an effective, open, and legally justifiable automated decision-making tool.`,
    documents: [
      {
        label: 'Report',
        link: `${BASE}PT-P2/PT-P2 - BERNARDO, Luke Joaquin.pdf`,
        isNotebook: false,
      },
      {
        label: 'Notebook',
        link: `${BASE}PT-P2/PT_P2_BERNARDO,_Luke_Joaquin.html`,
        isNotebook: true,
      },
    ],
  },
  {
    id: 'revised-knn-ieee',
    title: 'Revised kNN IEEE Report',
    description:
      'Addendum activity document providing detailed analysis and documentation for the K-Nearest Neighbors algorithm implementation and research findings.',
    period: 'Prelim',
    type: 'Academic Documentation',
    techStack: ['Technical Writing', 'IEEE Format', 'Research Documentation'],
    reflection: `This addendum exercise presented a one-of-a-kind challenge. Rather than beginning with a blank sheet of paper or being limited to the original coding activity, I reread, rewrote, and improved my previously written IEEE-style technical paper. Going back to the draft made me step out of just reporting laboratory results and develop a full-fledged, professionally written technical audit of the k-Nearest Neighbors (kNN) algorithm.

  To update the paper, I had to review the organization and delivery of technical information. When converting my Python workflow into an academic format, I came to appreciate the fact that methodology can be as clear as code. I thus divided the methodology into six distinct modules, from library imports to visualization. Composing the reason I believe this modular architecture would work made me better appreciate the importance of professional software engineering practices, which improve reproducibility, a fundamental requirement of formal IEEE publications.

  I also refined the analysis sections of the experiment. It was not enough to say that the model obtained 96.67% accuracy with k = 5. The revision involved clarifying the rationale of results. I extended the hyperparameter experimentation discussion, stating what bias-variance tradeoff is when comparing 1 to 20 k values. I clarified the description of the confusion matrix, and made the awkward instance of single misclassification sound as a natural confusion of Versicolor and Virginica species and not a bug in computation. This experience made me more nuanced when writing about data.

  The major expansions in the topics regarding real-world applications and ethical decision-making contributed to considerable growth. Case studies on Medicare fraud, land planning in Cape Town, and flood prediction in Jakarta were polished by synthesizing complicated environmental limitations with the mathematics of the algorithm. I distinctly explained the importance of rigorous scaling of features when dealing with different environmental measurements using Euclidean distance. Additionally, the revision of the ethics section helped me internalize the concept of algorithmic accountability. Comparing the opaque nature of neural networks to the glass-box openness of kNN, I provided the paper with a solid, unified thesis on legal due process.

  In the end, the revision of this IEEE paper made me understand that a good technical document does not only provide raw data. It reads between the lines, rationalizes algorithmic errors, and insistently justifies practical utility. This exercise enabled me to see that professional communication and critical thinking cannot be separated when it comes to effective technical writing.`,
    documents: [
      {
        label: 'Report',
        link: `${BASE}Revised kNN IEEE Report/Addendum Activity - BERNARDO, Luke Joaquin.pdf`,
        isNotebook: false,
      },
    ],
  },
  {
    id: 'pt-p3',
    title: 'PT-P3: Real Estate Price Prediction',
    description:
      'Complete machine learning pipeline for predicting real estate prices, featuring data cleaning, preprocessing, and regression modeling with extensive feature engineering.',
    period: 'Prelim',
    type: 'Machine Learning Project',
    techStack: ['Python', 'Pandas', 'Data Preprocessing', 'Regression'],
    reflection: `I embarked on this project with the belief that a Multiple Linear Regression model would win over a Simple Linear Regression one. It was self-evident to me: the more variables, the more data and the better predictions. I hesitated when the results were not in accordance with that expectation. Simple Linear Regression with a single independent variable, floor area, had a value of R2 = 0.3459, a little bit higher than that of Multiple Linear Regression at R2 = 0.3372. The difference was minimal, yet this required me to challenge my assumptions.

  The major part of my unplanned work was the cleaning of the data. The raw data were characterized by missing values, huge blank columns, and rows that were missing a target variable. I needed to determine when to drop a column and when to impute missing data. The primitive features that were removed, like the number of total rooms and the year of construction, seemed logical since they did not provide much useful information. Occasionally, however, I still wonder whether a richer build-year field could be value-added.

  The most interesting observation was the negative coefficient of bathrooms in the MLR model. A bathroom could not actually lower the value of a home, and this is where I narrowed down the anomaly to multicollinearity. Bathrooms and floor area are correlated variables, where it becomes difficult to isolate the effect of each one. The model was not a bad one; it simply could not divide contributions cleanly. It is described in textbooks, but seeing it in my own output made it impressive.

  The residual plot also attracted my attention. Its shape was that of a funnel: the model worked well with mid-priced homes but failed with high-priced ones. These problems could be addressed by taking the target logarithm or using Ridge regression, which was outside the scope of this task. The first step is problem recognition.

  In general, the project taught me to be a manager of expectations. A single clear predictor that is well chosen, clean data, and a clear target can perform better than a complex model that was hastily developed. The most important lesson was the value of looking at unexpected results carefully and with curiosity, as that is where true learning takes place.`,
    documents: [
      {
        label: 'Report',
        link: `${BASE}PT-P3/PT_P3_BERNARDO,_Luke_Joaquin.pdf`,
        isNotebook: false,
      },
      {
        label: 'Notebook',
        link: `${BASE}PT-P3/PT_P3_BERNARDO,_Luke_Joaquin.html`,
        isNotebook: true,
      },
    ],
  },
  {
    id: 'midterm-long-quiz-set-a1',
    title: 'Midterm Long Quiz: Set A-1',
    description:
      'Self-reflection on the midterm long quiz covering logistic regression fundamentals and decision thresholds.',
    period: 'Midterm',
    type: 'Long Quiz',
    techStack: ['Logistic Regression', 'Assessment', 'Reflection'],
    reflection: `Midterm Long Quiz - Self-Reflection
Score: 31

**OVERVIEW:**
The Midterm Long Quiz covered the foundations of Logistic Regression - designing a meaningful dataset, understanding the Sigmoid curve, and applying model outputs to real scenarios. Looking back at my answers, I can see moments where my understanding came through, alongside some critical gaps that cost me points.

**WHAT I DID WELL:**
In Test I, I successfully designed a dataset for an Online Shopping domain with a binary target attribute (Shopee Mall Certified: YES/NO) and provided five sample instances with varied values. My explanation of the business benefit - assurance and trust for companies choosing certified stores - was relevant and coherent. I also showed self-awareness by identifying that Store ID would not contribute to the prediction, which demonstrated I was thinking critically about what makes an attribute meaningful.

In Test II, I correctly identified that the Sigmoid curve is unsuitable for continuous outcomes because logistic regression is categorical in nature, and I mentioned the threshold concept, which is the right mechanism to invoke. For Question 3, my reasoning about False Negatives in a hospital context was empathetic and grounded - I connected the Philippine healthcare cost reality to the consequence of misclassifying a sick patient as healthy, which showed real-world awareness beyond just the technical definition.

**WHERE I FELL SHORT:**
**Test I** - non-predictor included in dataset
I included Store ID as one of my four predictor attributes, which I acknowledged myself contributes nothing to the prediction. Knowing it was wrong and not replacing it was a missed opportunity. The question asked for four attributes that would each work well in predicting the target - Store ID fails that requirement entirely. I should have replaced it with a meaningful numerical or categorical predictor, such as average delivery time or return rate.

**Test I** - grouped justification instead of per-attribute
The question asked me to explain and justify each of the four predictor attributes individually. Instead, I gave a combined explanation treating three of them as a group. Each attribute has its own relationship with the target - Monthly Items Sold, Store Review, and Chat Response Rate each predict certification differently - and I needed to articulate those individual connections.

**Test II Q1** - missing the scatterplot description
The question explicitly required me to sketch or describe what happens to the regression line when binary values are plotted. I discussed the threshold conceptually but never described the visual behavior - that binary 0/1 outcomes cluster at two horizontal bands, making a straight linear line a poor fit that pushes predictions outside the [0, 1] range. The diagram or description was a scored component I did not deliver.

**Test II Q2** - misread the 0.15 output direction
I concluded that a 0.15 output means the student will pass, reasoning it is "near 0.1." This is a direct conceptual error. A Sigmoid output of 0.15 means the model sees only a 15% probability of the positive class (passing). Since 0.15 is well below the 0.5 threshold, the model classifies the student as failing - not passing. I confused a low probability with a safe or positive outcome.

**WHAT I WILL DO DIFFERENTLY:**
The quiz showed me that I understand Logistic Regression at a surface level but lose precision when applying it to specific values. I need to internalize that Sigmoid outputs are probabilities of the positive class - a low value always predicts the negative class, regardless of how small it feels.

I also need to follow instructions at the item level, not the question level. When a question says "for each attribute," that is a signal to answer in individual, separate explanations - not a grouped one. Going forward, I will annotate each sub-requirement before I start writing.`,
    documents: [
      {
        label: 'Quiz PDF',
        link: `${BASE}activities/midterm/Midterm Quiz.pdf`,
        isNotebook: false,
      },
    ],
  },
  {
    id: 'midterm-exam-set-b18',
    title: 'Midterm Exam: Set B-18',
    description:
      'Self-reflection on the midterm exam focused on delay risk prediction and validation strategies.',
    period: 'Midterm',
    type: 'Exam',
    techStack: ['Predictive Modeling', 'Assessment', 'Reflection'],
    reflection: `Midterm Exam - Self-Reflection
Score: 23

**OVERVIEW:**
The Midterm Exam applied predictive modeling concepts to a DOE fuel delivery crisis scenario. Set B asked me to work with Delay_Risk as a target attribute, evaluate model validation strategies, and reason about the real-world consequences of model errors. My score of 23 is lower than my quiz, and the reasons for that drop are specific and correctable.

**WHAT I DID WELL:**
My algorithm choice answer in Test I was strong. I correctly identified Logistic Regression, cited its suitability for binary categorical targets, named the Sigmoid function, and even mentioned the Confusion Matrix as a way to present results - showing I am connecting tools across the course, not treating them in isolation.

For the 0.34 probability output of TRK-205, I correctly applied the 0.5 threshold, classified the delivery as Low Risk, and supported it with a probability conversion (34 out of 100%). This was a precise, well-structured answer that matched exactly what the answer key expected.

In Test II Q1, I correctly identified the core danger of the 60/40 split - that a test set containing only Low Risk deliveries makes the model appear accurate even when it has never seen a High Risk case. The phrase "highly optimistic to low risk deliveries" captures the bias problem well.

**WHERE I FELL SHORT:**
**Test I Q1** - answered with algorithm logic, not stakeholder logic
I justified Delay_Risk over Travel_Distance by pointing out that the former is categorical and therefore supports Logistic Regression better. That is true, but the question asked why Delay_Risk is more useful to the DOE as a decision-making tool. The expected answer was about operational value - distance tells you how far a truck travels, while Delay_Risk tells you which deliveries are likely to fail, enabling the DOE to proactively reroute supplies. I gave a technical answer to a strategic question.

**Test II Q2** - wrong fold count and vague diagram
My diagram for 6-Fold Cross-Validation showed 5 boxes (labeled 6, 12, 18, 24, 30) instead of 6 folds. The question specified 6-fold on 30 rows, which means 6 groups of 5 rows each, with 6 training iterations. My diagram also described the rotation vaguely through arrows rather than as a clear iteration table. The expected format is a 6-row grid where exactly one fold is marked as VALIDATE in each row while the rest are marked Train. This was noted as wrong in my own booklet - and the error was structural, not minor.

**Test II Q3** - False Negative consequence was inverted
I wrote that a False Negative causes the DOE to dispatch tankers to a province that does not need them. That is actually the consequence of a False Positive. A False Negative means the model predicted Low Risk when the province is actually High Risk - so the DOE dispatches no tanker to a province that is about to run out of fuel. The province experiences an unmanaged shortage with no buffer time to respond. I had the direction completely reversed, which suggests I need to study these definitions in context, not just in the abstract.

**WHAT I WILL DO DIFFERENTLY:**
The exam revealed three distinct problem types: answering the wrong layer of a question (technical vs. strategic), getting the structure of a diagram wrong, and confusing False Positive with False Negative consequences. Each has a specific fix.

For False Negatives, I will practice with the phrase: "the model said no, but the truth was yes - so nothing was done, and something bad happened." That directional anchor should prevent the inversion I made here.

For k-fold cross-validation, I will memorize the grid format - k rows, k columns, one VALIDATE per row - and practice drawing it until it is automatic.

Most critically, I will slow down when reading questions that ask "why is this useful" or "what is the consequence" - these are asking for real-world reasoning, not just technical definitions. My exam answers often had the right concept but pointed it at the wrong level of the question.`,
    documents: [
      {
        label: 'Exam PDF',
        link: `${BASE}activities/midterm/Midterm Exam.pdf`,
        isNotebook: false,
      },
    ],
  },
  {
    id: 'pt-m1-logistic-regression',
    title: 'PT-M1: Binary Logistic Regression on Cirrhosis Survival',
    description:
      'Midterm activity reflection for PT-M1 focused on data cleaning, experimentation, and reporting.',
    period: 'Midterm',
    type: 'Practical Task',
    techStack: ['Python', 'Logistic Regression', 'Data Cleaning', 'IEEE Report'],
    reflection: `PT-M1 Activity Reflection
Score: 88 / 100

**OVERVIEW:**
Exercise PT-M1 was the most technically demanding activity of the term so far. It required me to simultaneously document code at a line-by-line level, select and clean a real-world dataset, run three structured experiments, and present findings in an IEEE-formatted research report. Finishing with an 88 out of 100 reflects genuine effort and solid execution across most phases - and while I was not told specifically where the remaining 12 points were lost, reviewing my own work carefully gives me a clear enough picture of where I could have done better.

**WHAT I DID WELL:**
The dataset selection was one of my strongest decisions. The Cirrhosis Patient Survival dataset from Kaggle was genuinely challenging - 1,033 missing cells across 12 columns, a three-class target that needed to be collapsed into a binary one, and a class imbalance of 39% to 61%. Choosing a dataset with real data quality problems, rather than a clean pre-built one, gave every cleaning decision in Cell 3 actual meaning. I also made a deliberate and well-justified call to retain clinical outliers rather than remove them, reasoning that extreme Bilirubin, Copper, and SGOT values are genuine medical signals in cirrhosis patients - not errors. That decision held up in the experimental results.

My notebook documentation was thorough. Each cell had a structured markdown section covering purpose, line-by-line explanation, inputs, and outputs - formatted consistently with tables where helpful. For Cell 3 alone, I documented eight distinct cleaning steps with specific reasoning for each choice: mode vs. median imputation, why ID was dropped, why Edema needed ordinal rather than binary encoding. That level of detail shows I was not just running code - I understood what each step was doing and why.

The three experiments were well-structured and produced results that made clinical sense. In Experiment 1, C = 0.001 produced the best F1-Score across both feature subsets, and I supported this with coefficient magnitude comparisons and sigmoid curve visualizations confirming the regularization behaved as expected. In Experiment 2, the progressive improvement from a single-feature Bilirubin model (F1 = 0.4898) to the seven-feature extended model (F1 = 0.6182) was backed by clinical reasoning - I explained why Disease Stage in particular gave the model a meaningful jump in recall. In Experiment 3, my justification for choosing threshold 0.3 was grounded in the domain: in cirrhosis management, a False Negative is far more dangerous than a False Positive, and threshold 0.3 reduced False Negatives to just 2 out of 32 actual deaths.

The report met IEEE formatting standards - two-column layout, properly numbered figures and tables, LaTeX-formatted equations, and five cited academic sources. The abstract covered all required elements within the 150-word target: domain, dataset, prediction goal, and key findings.


**AREAS I THINK COULD HAVE BEEN STRONGER:**
My professor did not specify where points were deducted, so the following are my own honest assessments of where my submission may not have reached its full potential - not confirmed mistakes.

Experiment 1 - C range could have been wider
I tested only the three suggested C values (0.001, 1.0, 1000) without exploring intermediate ones like 0.01, 0.1, or 10. The instructions asked to "record all values tested to find the best," which implies exploration beyond the sample. Testing a wider range would have strengthened the claim that 0.001 was genuinely optimal rather than just the best among three fixed options - and would have made the guide question answer more defensible.

Report conclusion - possible internal inconsistency
Re-reading my report, I noticed the conclusion states C = 0.001 as the optimal regularization parameter, while the Performance Evaluation section (Table V) describes the best configuration as Model C with C = 1.0 at threshold 0.3. These two sections point to different C values for what I called the "best model." Whether or not this was penalized, it is an internal contradiction I should have caught before submitting - a final cross-section read-through would have flagged it.

Introduction - log-odds section was thin
The rubric required a brief explanation of log-odds. I included the logit formula and stated that it transforms a probability into an unbounded real number - technically correct - but I did not connect it back to the linear model or explain why this transformation is what makes logistic regression work. The deeper insight - that the log-odds being linear in the features is the theoretical bridge between linear and logistic regression - was missing.

Presentation quality - figures could have been better referenced
The rubric specifically called for figures to be "properly referenced in the text." While my figures were numbered and captioned, there were moments in the discussion where I described results without pointing back to a specific figure number. More consistent in-text references like "as shown in Fig. 7" at every relevant point would have met that requirement more completely.


**WHAT I LEARNED FROM THE PROCESS:**
This activity gave me something the midterm exams could not: the experience of building a real model from scratch and watching the numbers change as I made deliberate decisions. The moment that stood out most was Experiment 3 - seeing that a patient with a predicted mortality probability of 0.3519 would be classified as "Survived" under the default 0.5 threshold, but correctly flagged as high-risk under 0.3. That is not an abstract concept anymore. It is a number I generated from real clinical data, and it has a real consequence attached to it.

The data cleaning phase also changed how I think about datasets. Working with 1,033 missing cells forced me to think about why each column was missing and what the right fill strategy was for each type - choosing median over mean for Bilirubin specifically because I knew the outliers were clinically real, not noise. That was a decision I had to justify, not just apply.

Going forward, I will do a final cross-section read of my reports before submitting - comparing the conclusion directly against the results tables to catch any inconsistencies. I will also treat hyperparameter experiments as genuinely open-ended rather than stopping at the suggested values. An 88 is a result I am satisfied with, but looking back honestly, the points I may have missed are all recoverable through more careful execution rather than deeper understanding - and that is something I can directly control next time.`,
    documents: [
      {
        label: 'Report',
        link: `${BASE}activities/midterm/PT-M1 Report - Bernardo.pdf`,
        isNotebook: false,
      },
      {
        label: 'Notebook',
        link: `${BASE}activities/midterm/PT-M1 Notebook - Bernardo.html`,
        isNotebook: true,
      },
    ],
  },
  {
    id: 'pt-f2-model-comparison',
    title: 'PT-F2: Model Comparison (MLR vs Linear SVM)',
    description:
      'Finals activity comparing multinomial logistic regression and linear SVM with extensive hyperparameter tuning.',
    period: 'Finals',
    type: 'Practical Task',
    techStack: ['Python', 'Logistic Regression', 'Linear SVM', 'Model Comparison'],
    reflection: `PT-F2 Activity Reflection
Status: Awaiting grade

**OVERVIEW:**
Exercise PT-F2 was the most conceptually layered activity of the term. Unlike PT-M1 which focused on a single model applied to messy data, this exercise required me to implement two fundamentally different classification paradigms, fine-tune both rigorously, and produce a comparative analysis that explained not just which model performed better, but why. Having completed and submitted the work, this reflection is my honest assessment of what I accomplished and where I think there is still room to grow.

**WHAT I DID WELL:**
The experimental design was genuinely thorough. Rather than testing the three suggested C values as a minimum, I tested 17 log-spaced values from 10^-4 to 10^4 for both models, and I tuned additional hyperparameters at the same time: tolerance values and class weight options for MLR (102 total combinations), and those plus loss function options for SVM (204 combinations). The exercise asked me to test as many C values as I could and prove through results which value is best, and the log-spaced grid with multi-parameter tuning directly addressed that requirement.

The pipeline implementation was correct and principled. Using sklearn's Pipeline to chain StandardScaler with each model meant the scaler was fitted only on training folds during cross-validation, never on the validation or test fold. This is the data leakage prevention the exercise explicitly required, and I documented it clearly in both the notebook and the report methodology.

The results were strong and produced a genuinely interesting finding. Both models tied at 98.62% mean CV accuracy during training, but on the held-out test set, MLR achieved perfect classification (Accuracy = F1 = kappa = 1.000) while SVM committed one misclassification. That single difference became the basis for a meaningful discussion about how probabilistic softmax generalizes differently from margin maximization on this dataset.

The feature weight comparison was satisfying to execute. Plotting mean absolute weights across classes for both models revealed that Flavanoids, Proline, OD280, and Alcohol were the top discriminators for both MLR and SVM independently. The fact that two models trained with completely different learning objectives agreed on the same top features gave the conclusion stronger footing.

The notebook documentation maintained the structured format I developed in PT-M1, with line-by-line tables for every cell. I also added return_train_score=True to both GridSearchCV instances, which let me track training accuracy alongside CV accuracy and observe overfitting behavior at high C values for MLR, which I then reported as a key finding.

**AREAS I THINK COULD HAVE BEEN STRONGER:**
Since this submission has not yet been graded, the following reflect my own self-assessment, not confirmed deductions.

Report structure - Section III formatting deviated from the rubric
The rubric specified Section III as Experimental Design with III-A for MLR and III-B for SVM. I combined the narrative in Section III rather than maintaining strict III-A and III-B labels throughout. While the content was present, a strict rubric check might flag the formatting deviation.

Perfect test accuracy - could raise questions about overfitting
MLR achieving 100% on the test set is strong, but it can raise eyebrows. The Wine dataset is known to be relatively easy for linear classifiers on scaled features, so the perfect score is likely legitimate. Still, a brief note acknowledging why perfect classification is plausible would have strengthened the discussion.

Notebook documentation depth - less detailed than PT-M1
In PT-M1, each cell included explicit input/output sections and concept context. In PT-F2, I kept line-by-line tables but dropped some of those sections. Given the rubric emphasis on documentation depth, this was a step back.

Additional task analysis - could have been deeper
I tuned tolerance and class_weight for MLR and added loss function for SVM, but my written discussion of how those parameters affected results was brief. A clearer breakdown of which settings mattered would have addressed the additional task more explicitly.

**WHAT THIS ACTIVITY TAUGHT ME:**
The key lesson was the difference between cross-validation performance and test set performance. Both models tied at 98.62% mean CV accuracy, but the test set told a different story: MLR generalized perfectly while SVM did not. That gap, caused by one misclassified sample in a 36-sample test set, is a reminder that CV provides an estimate, not a guarantee.

I also learned something concrete about each model's behavior. MLR preferred strong regularization (C = 0.01), while SVM needed a much larger C (about 3.162) to perform at the same level. Connecting those values to model geometry made the comparison meaningful instead of just a table of numbers.

Going forward, I want to restore PT-M1-level documentation (explicit purpose, input, output, and conceptual context for every cell) and address "additional task" prompts as their own section rather than folding them into the main experiment.`,
    documents: [
      {
        label: 'Lab Exercise',
        link: `${BASE}activities/finals/PT-F2 Lab Exercise - Bernardo.pdf`,
        isNotebook: false,
      },
      {
        label: 'IEEE Report',
        link: `${BASE}activities/finals/PT-F2 IEEE Report - Bernardo.pdf`,
        isNotebook: false,
      },
      {
        label: 'Notebook',
        link: `${BASE}activities/finals/PT-F2 Notebook - Bernardo.html`,
        isNotebook: true,
      },
    ],
  },
  {
    id: 'pt-f1-final-project',
    title: 'PT-F1: Final Project - Pre-Harvest Agricultural Forecasting',
    description:
      'Final project building a predictive model for palay yield forecasting using PSA data.',
    period: 'Finals',
    type: 'Final Project',
    techStack: ['Python', 'Regression', 'Data Engineering', 'Policy Modeling'],
    reflection: `PT-F1 Final Project Reflection
Status: Awaiting grade

**OVERVIEW:**
The Final Project was the culmination of ITC-C506, not just as a technical exercise but as an attempt to answer a real problem. Building a pre-harvest palay yield forecasting model grounded in Philippine Statistics Authority data and aligned with SDG Target 2.4 felt meaningfully different from earlier activities. The stakes felt higher because the problem itself is higher stakes: rice supply concentration, El Nino-driven shortages, and farmgate price spikes that affect every Filipino household.

**WHAT I DID WELL:**
The data pipeline was the part of this project I am most proud of. I did not use a pre-cleaned dataset. I sourced three PSA OpenStat files in wide format, reshaped all three using pandas.melt(), extracted year and quarter from string period labels, built a province-to-region mapping to bridge the granularity gap between fertilizer data (regional level) and production data (provincial level), and merged everything into a single 2,112-row analytical dataset. Every step was deliberate and documented.

The model comparison produced results I did not fully anticipate. Random Forest won with R2 = 0.9868 and MAE of 5,041 MT, but MLR was still strong at R2 = 0.9568 despite being the simplest model. SVR was weakest at R2 = 0.8136, which became a meaningful finding: its epsilon-insensitive tube is a poor fit for a target as right-skewed and heterogeneous as provincial palay production.

Choosing MLR as the primary policy-facing model rather than Random Forest was a deliberate trade-off. The coefficients (4.80 MT per additional hectare harvested, 14,457 MT per additional kg/ha of Urea, -51,368 MT for Rainfed vs. Irrigated) are numbers a government planner can read, audit, and question. A black-box Random Forest with slightly higher R2 is less useful to an agency that needs interpretability.

The pre-harvest simulation grounded the project in practical use. I ran all four models on a Region II, Q2 scenario with 45,000 ha planted and then identified the simulation's limitation: MLR's 215,909 MT forecast is 1,760% above the region's historical median because of the large input area, so it must be interpreted alongside local crop calendars.

The notebook documentation returned to the PT-M1 standard, with a project overview, model strategy table, and cell-level explanations covering purpose, input/output rationale, and conceptual context at each step. The proposal presentation was also visually polished, with a clear narrative arc from problem to dataset to model to policy action.

**AREAS I THINK COULD HAVE BEEN STRONGER:**
Since this project has not yet been graded, the following are my own self-assessments, not confirmed deductions.

Geographic scope was narrow - only two regions
The region mapping covered only Region II and Region III. While they represent about one-third of national supply, a national forecasting tool should include all 17 PSA regions. This limits generalizability to other regions with different fertilizer patterns and yield behavior.

No climate variables despite being central to the framing
The introduction centered on El Nino volatility and climate risk, yet the model uses no climate variables. Rainfall and temperature were excluded due to data availability, but the gap means the model cannot respond to drought years.

Feature dominance by Area Harvested may mask real utility
Random Forest feature importance showed Area Harvested at 0.974. That raises a question I did not address: if area is already known, does the model add value beyond a single-feature area baseline? A dedicated benchmark would have clarified the contribution of fertilizer and ecosystem variables.

Ammosul coefficient sign deserved more discussion
The MLR equation produced a large negative coefficient for Ammosul (-47,290 MT per kg/ha), which is counterintuitive. This likely reflects multicollinearity between the fertilizer variables. I reported the coefficient without flagging that risk, which a policy audience might find confusing.

**WHAT THIS PROJECT TAUGHT ME ABOUT PREDICTIVE MODELING:**
The hardest part of machine learning is the data. I spent more time reshaping, mapping, merging, and validating the PSA datasets than I spent on all four models combined. The models are a few lines of scikit-learn; making the data trustworthy was the real work.

I also learned to treat the audience as a design constraint. Choosing MLR despite a lower R2 was not a compromise, it was a decision made for a specific user who needs to audit every number before acting. That interpretability-versus-accuracy framing is something I will carry into future projects.

Looking at the full arc of the term, from the midterm quiz on Logistic Regression to a regression pipeline trained on 21 years of Philippine agricultural data, the growth is clear. The concepts I struggled to define in March are now tools I reach for and apply.`,
    documents: [
      {
        label: 'Project Proposal',
        link: `${BASE}activities/finals/PT-F1 Project Proposal - Bernardo.pdf`,
        isNotebook: false,
      },
      {
        label: 'Final Report',
        link: `${BASE}activities/finals/PT-F1 Final Project Report - Bernardo.pdf`,
        isNotebook: false,
      },
      {
        label: 'Notebook',
        link: `${BASE}activities/finals/PT-F1 Final Project Notebook - Bernardo.html`,
        isNotebook: true,
      },
      {
        label: 'Area Harvested CSV',
        link: `${BASE}activities/finals/PT-F1 Area Harvested Dataset.csv`,
        isNotebook: false,
        downloadName: 'The Area Harvested Dataset.csv',
      },
      {
        label: 'Fertilizer CSV',
        link: `${BASE}activities/finals/PT-F1 Fertilizer Dataset.csv`,
        isNotebook: false,
        downloadName: 'The Fertilizer Dataset.csv',
      },
      {
        label: 'Production CSV',
        link: `${BASE}activities/finals/PT-F1 Volume of Production Dataset.csv`,
        isNotebook: false,
        downloadName: 'The Volume of Production Dataset.csv',
      },
    ],
  },
];

*/

export const periodOrder: Activity['period'][] = ['Prelim', 'Midterm', 'Finals'];

export const periodColors: Record<Activity['period'], string> = {
  Prelim: 'from-sky-500 to-blue-600',
  Midterm: 'from-violet-500 to-purple-600',
  Finals: 'from-emerald-500 to-teal-600',
};

export const periodTextColors: Record<Activity['period'], string> = {
  Prelim: 'text-sky-400',
  Midterm: 'text-violet-400',
  Finals: 'text-emerald-400',
};

export const periodBgColors: Record<Activity['period'], string> = {
  Prelim: 'bg-sky-500/10 border-sky-500/20',
  Midterm: 'bg-violet-500/10 border-violet-500/20',
  Finals: 'bg-emerald-500/10 border-emerald-500/20',
};
