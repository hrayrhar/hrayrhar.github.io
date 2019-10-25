---
permalink: /
excerpt: "About me"
title: About me
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style type="text/css">
  .paper-image-text-pair {
    overflow: auto;
  }
  .paper-image {
    float: left;
    width: 300px;
    padding-right: 10px;
  }
  .paper-text {
    /*display: inline-block;*/
    /*float:left*/
  }
  .paper-short-summary {
    font-size: 0.6875em; // corresponds to $type-size-7
  }
</style>

I am a second year PhD student at University of Southern California advised by Prof. [Aram Galstyan](https://www.isi.edu/people/galstyan/about) and Prof. [Greg Ver Steeg](https://www.isi.edu/people/gregv/about).
My main research interest is representation learning with the goal of enriching the learned representation with useful properties.
We often express those properties with information-theoretic quantities and propose methods for optimizing such objectives.
More broadly, I am interested in core research in machine learning, understanding/explaining the generalization phenomenon
of deep neural networks, and in estimation/approximation of information-theoretic quantities.

## News 
- *\[Sept. 3, 2019\]* Our [paper](https://arxiv.org/abs/1706.03353) "Fast structure learning with modular regularization" got accepted to NeurIPS'19 as a spotlight presentation.
- *\[Aug. 15, 2019\]* I will be TAing CSCI 670: advanced analysis of algorithms taught by Prof. [Shang-Hua Teng](https://viterbi-web.usc.edu/~shanghua/) this fall.


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
  <p class="paper-short-summary">
  We introduce a method, called linear CorEx, for learning latent factors such that the joint probability distribution
  becomes close to being a modular latent factor model (shown in the picture).
  The method has linear complexity w.r.t. the number of observed variables and works 
  well in high-dimensional undersampled regimes.
  Furthermore, when the data comes from an approximately modular Gaussian latent factor model,
  linear CorEx exhibits blessing of dimensionality!
  </p>
</div>
</div>

<hr>

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

<hr>

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
  Short summary here todo.
</div>
</div>

<hr>

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
  Short summary here todo.
</div>
</div>

<hr>

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
  Short summary here todo.
</div>
</div>
