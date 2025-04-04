<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <meta name="ROBOTS" content="NOINDEX,NOFOLLOW">
    <title>Contact Us | Netmatters</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Slick CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <!-- Slick Theme (optional) -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css"/>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- side bar-->
    <?php
        include 'sid_menu.php';
    ?>

    <div class="full-container">
        <div class="overlay"></div>
        <?php
            include 'header.php';
        ?>

        <main>
            <div class="container-white">
                <div class="home">
                    <p><a href="index.php"><strong>Home</strong></a> / Our Offices</p>
                </div>
            </div>
            <div class="OurOffices">
                <p>Our Offices</p>
            </div>
            <section class="contact-card-container">
                <div class="contact-grid">
                    <div class="contact-card">
                        <div class="contact-card-img">
                            <img src="assets/img/cambridge.jpg" alt="Netmatters Building">
                        </div>
                        <div class="card-content">
                            <p class="office">Cambridge Office</p>
                            <p class="address">Unit 1.31, <br>
                            St John's Innovation Centre, <br>
                            Cowley Road, Milton, <br>
                            Cambridge, <br>
                            CB4 0WS</p>
                            <a class="telephone" href="tel:01223375772">01223 37 57 72</a>
                            <button href="#" class="card-btn">VIEW MORE</button>
                        </div>
                    </div>

                    <div class="contact-card">
                        <div class="contact-card-img">
                            <img src="assets/img/wymondham.jpg" alt="Netmatters Building">
                        </div>
                        <div class="card-content">
                            <p class="office">Wymondham Office</p>
                            <p class="address">Unit 15,<br>
                            Penfold Drive,<br>
                            Gateway 11 Business Park,<br>
                            Wymondham, Norfolk,<br>
                            NR18 0WZ</p>
                            <a class="telephone" href="tel:01603704020">01603 70 40 20</a>
                            <button href="#" class="card-btn">VIEW MORE</button>
                        </div>
                    </div>

                    <div class="contact-card">
                        <div class="contact-card-img">
                            <img src="assets/img/yarmouth-2.jpg" alt="Netmatters Building">
                        </div>
                        <div class="card-content">
                            <p class="office">Great Yarmouth Office</p>
                            <p class="address">Suite F23,<br>
                            Beacon Innovation Centre,<br>
                            Beacon Park, Gorleston,<br>
                            Great Yarmouth, Norfolk,<br>
                            NR31 7RA</p>
                            <a class="telephone" href="tel:01493603204">01493 60 32 04</a>
                            <button href="#" class="card-btn">VIEW MORE</button>
                        </div>
                    </div>
                </div>
            </section>

            <div class="contact-info" id="contact">
                <section>
                    <div class="form-container">
                        
                        <form action="process_form.php" method="POST">
                            <?php if (isset($_GET['success'])): ?>
                                <div id="success-box" style="
                                    background-color: #d4edda; 
                                    border: 2px solid #28a745; 
                                    color: #155724; 
                                    padding: 10px 15px; 
                                    margin-bottom: 15px; 
                                    display: flex; 
                                    justify-content: space-between; 
                                    align-items: center;
                                    border-radius: 5px;
                                ">
                                    Your message was sent successfully!
                                    <span id="close-success" style="
                                        cursor: pointer; 
                                        font-weight: bold; 
                                        font-size: 12px;
                                        margin-left: 10px;
                                    ">
                                        ❌
                                    </span>
                                </div>
                            <?php endif; ?>
                            <?php if (isset($_GET['errors'])): ?>
                                <div id="fail-box" style="
                                    background-color:rgb(237, 212, 212); 
                                    border: 2px solid rgb(167, 40, 40); 
                                    color:rgb(87, 21, 21); 
                                    padding: 10px 15px; 
                                    margin-bottom: 15px; 
                                    display: flex; 
                                    justify-content: space-between; 
                                    align-items: center;
                                    border-radius: 5px;
                                ">
                                    Unable to send your message!
                                    <span id="close-fail" style="
                                        cursor: pointer; 
                                        font-weight: bold; 
                                        font-size: 12px;
                                        margin-left: 10px;
                                    ">
                                        ❌
                                    </span>
                                </div>
                            <?php endif; ?>
                            <div class="form-grid">
                                <div class="form-group">
                                    <label for="name">Your Name<span class="required">*</span></label>
                                    <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($_GET['name'] ?? ''); ?>"
                                    style="<?php echo isset($_GET['errors']['name']) ? 'border: 2px solid red;' : ''; ?>" required>
                                </div>
                                <div class="form-group">
                                    <label for="company">Company Name</label>
                                    <input type="text" id="company" name="company" value="<?php echo htmlspecialchars($_GET['company'] ?? ''); ?>">
                                </div>
                            </div>
                            <div class="form-grid">
                                <div class="form-group">
                                    <label for="email">Your Email<span class="required">*</span></label>
                                    <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($_GET['email'] ?? ''); ?>"
                                    style="<?php echo isset($_GET['errors']['email']) ? 'border: 2px solid red;' : ''; ?>" required>
                                </div>
                                <div class="form-group">
                                    <label for="phone">Your Telephone Number<span class="required">*</span></label>
                                    <input type="tel" id="phone" name="phone" value="<?php echo htmlspecialchars($_GET['phone'] ?? ''); ?>"
                                    style="<?php echo isset($_GET['errors']['phone']) ? 'border: 2px solid red;' : ''; ?>" required>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="message">Message<span class="required">*</span></label>
                                <textarea id="message" name="message" rows="4" placeholder="Hi, I am interested in discussing a Our Offices solution, could you please give me a call or send an email?"
                                style="<?php echo isset($_GET['errors']['message']) ? 'border: 2px solid red;' : ''; ?>"><?php echo htmlspecialchars($_GET['message'] ?? ''); ?></textarea>
                            </div>
                            <div class="checkbox-group">
                                <input type="checkbox" class="my-checkbox" id="marketing" name="marketing">
                                <label for="marketing">
                                    Please tick this box if you wish to receive marketing information from us.
                                </label>
                            </div>
                            <div class="privacy">
                                <label>
                                    Please see our <a id="privacy" href="#">Privacy Policy</a> for more information on how we keep your data safe.
                                </label>
                            </div>
                            <div class="terms">
                                <p>This site is protected by reCAPTCHA and the <a href="#">Google Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>
                            </div>

                            <div class="form-btn">
                            <button type="submit" class="submit-btn">SEND ENQUIRY</button>
                            <p><span class="required">*</span>Fields Required</p>
                            </div>
                        </form>
                    </div>
                </section>
                <section>
                    <div class="contact-text-container">
                        <p>Email us on:</p>
                        <a href="mailto:sales@netmatters.com"><strong>sales@netmatters.com</strong></a>
                        <p>Business hours:</p>
                        <p>Monday - Friday 07:00 - 18:00</p>
                        <div class="accordion">
                            <h4><strong>Out of Hours IT Support<i class="fa-solid fa-chevron-down"></i></strong></h4>
                            <div class="panel">
                                <p>Netmatters IT are offering an Out of Hours service for Emergency and Critical tasks.</p>
                                <div class="opening">
                                    <p><strong>Monday - Friday 18:00 - 22:00</strong></p>
                                    <p><strong>Saturday 08:00 - 16:00</strong></p>
                                    <p><strong>Sunday 10:00 - 18:00</strong></p>
                                </div>
                                <p>To log a critical task, you will need to call our main line number and select Option 2 to leave an Out of Hours voicemail. A technician will contact you on the number provided within 45 minutes of your call.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>



        <?php
            include 'footer.php';
        ?>

    </div>

    <script src="https://kit.fontawesome.com/97e5723333.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <!-- Slick Slider JS -->
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <!--splide js-->
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js"></script>
    <!-- main js -->
    <script src="js/scripts.js"></script>
    <script src="js/sticky-css.js"></script>
    <script src="js/sidebar.js"></script>
    <script src="js/cookie.js"></script>
    <script src="js/tooltips.js"></script>
    <script src="js/form.js"></script>
    <script src="js/accordion.js"></script>
    
</body>
</html>