<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <meta name="ROBOTS" content="NOINDEX,NOFOLLOW">
    <title>Full Service Digital Agency | Cambridgeshire & Norfolk | Netmatters</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Slick CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <!-- Slick Theme (optional) -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css"/>
    <!-- Waypoints.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/shortcuts/sticky.min.js"></script>
    <link rel="stylesheet" href="css/styles.css?v=<?php echo time(); ?>">
    <!-- Add dropdown.js -->
    <script src="js/dropdown.js" defer></script>
</head>

<body>

  <!-- side bar-->
<?php
  include 'sid_menu.php';
?>

  <div class="full-container">
    <div class="overlay"></div>
      <div class="main">
                      <!-- cookie popup -->
        <div id="cookie-overlay">
          <div id="cookie-popup">
            <p id="cookie-title">Cookies Policy</p>
            <hr>
            <p>Our website uses cookies. This helps us provide you with a good experience on our website. To see what cookies we use and what they do, and to opt-in on non-essential cookies click "change settings". For a detailed explanation, click on "<a href="#">Privacy Policy</a>" otherwise click "Accept Cookies" to enter.</p> 
            <hr>
            <div class="cookie-buttons">
              <button id="change-settings">Change Settings</button>
              <button id="accept-cookies">Accept Cookies</button>
            </div>
          </div>
        </div>

        <?php
          include 'header.php';
        ?>

        <section class="hero">
            <div class="slick-carousel">
                <!-- Slide 1 -->
                <div class="slide">
                    <img src="assets/slider_img/home-YLei.jpg" alt="Netmatters Building">
                    <div class="hero-container">
                        <h1><strong>The East Of England's Leading Technology Company</strong></h1>
                        <p><strong>Performance-driven digital and technology services with complete transparency.</strong></p>
                        <button class="car-btn c-5"><strong>FIND OUT MORE&nbsp;</strong> <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                <!-- Slide 2 -->
                <div class="slide">
                    <img src="assets/slider_img/home-O67Y.jpg" alt="Software Guy">
                    <div class="hero-container">
                        <h1><strong>Bespoke Software</strong></h1>
                        <p><strong>Delivering expert bespoke software solutions across a range of industries.</strong></p>
                        <button class="car-btn c-8"><strong>FIND OUT MORE&nbsp;</strong> <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                <!-- Slide 3 -->
                <div class="slide">
                    <img src="assets/slider_img/home-gay8.jpg" alt="IT Guy">
                    <div class="hero-container">
                        <h1><strong>IT Support</strong></h1>
                        <p><strong>Fast and cost-effective IT support services for your business.</strong></p>
                        <button class="car-btn c-2"><strong>FIND OUT MORE&nbsp;</strong> <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                <!-- Slide 4 -->
                <div class="slide">
                    <img src="assets/slider_img/home-6yTp.jpg" alt="Lady at Desk">
                    <div class="hero-container">
                        <h1><strong>Digital Marketing</strong></h1>
                        <p><strong>Generating your new business through result-driven marketing activities.</strong></p>
                        <button class="car-btn c-3"><strong>FIND OUT MORE&nbsp;</strong> <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                <!-- Slide 5 -->
                <div class="slide">
                    <img src="assets/slider_img/home-J8Xx.jpg" alt="Phone Device">
                    <div class="hero-container">
                        <h1><strong>Telecoms Services</strong></h1>
                        <p><strong>A new approach to connectivity, see how we can help your business.</strong></p>
                        <button class="car-btn c-4"><strong>FIND OUT MORE&nbsp;</strong> <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                <!-- Slide 6 -->
                <div class="slide">
                    <img src="assets/slider_img/home-K0pn.jpg" alt="Gary Cullen">
                    <div class="hero-container">
                        <h1><strong>Web Design</strong></h1>
                        <p><strong>For businesses looking to make a strong and effective first impression.</strong></p>
                        <button class="car-btn c-5"><strong>FIND OUT MORE&nbsp;</strong> <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                <!-- Slide 7 -->
                <div class="slide">
                    <img src="assets/slider_img/home-MSxH.jpg" alt="Cyber Security">
                    <div class="hero-container">
                        <h1><strong>Cyber Security</strong></h1>
                        <p><strong>Keeping businesses and their customers' sensitive information protected.</strong></p>
                        <button class="car-btn c-6"><strong>FIND OUT MORE&nbsp;</strong> <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </section>

        <section class="card-tags">
            <p class="p1">Our Services</p>
            <p class="p2"><a href="#">View Our Work&nbsp;<i class="fa-solid fa-arrow-right"></i></a></p>
        </section>
        <!-- top cards for our services-->
        <section>
          <div class="card-container">
            <div class="grid-container1">
              <div class="card top-cards" id="top1" tabindex="0">
                <div class="card-icon">
                  <div class="circle-background c-1">
                    <i class="fa-solid fa-laptop fa-lg"></i>
                  </div>
                </div>
                <div class="card-content-top">
                  <h3 class="card-title-top">Bespoke Software</h3>
                  <p class="card-description-top">Bespoke software solutions for all your business needs including integrations and reporting.</p>
                  <button class="card-button-top btn-orange">READ MORE</button>
                </div>
              </div>
              <div class="card top-cards" id="top2" tabindex="0">
                <div class="card-icon">
                  <div class="circle-background c-2">
                    <i class="fa-solid fa-desktop"></i>
                  </div>
                </div>
                <div class="card-content-top">
                  <h3 class="card-title-top">IT Support</h3>
                  <p class="card-description-top">Fully managed IT support and consultancy packages tailored to meet your exact business needs.</p>
                  <button class="card-button-top btn-blue">READ MORE</button>
                </div>
              </div>
              <div class="card top-cards" id="top3" tabindex="0">
                <div class="card-icon">
                  <div class="circle-background c-3">
                    <i class="fa-sharp fa-solid fa-chart-simple"></i>
                  </div>
                </div>
                <div class="card-content-top">
                  <h3 class="card-title-top">Digital Marketing</h3>
                  <p class="card-description-top">Driven brand awareness & ROI through creative digital marketing campaigns.</p>
                  <button class="card-button-top btn-green">READ MORE</button>
                </div>
              </div>
              <div class="card top-cards" id="top4" tabindex="0">
                <div class="card-icon">
                  <div class="circle-background c-4">
                    <i class="fa-solid fa-phone-volume"></i>
                  </div> 
                </div>
                <div class="card-content-top">
                  <h3 class="card-title-top">Telecoms Services</h3>
                  <p class="card-description-top">Business telephony solutions including mobile & connectivity solutions.</p>
                  <button class="card-button-top btn-brown">READ MORE</button>
                </div>
              </div>
              <div class="card top-cards" id="top5" tabindex="0">
                <div class="card-icon">
                  <div class="circle-background c-5">
                    <i class="fa-solid fa-code"></i>
                  </div> 
                </div>
                <div class="card-content-top">
                  <h3 class="card-title-top">Web Design</h3>
                  <p class="card-description-top">User-centric design for businesses looking to make a lasting impression.</p>
                  <button class="card-button-top btn-purple">READ MORE</button>
                </div>
              </div>
              <div class="card top-cards" id="top6" tabindex="0">
                <div class="card-icon">
                  <div class="circle-background c-6">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                </div>
                <div class="card-content-top">
                  <h3 class="card-title-top">Cyber Security</h3>
                  <p class="card-description-top">Prevention, testing, consultancy & breach management services.</p>
                  <button class="card-button-top btn-red">READ MORE</button>
                </div>
              </div>
              <div class="card top-cards" id="top7" tabindex="0">
                <div class="card-icon">
                  <div class="circle-background c-7">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                </div>
                <div class="card-content-top">
                  <h3 class="card-title-top">Developer Training</h3>
                  <p class="card-description-top">Web design & software training courses designed to secure a job in tech.</p>
                  <button class="card-button-top btn-brown">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="partner-banner-carousel">
          <div class="carousel-wrapper">
              <img src="assets/img/sweetzy_logo.webp" alt="sweetzy">
              <img src="assets/img/xupes_logo.webp" alt="xupes">
              <img src="assets/img/girl_guides_anglia_logo.webp" alt="guides">
              <img src="assets/img/girls_day_school_trust_logob.webp" alt="girls-day-out">
              <img src="assets/img/onetravellerlogo_white_figuire.webp" alt="one-travel">
              <img src="assets/img/busseys_logo.webp" alt="busseys">
              <img src="assets/img/searles_logo.webp" alt="searles">
              <img src="assets/img/howespercivallogo.webp" alt="howes percival">
              <img src="assets/img/ashcroftlogo_landscape_goldblack_DP60P-small.webp" alt="ashcroft">
              <img src="assets/img/beat_logo.webp" alt="beat">
              <img src="assets/img/black_swan_logo.webp" alt="black swan">
              <img src="assets/img/survey_solutions_logo.webp" alt="survey solutions">
          </div>
        </section>
        <!-- mid section -->
        <div class="welcome-container">
          <div class="container">
              <div class="grid-container2">
                  <div class="container" id="welcome">
                      <article id="item-1">
                        <h1><strong>Welcome To Netmatters</strong></h1>
                        <P><strong>Netmatters is a leading <a href="#">Bespoke Software</a>, <a href="#">IT Support</a>, and <a href="#">Digital Marketing</a> company based in the East of England with offices in <a href="#">Cambridge</a>, <a href="#">Wymondham</a>, and <a href="#">Great Yarmouth</a>.</strong></P>
                        <p>We aren't tied into contracts with third-party providers, so you know that our recommendations for your business are based purely with one benefit in mind: to help improve your business with the most appropriate solutions.</p>
                        <p>We pride ourselves on being an ethical business and have a unique business offering and cost model that ensures you get the most from our relationship in an upfront manner.</p>
                        <button class="card-button btn-dark-grey"><strong>WHY CHOOSE US? </strong><i class="fa-solid fa-arrow-right"></i></button>
                        <button id="stack" class="card-button btn-dark-grey"><strong>OUR CULTURE </strong><i class="fa-solid fa-arrow-right"></i></button>
                      </article>
                  </div>
                  <div class="container" id="services">
                      <article id="item-2">
                          <h1><strong>What Our Clients Think</strong></h1>
                          <div class="stars">
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                          </div>
                          <p>Netmatters stood out from the start. Great guys and very easy to work with. Both the build and digital marketing teams are clearly skilled -they know their stuff! They delivered a website to our (high!) expectations and went over and above to ensure we were satisfied clients - and we are!</p>
                          <p class="eleanor">Eleanor Bishop, Head of Marketing - <a class="partner" href="#">Ashcroft Partnership LLP</a></p>
                          <button class="card-button btn-blue"><strong>GOOGLE REVIEWS </strong><i class="fa-solid fa-arrow-right"></i></button>
                          <button class="card-button btn-green"><strong>TRUSTPILOT REVIEWS </strong><i class="fa-solid fa-arrow-right"></i></button>
                      </article>
                  </div>
              </div>
          </div>
        </div>

        <section>
          <div class="view-more">
            <h2>Latest News</h2>
            <a href="#">View All <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </section>
        <!-- article cards -->
        <section>
          <div class="article-container">
              <section class="news-section">
                <div class="grid-container-articles">
                  <?php include 'get_articles.php'; ?>
                </div>
              </section>
          </div>
        </section>

        <section class="partner-banner2">
          <div class="carousel-wrapper2">
            <div class="tool-tip sweetzy">
                <div class="tool-tip-content">
                    <div class="tool-tip-container">
                        <img src="assets/img/sweetzy_logo.webp" alt="sweetzy">
                        <div class="tool-tip-text">
                            <h3>Sweetzy</h3>
                            <p>Sweetzy are an online sweets retailer, based in Wymondham.</p>
                            <button class="btn-green">VIEW OUR CASE STUDY<i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="tool-tip xupes">
                <div class="tool-tip-content">
                    <div class="tool-tip-container">
                        <img src="assets/img/xupes_logo.webp" alt="xupes">
                        <div class="tool-tip-text">
                            <h3>Xupes</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="tool-tip girl-guides">
                <div class="tool-tip-content">
                    <div class="tool-tip-container">
                        <img src="assets/img/girl_guides_anglia_logo.webp" alt="guides">
                        <div class="tool-tip-text">
                            <h3>Girl Guides Anglia</h3>
                            <p>Girl Guides Anglia is part of Girlguiding, the UK's leading charity for girls and young woman in the UK.</p>
                            <button class="btn-blue">VIEW OUR CASE STUDY<i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="tool-tip trust">
                <div class="tool-tip-content">
                    <div class="tool-tip-container">
                        <img src="assets/img/girls_day_school_trust_logob.webp" alt="girls-day-out">
                        <div class="tool-tip-text">
                            <h3>GDST</h3>
                            <p>The Girl's Day School Trust (GDST) is the UK's leading family of 25 independent girls' schools.</p>
                            <button class="btn-green">VIEW OUR CASE STUDY<i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="tool-tip one-travel">
                <div class="tool-tip-content">
                    <div class="tool-tip-container">
                        <img src="assets/img/onetravellerlogo_white_figuire.webp" alt="one-traveller">
                        <div class="tool-tip-text">
                            <h3>One Traveller</h3>
                            <p><strong>One Traveller</strong>, founded in 2007, is a leading provider of solo holidays for over 50s.</p>
                            <button class="btn-purple">VIEW OUR CASE STUDY<i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="tool-tip busseys">
                <div class="tool-tip-content">
                    <div class="tool-tip-container">
                        <img src="assets/img/busseys_logo.webp" alt="busseys">
                        <div class="tool-tip-text">
                            <h3>Busseys</h3>
                            <p>One of the UK's leading Ford dealerships.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tool-tip black-swan">
                <div class="tool-tip-content">
                    <div class="tool-tip-container">
                        <img src="assets/img/black_swan_logo.webp" alt="black-swan">
                        <div class="tool-tip-text">
                            <h3>Black Swan</h3>
                            <p>One of the UK's leading Ford dealerships.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tool-tip solutions">
                <div class="tool-tip-content">
                    <div class="tool-tip-container">
                        <img src="assets/img/survey_solutions_logo.webp" alt="survey solutions">
                        <div class="tool-tip-text">
                            <h3>Survey Solutions</h3>
                            <p>One of the UK's leading Ford dealerships.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tool-tip ashcroft">
                <div class="tool-tip-content">
                    <div class="tool-tip-container">
                        <img src="assets/img/ashcroftlogo_landscape_goldblack_DP60P-small.webp" alt="ashcroft">
                        <div class="tool-tip-text">
                            <h3>Ashcroft</h3>
                            <p>One of the UK's leading Ford dealerships.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tool-tip howes">
                <div class="tool-tip-content">
                    <div class="tool-tip-container">
                        <img src="assets/img/howespercivallogo.webp" alt="howes percival">
                        <div class="tool-tip-text">
                            <h3>Howes Percival</h3>
                            <p>One of the UK's leading Ford dealerships.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tool-tip searles">
                <div class="tool-tip-content">
                    <div class="tool-tip-container">
                        <img src="assets/img/searles_logo.webp" alt="searles">
                        <div class="tool-tip-text">
                            <h3>Searles</h3>
                            <p>One of the UK's leading Ford dealerships.</p>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </section>

        <?php
          include 'footer.php';
        ?>
        
      </div>
  </div>
  <script src="https://kit.fontawesome.com/97e5723333.js" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  <!-- Slick Slider JS -->
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
  <!--splide js-->
  <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js"></script>
  <!-- main js -->
  <script src="js/scripts.js?v=<?php echo time(); ?>"></script>
  <script src="js/sticky-css.js?v=<?php echo time(); ?>"></script>
  <script src="js/sidebar.js?v=<?php echo time(); ?>"></script>
  <script src="js/cookie.js?v=<?php echo time(); ?>"></script>
  <script src="js/tooltips.js?v=<?php echo time(); ?>"></script>
</body>
</html>
