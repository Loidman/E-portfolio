const BASE = import.meta.env.BASE_URL;

export interface ActivityDocument {
  label: string;
  link: string;
  isNotebook: boolean;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  period: 'Prelim' | 'Midterm' | 'Finals';
  type: string;
  techStack: string[];
  reflection: string;
  documents: ActivityDocument[];
}

export const activities: Activity[] = [
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
];

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
