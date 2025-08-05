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
I am a research scientist at Google Research, where I focus on training efficient and capable language models, particularly smaller ones with up to 10 billion parameters.
My research explores designing novel architectures and training techniques to improve both the quality and efficiency of these models.
More broadly, I am interested in improving in-context learning, long context, length generalization, and reasoning capabilities of state-of-the-art LLMs.
At Google, I also worked on developing techniques to extend the context length of language models by over 30 times, contributed to [Gemini Nano](https://deepmind.google/technologies/gemini/nano/) models and YouTube search with state-of-the-art AI techniques.

I obtained my Ph.D. in Computer Science from the University of Southern California, where I was fortunate to be advised by [Aram Galstyan](https://www.isi.edu/people/galstyan/about) and [Greg Ver Steeg](https://www.isi.edu/people/gregv/about). My [thesis](https://arxiv.org/abs/2306.15918) was on information stored in neural network weights or activations, and its connections to generalization, memorization, stability and learning dynamics. Prior to USC, I received my M.S. and B.S. degrees in Applied Mathematics and Computer Science from Yerevan State University.
Outside of work, I am interested in reading, cinema, billiards, skiing, chess, music, and philosophy.

## Updates
- **\[July 17, 2023\]** Excited to share that I have joined Google Research NYC as a research scientist.
- **\[June 16, 2023\]** I have graduated from USC with a PhD in Computer Science!
- **\[Jan 21, 2023\]** Our [work](https://openreview.net/forum?id=8jU7wy7N7mA) "Supervision Complexity and its Role in Knowledge Distillation" was accepted to ICLR 2023.
- **\[Jan 11, 2023\]** I am invited to the [Rising Stars in AI Symposium 2023](https://cemse.kaust.edu.sa/ai/aii-symp-2023) at KAUST in Saudi Arabia (Feb. 19-21).
- **\[Aug 3, 2022\]** Our [work](https://arxiv.org/abs/2205.06915) "Formal limitations of sample-wise information-theoretic generalization bounds" was accepted to the 2022 IEEE Information Theory Workshop conference.
- **\[May 16, 2022\]** Started a summer internship at Google Research, New York. Will be working with Ankit Singh Rawat and Aditya Menon.
- **\[March 2, 2022\]** Our [work](https://arxiv.org/abs/2111.13733) "Failure Modes of Domain Generalization Algorithms" was accepted to CVPR 2022.
- **\[Sept. 28, 2021\]** Our [work](https://arxiv.org/abs/2110.01584v2) "Information-theoretic generalization bounds for black-box learning algorithms" was accepted to NeurIPS 2021.

<div id="old-updates-dropdown">
<a href="#" class="dropdown-button">Old updates</a>
<ul id="old-updates-list" style="display: none;">
    <li><b>[May 17, 2021]</b> Started a summer internship at AWS Custom Labels team. Will be working with Alessandro Achille and Avinash Ravichandran.</li>
    <li><b>[Jan. 12, 2021]</b> Our <a href="https://arxiv.org/abs/2101.06640">work</a> "Estimating informativeness of samples with Smooth Unique Information" got accepted to ICLR 2021.</li>
    <li><b>[Oct. 20, 2020]</b> Received a free NeurIPS 2020 registration by making it to the list of the top 10% of high-scoring reviewers.</li>
    <li><b>[June 3, 2020]</b> Our <a href="https://arxiv.org/abs/2002.07933">work</a> "Improving generalization by controlling label-noise information in neural network weights" got accepted to ICML 2020.</li>
    <li><b>[May 18, 2020]</b> Starting a summer internship at AWS Custom Labels team. Going to work with Alessandro Achille, Avinash Ravichandran, and Orchid Majumder!</li>
    <li><b>[Jan. 3, 2020]</b> I will be TA-ing CSCI 270: "introduction to algorithms and theory of computing" taught by Prof. <a href="https://viterbi.usc.edu/directory/faculty/Shamsian/Shahriar">Shahriar Shamsian</a> this spring.</li>
    <li><b>[Oct. 1, 2019]</b> Our work titled "Reducing overfitting by minimizing label information in weights" got accepted to NeurIPS'19 information theory and machine learning workshop.</li>
    <li><b>[Sept. 3, 2019]</b> Our <a href="https://arxiv.org/abs/1706.03353">paper</a> "Fast structure learning with modular regularization" got accepted to NeurIPS'19 as a spotlight presentation.</li>
    <li><b>[Aug. 15, 2019]</b> I will be the teaching assistant of CSCI 670: "advanced analysis of algorithms" taught by Prof. <a href="https://viterbi-web.usc.edu/~shanghua">Shang-Hua Teng</a> this fall.</li>
</ul>
</div>


## Publications and preprints
<div class="paper-image-text-pair">
<img class="paper-image" src="/images/supervision-complexity.png" alt="Supervision complexity plot">
<div class="paper-text">
  <i>Hrayr Harutyunyan</i>, Ankit Singh Rawat, Aditya Krishna Menon, Seungyeon Kim, Sanjiv Kumar
 <br>
  <b>Supervision Complexity and its Role in Knowledge Distillation</b>
  <br>
  ICLR 2023, [<a href="https://openreview.net/forum?id=8jU7wy7N7mA">paper</a>,
  <a href="/files/bibtex/supervision-complexity.bib" target="_self">bibTeX</a>]
  <br><br>
  <div class="paper-short-summary">
  Despite the popularity and efficacy of knowledge distillation, there is limited understanding of why it helps. In order to study the generalization behavior of a distilled student, we propose a new theoretical framework that leverages supervision complexity: a measure of alignment between teacher-provided supervision and the student's neural tangent kernel. The framework highlights a delicate interplay among the teacher's accuracy, the student’s margin with respect to the teacher predictions, and the complexity of the teacher predictions. Specifically, it provides a rigorous justification for the utility of various techniques that are prevalent in the context of distillation, such as early stopping and temperature scaling. Our analysis further suggests the use of online distillation, where a student receives increasingly more complex supervision from teachers in different stages of their training. We demonstrate efficacy of online distillation and validate the theoretical findings on a range of image classification benchmarks and model architectures.
  </div>
</div>
</div>

<hr style="margin: 1.5em">

<div class="paper-image-text-pair">
<img class="paper-image" src="/images/it-bound-limitations.png" alt="Limitations of sample-wise IT gen. bounds">
<div class="paper-text">
  <i>Hrayr Harutyunyan</i>, Greg Ver Steeg, Aram Galstyan
 <br>
  <b>Formal limitations of sample-wise information-theoretic generalization bounds</b>
  <br>
  IEEE Information Theory Workshop 2022 [<a href="https://arxiv.org/abs/2205.06915">arXiv</a>,
  <a href="/files/bibtex/sample-wise-it-bounds.bib" target="_self">bibTeX</a>]
  <br><br>
  <div class="paper-short-summary">
  Some of the tightest information-theoretic generalization bounds depend on the average information between the learned hypothesis and a <i>single</i> training example. However, these sample-wise bounds were derived only for <i>expected</i> generalization gap. We show that even for expected <i>squared</i> generalization gap no such sample-wise information-theoretic bounds exist. The same is true for PAC-Bayes and single-draw bounds. Remarkably, PAC-Bayes, single-draw and expected squared generalization gap bounds that depend on information in pairs of examples exist.
  </div>
</div>
</div>

<hr style="margin: 1.5em">

<div class="paper-image-text-pair">
<img class="paper-image" src="/images/dom-gen.png" alt="Domain generalization failure modes">
<div class="paper-text">
  Tigran Galstyan, <i>Hrayr Harutyunyan</i>, Hrant Khachatrian, Greg Ver Steeg, Aram Galstyan
 <br>
  <b>Failure Modes of Domain Generalization Algorithms</b>
  <br>
  CVPR 2021 [<a href="https://arxiv.org/abs/2111.13733">arXiv</a>,
  code <a href="https://github.com/YerevaNN/dom-gen-failure-modes">1</a> <a href="https://github.com/TigranGalstyan/wilds">2</a>,
  <a href="/files/bibtex/dom-gen.bib" target="_self">bibTeX</a>]
  <br><br>
  <div class="paper-short-summary">
  We propose an evaluation framework for domain generalization algorithms that allows decomposition of the test error into components capturing distinct aspects of generalization. We show that the largest contributor to the generalization error varies across methods, datasets, regularization strengths and even training lengths. We observe two problems associated with the strategy of learning domain-invariant representations. On Colored MNIST, most domain generalization algorithms fail because they reach domain-invariance only on the training domains. On Camelyon-17, domain-invariance degrades the quality of representations on unseen domains. We hypothesize that focusing instead on tuning the classifier on top of a rich representation can be a promising direction.
  </div>
</div>
</div>

<hr style="margin: 1.5em">

<div class="paper-image-text-pair">
<img class="paper-image" src="/images/fcmi.png" alt="f-CMI bounds">
<div class="paper-text">
 <i>Hrayr Harutyunyan</i>, Maxim Raginsky, Greg Ver Steeg, Aram Galstyan
 <br>
  <b>Information-theoretic generalization bounds for black-box learning algorithms</b>
  <br>
  NeurIPS 2021 [<a href="https://arxiv.org/abs/2110.01584">arXiv</a>,
  <a href="https://github.com/hrayrhar/f-CMI">code</a>,
  <a href="/files/bibtex/fcmi.bib" target="_self">bibTeX</a>]
  <br><br>
  <div class="paper-short-summary">
  We derive information-theoretic generalization bounds for supervised learning algorithms based on the information contained in predictions rather than in the output of the training algorithm. These bounds improve over the existing information-theoretic bounds, are applicable to a wider range of algorithms, and solve two key challenges: (a) they give meaningful results for deterministic algorithms and (b) they are significantly easier to estimate. We show experimentally that the proposed bounds closely follow the generalization gap in practical scenarios for deep learning.
  </div>
</div>
</div>

<hr style="margin: 1.5em">

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
  We apply these measures to several problems, such as dataset summarization, analysis of under-sampled classes, comparison of informativeness of different data sources, and detection of adversarial and corrupted examples.
  </div>
</div>
</div>

<hr style="margin: 1.5em">

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
  We show that one can prevent memorization and improve generalization by controlling the Shannon mutual information between weights and the vector of all training labels given inputs, I(w ; y ∣ x).
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
