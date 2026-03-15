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
    id: 'prelim-long-quiz-set-b',
    title: 'Prelim Long Quiz: Set B',
    description:
      'Long quiz assessment for the prelim period covering core course topics and applied problem solving.',
    period: 'Prelim',
    type: 'Long Quiz',
    techStack: ['Course Assessment', 'Problem Solving', 'Concept Mastery'],
    reflection: `Q1: Target Variable Selection

The decision to use the energy rating as a target variable is something I was so much into because of the setting of the data since it was a Property Developer scenario. This dataset contained a number of attributes, such as square feet, proximity to the city center, the year of construction, energy efficiency, and the presence of parking, which I needed to select the one that would produce the most significant prediction target.

Energy rating impressed me since it is both a categorical result and a result that has real-life implications in the real estate industry. The prediction of the energy rating would be of great use to property developers who may want to determine the property that would most likely be high-value or marketable. A Grade is not an efficient property, it is a selling point. I believe that when formulating the issue in terms of energy sustainability, the model is not only technically functional but also truly helpful in the field.

Q2: KNN vs. Linear Regression

As soon as I chose Energy Rating as the target variable, the algorithm to choose also became clear. Linear Regression works well with continuous numbers, but since Energy Rating is not a regression problem but a classification problem; it is A, B or C. That is why I chose K-Nearest Neighbors (KNN).

The feature that I liked in KNN to use it on this project is its simplistic concept that similar properties should possess similar energy characteristics. When a large house is being examined which was constructed recently, then that house is likely to act similar to other large and contemporary houses in terms of energy consumption. The idea of KNN is that it utilizes the Euclidean distance to identify the k nearest similarities in the feature space, and then applies that similarity to the new property giving it the most prevalent label among the nearest similarity.

Drawing the diagram was of great assistance to my thoughts. Squaring the footage on the y-axis and the year built on the x-axis I was able to observe the grouping of A, B, and C properties. It provided me with visual insight into the landing location of a new and unlabeled property and the way KNN would grade it depending on the distance.

Q3: Training, Testing & Evaluation Metrics

I had to stop halfway in my reply to Q3 due to lack of time. I began by emphasizing that we need to normalize data, as KNN requires the use of the Euclidean distance, and therefore raw values on very different scales would dominate Square Footage and Distance to City Center and Year Built. I indicated that a normalization puts all the features into a similar range so that all features make equal contributions to the distance formula, but that was as far as I got.

The fundamental part of the question that I did not get was the actual training/test split and the metrics of evaluation. The complete answer would justify dividing the data into an 80/20 train-test set to ensure that the model was trained on one part and tested on the unseen data. In case of categorical Energy Rating and three classes (A, B, C), I would not use regression metrics such as MAE or RMSE, but accuracy, precision, recall, and F1-score. Missing out on those sections is an apparent weakness I have that is reflected in the necessity to work on time in written exams so that I can cover all the points, even though only briefly.`,
    documents: [
      {
        label: 'Task File',
        link: `${BASE}activities/prelim/Quiz SET B - BERNARDO.pdf`,
        isNotebook: false,
      },
    ],
  },
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
