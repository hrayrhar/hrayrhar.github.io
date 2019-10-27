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

I am a second year PhD student at University of Southern California advised by 
Prof. [Aram Galstyan](https://www.isi.edu/people/galstyan/about) and 
Prof. [Greg Ver Steeg](https://www.isi.edu/people/gregv/about).
My main research interest is representation learning with the goal of enriching 
the learned representation with useful properties (enforcing compression, 
disentanglement; increasing modularity; avoiding synergy; etc). We often express 
these properties with information-theoretic quantities and propose methods 
for optimizing such objectives. More broadly, I am interested in core 
research in machine learning, studying the generalization phenomenon of 
deep neural networks, and in estimation/approximation of information-theoretic quantities.


## News 
- **\[Sept. 3, 2019\]** Our [paper](https://arxiv.org/abs/1706.03353) "Fast structure learning with modular regularization" got accepted to NeurIPS'19 as a spotlight presentation.
- **\[Aug. 15, 2019\]** I will be the teaching assistant of CSCI 670: advanced analysis of algorithms taught by Prof. [Shang-Hua Teng](https://viterbi-web.usc.edu/~shanghua/) this fall.


## Publications
<div class="paper-image-text-pair">
<img class="paper-image" src="/images/modular.png" alt="modular latent factor model">
<div class="paper-text">
  Greg Ver Steeg, <i>Hrayr Harutyunyan</i>, Daniel Moyer, Aram Galstyan
  <br>
  <b>Fast structure learning with modular regularization</b>
  <br>
  NeurIPS'19 [<a href="https://arxiv.org/abs/1905.13276">arXiv</a>,
  <a href="https://github.com/Harhro94/T-CorEx">code</a>,
  <a href="/files/bibtex/linearcorex.txt">bibTeX</a>]
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
  <a href="/files/bibtex/tcorex.txt">bibTeX</a>]
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
  <a href="/files/bibtex/mixhop.txt">bibTeX</a>]
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
  <a href="/files/bibtex/mimic.txt">bibTeX</a>]
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
  <a href="/files/bibtex/synergy.txt">bibTeX</a>]
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
