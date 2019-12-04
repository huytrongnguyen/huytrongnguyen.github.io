# Linear Regression

What is Machine Learning?
* Machine Learning is the study of algorithms that
improve their performance at some task with experience
* Data -> ML Method -> Intelligence

5 main case studies

* Regression
  * Predicting housing prices
* Classification
  * Positive/Negative reviews (Sentiment analysis)
* Document Retrieval + Clustering
  * Find similar news articles
* Recommender Systems
  * Given past purchases, what do we recommend to you?
* Deep Learning
  * Recognizing objects in images

Topics

* Models
  * Linear regression, regularized approaches (ridge, LASSO)
  * Linear classifiers: logistic regression
  * Non-linear models: decision trees
  * Nearest neighbors, clustering
  * Recommender systems
  * Deep learning
* Algorithms
  * Gradient descent
  * Boosting
  * K-means
* Concepts
  * Point estimation, MLE
  * Loss functions, bias-variance tradeoff, cross-validation
  * Sparsity, overfitting, model selection
  * Decision boundaries

## Regression: Housing Prices

Goal: Predict how much my house is worth

Have data from my neighborhood
```
(x1, y1) = (2318 sq.ft., $315k)
(x2, y2) = (1985 sq.ft., $295k)
(x3, y3) = (2861 sq.ft., $370k)
...
(xn, yn) = (2055 sq.ft., $320k)
```

Assumption:

There is a relationship between y and x:

<code>y &#8776; f(x)</code>

x is the **input data**. Can potentially have many inputs

y is the **outcome/response/target/label/dependent variable**

### Predictor

We don’t know f! We need to learn it from the data!

Use machine learning to learn a predictor f' from the data

For a given input x, predict: `y' = f'(x)`

### ML Pipeline

```
Training Data -> Feature extraction -> ML model ---->
|                             ^                   |
|                             |                   |
|-> Quality metric -> ML algorithm                |
      ^                                           |
      |___________________________________________|
```

* Training Data: Raw Data
* Feature extraction: learned predicted
* ML model: learned model
* Quality metric: some sort of error calculation
* ML algorithm: optimizes to find best quality

### Linear Regression Model

Assume the data is produced by a line:

`yi = w0 + w1*xi + ei`

w0, w1 are the parameters of our model that need to be learned:
* w0 is the intercept ($ of the land with no house)
* w1 is the slope ($ increase per increase in sq. ft)

Learn estimates of these parameters w'0, w'1 and use them to predict new value for any input x!

`y' = f'(x) = w'0 + w'1*x`

Try a bunch of different lines and see which one is best!

### Cost of predictor

Define a "cost" for a particular setting of parameters
* Low cost -> Better fit
* Find settings that minimize the cost
* For regression, we will use the error as the cost.
  * Low error = Low cost = Better predictor (hopefully)

### Residual Sum of Squares (RSS)

```
RSS(w0, w1) = (y1 - y'1)^2 + (y2 - y'2)^2 + ... + (yn - y'n)^2
            = sum(yi - y'i)^2
            = sum(yi - (w0 + w1*x))^2
```

Mean-square error

`MSE(w0, w1) = 1/n * RSS(w0, w1)`

### Minimizing cost

* RSS is a function with inputs w0, w1
* Different settings have different RSS for a dataset
* Unfortunately, we can't try it out on all possible settings

### Gradient Descent

* Instead of computing all possible points to find the minimum, just start at one point and "roll" down the hill.
* Use the gradient (slope) to determine which direction is down.

### Higher Order Features

This data doesn't look exactly linear, why are we fitting a line instead of some higher-degree polynomial?

We can! We just have to use a slightly different model!

`yi = w0 + w1*xi + w2*xi^2 + w3*xi^3 + ei`

### Polynomial Regression

Model: `yi = w0 + w1*xi + w2*xi^2 + ... + wp*xi^p + ei`

| Feature | Value | Parameter |
|---------|-------|-----------|
| 0       | 1     | w0        |
| 1       | x     | w1        |
| 2       | x^2   | w2        |
| ...     | ...   | ...       |
| p       | x^p   | wp        |

* **Features** are the values we select or compute from the data inputs to put into our model. **Feature extraction** is the process of turning the data into features.
* Adding more features to the model allows for more complex relationships to be learned
* Distinction is the difference between a data input and a feature.
  * Data inputs are columns of the raw data
  * Features are the values (possibly transformed) for the model (done after our feature extraction h(x))
