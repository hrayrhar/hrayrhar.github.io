---
permalink: /
excerpt: "About me"
title: About me
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<head>
  <link rel="stylesheet" href="/assets/css/custom.css">
</head>

I am a third year PhD student at University of Southern California advised by Prof. [Aram Galstyan](https://www.isi.edu/people/galstyan/about) and 
Prof. [Greg Ver Steeg](https://www.isi.edu/people/gregv/about).
I do both applied and theoretical research on some aspects of deep learning, often taking an information-theoretic perspective.
My main research directions are (a) studying information stored in neural network weights or activations and its connections to generalization, memorization, stability and learning dynamics; and (b) representation learning with the goal of enriching the learned representation with useful properties, such as minimality, disentanglement, modularity, reduced synergy, etc.
More broadly, I am interested in designing novel representation learning approaches,
unsupervised/self-supervised learning, studying the generalization phenomenon of 
deep neural networks, and in estimation/approximation of information-theoretic quantities or their alternatives.


## News
- **\[Jan. 12, 2021\]** Our [work](https://arxiv.org/abs/2101.06640) "Estimating informativeness of samples with Smooth Unique Information" got accepted to ICLR 2021.
- **\[Oct. 20, 2020\]** Received a free NeurIPS 2020 registration by making it to the list of the top 10% of high-scoring reviewers.
- **\[June 3, 2020\]** Our [work](https://arxiv.org/abs/2002.07933) "Improving generalization by controlling label-noise information in neural network weights" got accepted to ICML 2020.
- **\[May 18, 2020\]** Starting a summer internship at AWS Custom Labels team. Going to work with Alessandro Achille, Avinash Ravichandran, and Orchid Majumder!
- **\[Jan. 3, 2020\]** I will be TA-ing CSCI 270: "introduction to algorithms and theory of computing" taught by Prof. [Shahriar Shamsian](https://viterbi.usc.edu/directory/faculty/Shamsian/Shahriar) this spring.
- **\[Oct. 1, 2019\]** Our [work](https://drive.google.com/file/d/1e1_yUylRKCQ8hAdhEtUBpAPkxJ7jFD3B/view?usp=sharing) titled "Reducing overfitting by minimizing label information in weights" got accepted to NeurIPS'19 information theory and machine learning workshop.
- **\[Sept. 3, 2019\]** Our [paper](https://arxiv.org/abs/1706.03353) "Fast structure learning with modular regularization" got accepted to NeurIPS'19 as a spotlight presentation.
- **\[Aug. 15, 2019\]** I will be the teaching assistant of CSCI 670: "advanced analysis of algorithms" taught by Prof. [Shang-Hua Teng](https://viterbi-web.usc.edu/~shanghua/) this fall.


## Publications
<div class="paper-image-text-pair">
<img class="paper-image" src="/images/sample-info.png" alt="sample information">
<div class="paper-text">
 <i>Hrayr Harutyunyan</i>, Alessandro Achille, Giovanni Paolini, Orchid Majumder, Avinash Ravichandran, Rahul Bhotika, Stefano Soatto
 <br>
  <b>Estimating informativeness of samples with smooth unique information</b>
  <br>
  ICLR 2021 [<a href="https://arxiv.org/abs/2101.06640">arXiv</a>,
  <a href="https://github.com/awslabs/aws-cv-unique-information">code</a>,
  <a href="/files/bibtex/sample-info.bib" target="_self">bibTeX</a>]
  <br><br>
  <div class="paper-short-summary">
  We define a notion of information that an individual sample provides to the training of a neural network, and we specialize it to measure both how much a sample informs the final weights and how much it informs the function computed by the weights.
  Though related, we show that these quantities have a  qualitatively different behavior.
  We give efficient approximations of these quantities using a linearized network and demonstrate empirically that the approximation is accurate for real-world architectures, such as pre-trained ResNets.
  We apply these measures to several problems, such as dataset summarization, analysis of under-sampled classes, comparison of informativeness of different data sources, and detection of \rebuttal{adversarial and} corrupted examples.
  </div>
</div>
</div>

<div class="paper-image-text-pair">
<img class="paper-image" src="/images/limit.png" alt="avoiding memorization">
<div class="paper-text">
  <i>Hrayr Harutyunyan</i>, Kyle Reing, Greg Ver Steeg, Aram Galstyan
  <br>
  <b>Improving generalization by controlling label-noise information in neural network weights</b>
  <br>
  ICML 2020 [<a href="https://arxiv.org/abs/2002.07933">arXiv</a>,
  <a href="https://github.com/hrayrhar/limit-label-memorization">code</a>,
  <a href="/files/bibtex/limit.bib" target="_self">bibTeX</a>]
  <br><br>
  <div class="paper-short-summary">
  In the presence of noisy or incorrect labels, neural networks have the undesirable tendency to memorize information about the noise.
  We show that one can prevent memorization and improve generalization by controlling the Shannon mutual information between weights and the vector of all training labels given inputs, I(w : y ∣ x).
  To minimize this information, we propose training algorithms that employ an auxiliary network that predicts gradients in the final layers of a classifier without accessing labels.
  Our approach yields drastic improvements over standard training algorithms (like cross-entropy
  loss), and outperform competitive approaches designed for learning with noisy labels.
  </div>
</div>
</div>

<hr style="margin: 1.5em">

<div class="paper-image-text-pair">
<img class="paper-image" src="/images/modular.png" alt="modular latent factor model">
<div class="paper-text">
  Greg Ver Steeg, <i>Hrayr Harutyunyan</i>, Daniel Moyer, Aram Galstyan
  <br>
  <b>Fast structure learning with modular regularization</b>
  <br>
  NeurIPS'19 [<a href="https://arxiv.org/abs/1905.13276">arXiv</a>,
  <a href="https://github.com/Harhro94/T-CorEx">code</a>,
  <a href="/files/bibtex/linearcorex.bib" target="_self">bibTeX</a>]
  <br><br>
  <div class="paper-short-summary">
  We introduce a method, called linear CorEx, for learning latent factors such that the joint probability distribution
  becomes close to being a modular latent factor model (shown in the picture).
  The method has linear complexity w.r.t. the number of observed variables and works 
  well in high-dimensional undersampled regimes.
  Furthermore, when the data comes from an approximately modular Gaussian latent factor model,
  linear CorEx exhibits blessing of dimensionality!
  </div>
</div>
</div>

<hr style="margin: 1.5em">

<div class="paper-image-text-pair">
<img class="paper-image" src="/images/tcorex.png" alt="temporal CorEx">
<div class="paper-text">
  <i>Hrayr Harutyunyan</i>, Daniel Moyer, Hrant Khachatrian, Greg Ver Steeg, Aram Galstyan  
  <br>
  <b>Efficient Covariance Estimation from Temporal Data</b>
  <br>
  arXiv preprint [<a href="https://arxiv.org/abs/1905.13276">arXiv</a>,
  <a href="https://github.com/Harhro94/T-CorEx">code</a>,
  <a href="/files/bibtex/tcorex.bib" target="_self">bibTeX</a>]
  <br><br>
  <div class="paper-short-summary">
  In this work we extend linear CorEx to work with temporal data.
  The main method -- T-CorEx --  takes multivariate time series, divided into time periods and 
  models the data of each time period with an instance of linear CorEx, such that the models
  vary smoothly over time.
  The method can be used for estimating covariance matrix of observed variables at each time period, clustering of time
  series, change point detection, and extracting useful information.
  All these analyses can be done in less than an hour even when the data is truly high-dimensional 
  (like an fMRI instance with 10^5 variables and 20 time periods).
  </div>
</div>
</div>

<hr style="margin: 1.5em">

<div class="paper-image-text-pair">
<img class="paper-image" src="/images/mixhop.png" alt="mixhop architecture">
<div class="paper-text">
  Sami Abu-El-Haija, Bryan Perozzi, Amol Kapoor, <i>Hrayr Harutyunyan</i>, Nazanin Alipourfard, Kristina Lerman, Greg Ver Steeg, Aram Galstyan
  <br>
  <b>Mixhop: Higher-order graph convolution architectures via sparsified neighborhood mixing</b>
  <br>
  ICML'19 [<a href="https://arxiv.org/abs/1905.00067">arXiv</a>,
  <a href="https://github.com/samihaija/mixhop">code</a>,
  <a href="/files/bibtex/mixhop.bib" target="_self">bibTeX</a>]
  <br><br>
  <div class="paper-short-summary">
  This paper proposes a new graph convolutional network (GCN), called MixHop, that in contrast to the vanilla GCN
  is able to learn a general class of neighborhood mixing relationships.
  MixHop requires no additional memory or computational complexity.
  Additionally, the paper proposes sparsity regularization that allows us
  to visualize how the network prioritizes neighborhood information across different graph datasets.
  </div>
</div>
</div>

<hr style="margin: 1.5em">

<div class="paper-image-text-pair">
<img class="paper-image" src="/images/mimic.png" alt="mimic benchmarking">
<div class="paper-text">
  <i>Hrayr Harutyunyan</i>, Hrant Khachatrian, David Kale, Greg Ver Steeg, Aram Galstyan 
  <br>
  <b>Multitask learning and benchmarking with clinical time series data</b>
  <br>
  Nature, Scientific data 6 (1), 96 [<a href="https://arxiv.org/abs/1703.07771">arXiv</a>,
  <a href="https://github.com/YerevaNN/mimic3-benchmarks">code</a>,
  <a href="/files/bibtex/mimic.bib" target="_self">bibTeX</a>]
  <br><br>
  <div class="paper-short-summary">
  The progress in machine learning for healthcare research has been difficult to measure because of the absence of publicly available benchmark data sets.
  To address this problem, we propose four clinical prediction benchmarks using data derived from the publicly available MIMIC-III database.
  These tasks cover a range of clinical problems including modeling risk of mortality, forecasting length of stay, detecting physiologic decline, and phenotype classification.
  We propose strong linear and neural baselines for all four tasks and evaluate the effect of deep supervision, multitask training and data-specific architectural modifications on the performance of neural models.
  </div>
</div>
</div>

<hr style="margin: 1.5em">

<div class="paper-image-text-pair">
<img class="paper-image" src="/images/synergy.png" alt="disentangling via synergy minimization">
<div class="paper-text">
  Greg Ver Steeg, Rob Brekelmans, <i>Hrayr Harutyunyan</i>, Aram Galstyan 
  <br>
  <b>Disentangled representations via synergy minimization</b>
  <br>
  Allerton'17 [<a href="https://arxiv.org/abs/1710.03839">arXiv</a>,
  <a href="/files/bibtex/synergy.bib" target="_self">bibTeX</a>]
  <br><br>
  <div class="paper-short-summary">
  If the factors comprising a representation allow us to make accurate predictions about our system, 
  but obscuring any subset of the factors destroys our ability to make predictions, we say that the 
  representation exhibits informational synergy. We argue that synergy is an undesirable feature in 
  learned representations and that explicitly minimizing synergy can help disentangle the true factors 
  of variation underlying data. We explore different ways of quantifying synergy, deriving new 
  closed-form expressions in some cases, and then show how to modify learning to produce representations 
  that are minimally synergistic. We introduce a benchmark task to disentangle separate characters from images 
  of words. We demonstrate that Minimally Synergistic (MinSyn) representations correctly disentangle characters while 
  methods relying on statistical independence fail.
  </div>
</div>
</div>
