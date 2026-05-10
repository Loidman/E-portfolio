const BASE = import.meta.env.BASE_URL;

export interface ActivityDocument {
  label: string;
  link: string;
  isNotebook: boolean;
  downloadName?: string;
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