* You can use anything you want as features and include as many of them as you want!
  * Generally, more features means a more complex model. This might not always be a good thing!
  * Choosing good features is a bit of an art.

# Assessing Performance

* Why do we train ML models?
  * We generally want them to do well on **future** data
* If we choose the model that minimizes RSS on the data it learned from, we are just choosing the model that can **memorize**, not the one that **generalizes** well.
  * Just because you can get 100% on a practice exam you've studied for hours, it doesn't mean you will also get 100% on the real test that you haven't seen before.
* Key Idea: Assessing yourself based on something you learned from generally overestimates how well you will do in the future!

## Model Assessment

* How can we figure out how well a model will do on future data if we don't have any future data?
  * Estimate it! We can hide data from the model to test it later as an estimate how it will do on future data
* We will randomly split our dataset into a train set and a test set
  * The train set is to train the model
  * The test set is to estimate the performance in the future

## Test Error

* What we really care about is the true error, but we can't know that without having an infinite amount of data!
  * We will use the test set to estimate the true error
  * If the test set is large enough, this can approximate the true error
* If we use the test set to estimate future, how big should it be?
  * Bigger test set => Better estimate of true error
* Never train your model on data in the test set!
* What happens to training/true error as we increase model complexity?
  * Start with the simplest model (a constant function)
  * End with a very high degree polynomial

## Overfitting

