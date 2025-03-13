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
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
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

            <div class="contact-info">
                <section>
                    <div class="form-container">
                        <form>
                            <div class="form-grid">
                                <div class="form-group">
                                    <label for="name">Your Name<span class="required">*</span></label>
                                    <input type="text" id="name" name="name" required>
                                </div>
                                <div class="form-group">
                                    <label for="company">Company Name</label>
                                    <input type="text" id="company" name="company">
                                </div>
                            </div>
                            <div class="form-grid">
                                <div class="form-group">
                                    <label for="email">Your Email<span class="required">*</span></label>
                                    <input type="email" id="email" name="email" required>
                                </div>
                                <div class="form-group">
                                    <label for="phone">Your Telephone Number<span class="required">*</span></label>
                                    <input type="tel" id="phone" name="phone" required>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="message">Message<span class="required">*</span></label>
                                <textarea id="message" name="message" rows="4" required placeholder="Hi, I am interested in discussing a Our Offices solution, could you please give me a call or send an email?"></textarea>
                            </div>
                            <div class="checkbox-group">
                                <input type="checkbox" class="my-checkbox" id="marketing" name="marketing">
                                <label for="marketing">
                                    Please tick this box if you wish to receive marketing information from us.<br>
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
                        <div class="accord">
                            <p>Out of Hours IT Support<i class="fa-solid fa-chevron-down"></i></p>
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
    <script src="js/scripts.js" defer></script> <!-- Added defer attribute for better loading -->
    <script src="js/sticky.js"></script>
    <script src="js/sidebar.js"></script>
    <script src="js/cookie.js"></script>

</body>
</html>