* Overfitting happens when we too closely match the training data and fail to generalize.
* Overfitting happens when, you train a predictor w', but there exists another predictor w" from that model that has the following properties
  * true error (w") < true error (w')
  * train error (w") > train error (w')
* The ability to overfit/underfit is a knob we can turn based on the model complexity.
  * More complex => easier to overfit
  * Less complex => easier to underfit
* In a bit, we will talk about how to chose the "just right", but now we want to look at this phenomena of overfitting/underfitting from another perspective.
* Underfitting / Overfitting are a result of certain types of errors

## Signal vs Noise

* Learning from data relies on balancing two aspects of our data
  * Signal
  * Noise
* Complex models make it easier to fit too closely to the noise
* Simple models have trouble picking up the signal

## Bias-Variance Tradeoff

* A model that is too simple fails to fit the signal. In some sense, this signifies a fundamental limitation of the model we are using to fail to fit the signal. We call this type of error **bias**
* A model that is too complicated for the task overly fits to the noise. The flexibility of the complicated model makes it capable of memorizing answers rather than learning general patterns. This contributes to the error as **variance**
* It turns out that bias and variance live on a spectrum, increasing one tends to decrease the other
  * Simple models: High bias + Low variance
  * Complex models: Low bias + High variance
* In the case for squared error with regression

```
Error = Bias^2 + Variance + Noise
```

* Noise comes from the regression model (ei) and is impossible to avoid!

## Choosing Complexity

We didn't technically train the model on the test set (that's good), but we chose **which model** to use based on the performance of the test set.
  * So far we have divided our dataset into train and test
  * We can't use Test to choose our model complexity, so instead, break up Train into ANOTHER dataset

```python
train, validation, test = split_data(dataset)
for each model complexity p:
  model = train_model(model_p, train)
  val_err = error(model, validation)
  keep track of p with smallest val_err
return best p + error(model, test)
```

Clever idea: Use many small validation sets without losing too much training data.
* Still need to break off our test set like before. After doing so, break the training set into k chunks.
* For a given model complexity, train it k times. Each time use all but one chunk and use that left out chunk to determine the validation error.
* In practice, people use k = 5 to 10

```python
chunk_1, ..., chunk_k, test = split_data(dataset)
for each model complexity p:
  for i in [1, k]:
    model = train_model(model_p, chunks - i)
    val_err = error(model, chunk_i)
  avg_val_err = average val_err over chunks
  keep track of p with smallest avg_val_err
return model trained on train with best p + error(model, test)
```

# Classification

In our example, we want to classify a restaurant review as positive or negative.

Idea: Use a list of good words and bad words, classifier by most frequent type of word
* Positive Words: great, awesome, good, amazing, ...
* Negative Words: bad, terrible, disgusting, sucks, ...

## Simple Threshold Classifier

Input x: Sentence from review
  * Count the number of positive and negative words, in x
  * If num_positive > num_negative: y' = +1
  * Else: y' = -1

## Linear Classifier

Idea: Use labelled training data to learn a weight for each word. Use weights to score a sentence.

| Word                  | Weight  |
|-----------------------|---------|
| good                  | 1.0     |
| great                 | 1.5     |
| awesome               | 2.7     |
| bad                   | -1.0    |
| terrible              | -2.1    |
| awful                 | -3.3    |
| restaurant, the, ...  | 0.0     |

Input xi: Sushi was **great**, the food was
**awesome**, but the service was **terrible**

Score(xi) = 1.5 * 1 + 2.7 * 1 + (-2.1) * 1 = 2.1

## What's a good accuracy

* For binary classification:
  * Should at least beat random guessing...
  * Accuracy should be at least 0.5
* For multi-class classification (k classes):
  * Should still beat random guessing
  * Accuracy should be at least 1/k
    * 3-class: 0.33
    * 4-class: 0.25
* A classifier as simple as the **majority class classifier** can have a high accuracy if there is a **class imbalance**.
  * A class imbalance is when one class appears much more
frequently than another in the dataset

## Confusion Matrix

For binary classification, there are only two types of mistakes
* If the true label was positive (y = +1), but we predicted negative (y' = −1)
* If the true label was negative (y = −1), but we predicted positive (y' = +1)

<table border="1">
  <tr>
    <th colspan="4">Predicted Label</th>
  </tr>
  <tr>
    <th rowspan="3">True Label</th>
    <td>&nbsp;</td>
    <td>+</td>
    <td>-</td>
  </tr>
  <tr>
    <td>+</td>
    <td>True Positive (TP)</td>
    <td>False Negative (FN)</td>
  </tr>
  <tr>
    <td>-</td>
    <td>False Positive (FP)</td>
    <td>True Negative (TN)</td>
  </tr>
</table>

* What's worse, a false negative or a false positive?
  * It entirely depends on your application!
  * Detecting Spam
    * False Negative: Annoying
    * False Positive: Email lost
  * Medical Diagnosis
    * False Negative: Disease not treated
    * False Positive: Wasteful treatment

## Binary Classification Measures

```
# Notation
CTP = #TP, CFP = #FP, CTN = #TN, CFN = #FN
N = CTP + CFP + CTN + CFN
NP = CTP + CFN, NN = CFP + CTN

Error Rate = (CFP + CFN) / N
Accuracy Rate = (CTP + CTN) / N
Fals Positive Rate (FRR) = CFP / NN
False Negative Rate (FNR) = CFN / NP
True Positive Rate or Recall: CTP / NP
Precision: CTP / (CTP + CFP)
F1 Score: 2 * (Precision * Recall) / (Precision + Recall)
```

## Multiclass Confusion Matrix

Consider predicting (Healthy, Cold, Flu)

<table border="1">
  <tr>
    <th colspan="5">Predicted Label</th>
  </tr>
  <tr>
    <th rowspan="4">True Label</th>
    <td>&nbsp;</td>
    <td>Healthy</td>
    <td>Cold</td>
    <td>Flu</td>
  </tr>
  <tr>
    <td>Healthy</td><td>60</td><td>8</td><td>2</td>
  </tr>
  <tr>
    <td>Cold</td><td>4</td><td>12</td><td>4</td>
  </tr>
  <tr>
    <td>Flu</td><td>0</td><td>2</td><td>8</td>
  </tr>
</table>

## Change Threshold

* What if I never want to make a false positive prediction?
  * Always predict negative
* What if I never want to make a false negative prediction?
  * Always predict positive
* One way to control for our application is to change the scoring threshold. (Could also change intercept!)

```
if score(x) > a:
  predict y = +1
else:
  predict y = -1
```

# Decision Tree

```
accuracy = #correct predictions / #data points
```

## Greedy Algorithm for Growing a Decision Tree

* Start with a single root node
* Repeat while the stopping rule is not met
  * Choose a feature x[i] to split that maximizes classification accuracy
* Stopping Rule:
  * Do not branch if all data has the same label (pure)
  * We have already split on that feature before
  * If adding a branch does not increase accuracy, should we still branch?
* Two methods for preventing overfitting:
  * Early stopping
    * Stop the tree before it can get too complex
  * Pruning
    * Create a complex tre and make it more simple

# Ensembles Methods

A model ensemble is a collection of (generally weak) models that are combined in such a way to create a more powerful model.

There are two common ways this is done with trees
* Random Forest (Bagging)
* AdaBoost (Boosting)

## Random Forest

A **Random Forest** is a collection of T Decision Trees. Each decision tree casts a “vote” for a prediction and the ensemble predicts the majority vote of all of its trees.

```
Instance

Tree 1      Tree 2      ...     Tree n

Class X     Class Y             Class X

Majority Voting

Final Class (Class X)
```

### Random Forest Algorithm

**Training**
* Make T random samples of the training data that are the same size as the training data but are sampled with replacement
* Train a really tall tree on each sampled dataset (overfit)**Predict**
* For a given example, ask each tree to predict what it thinks the label should be
* Take a majority vote over all trees

## AdaBoost

AdaBoost is a model similar to Random Forest (an ensemble of decision trees) with two notable differences that impact how we train it quite severely.
* Instead of using high depth trees that will overfit, we limit ourselves to decision stumps.
* Each model in the ensemble gets a weight associated to it, and we take a weighted majority vote

### Training AdaBoost

* With AdaBoost, training is going to look very different.
* We train each model in succession, where we use the errors of the previous model to affect how we learn the next one.
* To do this, we will need to keep track of two types of weights
  * The first are the wt that we will use as the end result to weight each model.
    * Intuition: An accurate model should have a high weight
  * We will also introduce a weight ai for each example in the dataset that we update each time we train a new model
    * Intuition: We want to put more weight on examples that seem hard to classify correctly

**Training**
for t in 1,2,...,T:
  * Learn f't(x) based on weights ai
  * Compute model weight wt
  * Recompute weights ai
    * If we got it wrong, increase the weight, otherwise decrease it.
  * Normalize ai
    * Generally we normalize the weights so they sum to 1 to prevent them from getting too small or too big.

Start with a dataset and train our first model (a decision stump)
  * For all the things it gets wrong, increase the weight of that example.
  * For each one that’s right, decrease its weight.

**Powerful!** One of the most powerful set of models for many real world datasets.
* Typically does better than random forest with the same number of trees.

**Higher Maintenance**: You do have to tune parameters
* AdaBoost: Number of trees is technically important, but
the model tends to be robust to overfitting in practice.
* Gradient Boosting: MANY parameters (all important)

**Expensive**: Boosting is inherently sequential which means its slow to learn ensembles with many trees.
* Can be made faster with optimized software like XGBoost (UW)

# Precisions + Recall / kNN

## Document Retrieval

* Consider you had some time to read a book and wanted to find other books similar to that one.
* If we wanted to write an system to recommend books
  * How do we measure similarity?
  * How do we search over books?
  * How do we measure accuracy?

Big Idea: Define an embedding and a similarity metric for the books, and find the "nearest neighbor" to some query book.

## Assessing Accuracy

**Precision**: Of the ones I predicted positive, how many of them were actually positive?
* `precision = CTP / (CTP + CFP)`

**Recall**: Of all the things that are truly positive, how many of them did I correctly predict as positive?
* `recall = CTP / (CTP + CFN)`

An optimistic model will predict almost everything as positive
* High recall, low precision

A pessimistic model will predict almost everything as negative
* High precision, low recall

Depending on your application, precision or recall might be more important
* Ideally you will have high values for both, but generally increasing recall will decrease precision and vice versa.

For logistic regression, we can control for how optimistic the model is by changing the threshold for positive classification

## Nearest Neighbors

### 1-Nearest Neighbor

Input
* xq: Query example (e.g. my book)
* x1, ...xn: Corpus of documents (e.g. Amazon books)

Output
* The document in corpus that is most similar to xq

```
xnn = 0
nn_dist = Infinity
for xi in x1,...,xn:
  dist = distance(xq,xi)
  if dist < nn_dist:
    xnn = xi
    nn_dist = dist
```

### k-Nearest Neighbor

Input
* xq: Query example (e.g. my book)
* x1, ...xn: Corpus of documents (e.g. Amazon books)

Output
* List of k documents most similar to xq

```
xknn = [x1,...,xk]
nn_dists = [distance(x1,xq),...,distance(xk,xq)]
for xi in xk+1,...,xn:
  dist = distance(xq,xi)
  if dist < max(nn_dists):
    remove largest dist from xknn and nn_dists
    add xi to xknn and distance(xi,xq) to nn_dists
```

### Distance

Now we will define what similarity/distance means

Want to define how "close" two vectors are. A smaller value for distance means they are closer, a large value for distance means they are farther away.

The simplest way to define distance between vectors is the
**Euclidean distance**

Some features vary more than others or are measured in different units. We can weight different dimensions differently to make the distance metric more reasonable.

```
distance = 1 - similarity
```

### Issues with k-NN

While k-NN can solve some issues that 1-NN has, it brings some more to the table.
* Have to choose right value of k.
  * If k is too large, model is too simple
* Discontinuities matter in many applications
  * The error might be good, but would you believe a price
jump for a 2640 sq.ft. house to a 2641 sq.ft. house?
* Seems to do worse at the boundaries still

### Nearest Neighbor Efficiency

Nearest neighbor methods are good because they require no training time (just store the data, compute NNs when predicting).

How slow can that be? Very slow if there is a lot of data!
* O(n) if there are n data points.
* If n is in the hundreds of billions, this will take a while...

There is not an obvious way of speeding this up unfortunately.

Big Idea: Sacrifice accuracy for speed. We will look for an approximate nearest neighbor to return results faster

### Approximate Nearest Neighbor

Don’t find the exact NN, find one that is "close enough".

Many applications are okay with approximate answers
* The measure of similarity is not perfect
* Clients probably can’t tell the difference between the most similar book and a book that’s pretty similar.

We will use **locality sensitive hashing** to answer this approximate nearest neighbor problem.
* Big Idea
  * Break the data into smaller bins based on how close they are to each other
  * When you want to find a nearest neighbor, choose an appropriate bin and do an exact nearest neighbor search for the points in that bin.
* More bins -> Fewer points per bin -> Faster search
* More bin -> More likely to make errors if we aren't careful

High level approach
* Design an algorithm that yields a close neighbor with high probability
* These algorithms usually come with a "guarantee" of what probability they will succeed, won’t discuss that in detail but is important when making a new approximation algorithm.

# Clustering

## Unsupervised Learning

* In many real world contexts, there aren’t clearly defined labels so we won’t be able to do classification
* We will need to come up with methods that uncover structure from the (unlabeled) input data X.
* **Clustering** is an automatic process of trying to find related groups within the given dataset.
  * Clustering is easy when distance captures the clusters

## k-means Algorithm

Step 0: Initialize cluster centers
* A common default choice is to choose centroids at random
* Making sure the initialized centroids are "good" is critical to finding quality local optima. Our purely random approach was wasteful since it’s very possible that initial centroids start close together. Idea: Try to select a set of points farther away from each other.

Repeat until convergence:
* Step 1: Assign each example to its closest cluster centroid
* Step 2: Update the centroids to be the average of all the points assigned to that cluster

# Neural Networks

A lot of the buzz about ML recently has come from recent advancements in deep learning.

When people talk about "deep learning" they are generally talking about a class of models called neural networks that are a loose approximation of how our brains work.

## Convolutional Neural Networks

Idea: Reduce the number of weights that need to be learned by looking at local neighborhoods of image.

Use the idea of a **convolution** to reduce the number of inputs by combing information about local pixels.

## Dimensionality Reduction

Input data might have thousands or millions of dimensions!

**Dimensionality Reduction** is the the task of representing the data with a fewer number of dimensions, while keeping meaningful relations between data
* **Easier Learning**: fewer parameters, no curse of dimensionality
* **Visualization**: Hard to visualize more than 3D
* Discover **"intrinsic dimensionality"** of the data
  * High dimensional data is truly lower dimensional (i.e.
redundant information)

Could do something like feature importance and find the subset of features with most meaningful information.

A popular approach is to create new features that are combinations of existing features

One very popular dimensionality reduction algorithm is called Principal Component Analysis (PCA).

Idea: Use a linear projection from d-dimensional data to k-dimensional data
* E.g. 1000 dimension word vectors to 3 dimensions

Choose the projection that minimizes reconstruction error
* Idea: The information lost if you were to "undo" the projection

# Recommender Systems

A recommender system recommends items to a user based on what we think will be the most "useful" for the user.
* Explicit - User tells us what she likes
* Implicit – We try to infer what she likes from usage data
  * time on site
  * click rate
  * $ paid
  * ...

Top-k recommendations might be very redundant
* Someone who likes Rocky I also will likely enjoy Rocky II, Rocky III, Rocky IV, Rocky V

Diverse Recommendations
* Users are multi-faceted & we want to hedge our bets
* Maybe recommend: Rocky II, Always Sunny in Philedelphia, Robin Hood

## Cold Start

When a new movie comes into our system, we don’t know who likes it! This is called the **cold start** problem.
Generally, to solve we will need "side information"
* Genre, actors, if it’s a sequel

Could also try to test users to see if they like it to learn quickly

## Scalability

For N users and M movies, some approaches takeO(N^3 + M^3) time. This can be prohibitively slow for billions of users.

Big focus has been on:
* Efficient implementations
* Exact or faster approximate methods as needed

## Popularity

Simplest Approach: Recommend whatever is popular
* Rank by global popularity (i.e. Avengers Endgame)

Limitations
* No personalization
* Feedback loop

## Classification Model

Common to use something like logistic regression so that you have probability predictions

Train a classifier to learn whether or not someone will like an item
* User info
* Purchase history
* Product info
* Other info

Pros
* Personalized
* Features can capture context (time of day, recent history, ...)
* Can even handle limited user history (age of user, location, ...)

Cons
* Features might not be available or hard to work with
* Often doesn't perform well in practice when compared to more advanced techniques like **collaborative filtering**

## Co-occurrence Matrix

Idea: People who bought this, also bought ...
* E.g. people who buy diapers also buy baby wipes

Make **co-occurrence matrix** C in Rm*m (m is the number of items) of item purchases. Cij = # of users who bought both item i and j. C will be symmetric (Cij = Cji)

### Recommending

Assume a user has purchased diapers.
* Look at diapers row (or column)
* Recommend items with largest counts
  * Baby wipes, milk, baby food, ...

### Normalization

The count matrix C needs to normalized, otherwise popular items will drown out others (will just reduce to popularity).

Normalize the counts by using the **Jaccard similarity** instead: `Sij = #purchased i and j / #purchased i or j`

Could also use something like Cosine similarity, but Jaccard is popular

### Purchase History

What if I know the user u has bought diapers and milk?

Idea: Take the average similarity between items they have bought

```
Score(u,baby wipes) = (S(baby wipes, diapers) + S(baby wipes, milk)) / 2
```

Could also weight them differently based on recency of purchase!

Then all we need to do is find the item with the highest average score!

Pros:
* It personalizes to the user

Cons
* Does not utilize
  * Context (e.g. time of day)
  * User features (e.g. age)
  * Product features (e.g. baby vs electronics)
* Scalability
  * Similarity is size m^2 where m is the number of items
* Cold start problem

## Matrix Factorization

Want to recommend movies based on user ratings for movies.

Challenge: Users have rated relatively few of the entire catalog

Can think of this as a matrix of users and ratings with missing data!

### Assumption

Matrix completion is an impossible task without some assumptions on data (unknowns could be anything otherwise).

**Assume**: There are k types of movies (e.g. action, romance, etc.) which users have various interests in.

This means we can describe a movie v with feature vector Rv
* How much is the movie action, romance, drama, ...
* Example: Rv = [0.3, 0.01, 1.5, ...]

We can describe each user u with a feature vector Lu
* How much she likes action, romance, drama, ....
* Example:Lu = [2.3, 0, 0.7 , ...]

Estimate rating for user u and movie v as

```
Rating(u,v) = Lu * Rv = 2.3*0.3 + 0*0.01 + 0.7*1.5 + ...
```

### Featurized Matrix Factorization

Feature-based approach
* Feature representation of user and movie fixed
* Can address cold start problem

Matrix factorization approach
* Suffers from cold start problem
* User & Movie features are learned from data

## Accuracy

Could we use classification accuracy to identify which recommender system is performing best?
* We don't really care to predict what a person does not like
* Instead, we want to find the relatively few items from the
catalog that they will like
* Sort of a class imbalance

Instead, we want to look at our set of recommendations and ask:
* How many of our recommendations did the user like? (precision)
* How many of the items that the user liked did we recommend? (recall)

Precision and recall for recommender sytems

```
precision = # liked & shown / # shown
recall = # liked & shown / # liked
```

Which Algorithm is Best?

* What is true always is that for a given precision, we want recall to be as large as possible (and vice versa)
* What target precision/recall depends on your application

One metric: area under the curve (AUC)

Another metric: Set desired recall and maximize precision (precision at k)