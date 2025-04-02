<?php
// Include the database connection
include 'db_connect.php';

// Get screen width from POST data
$screenWidth = isset($_POST['screenWidth']) ? intval($_POST['screenWidth']) : 1260;

// Determine number of articles based on screen width
$articlesToShow = 3; // Default for desktop
if ($screenWidth < 768) {
    $articlesToShow = 3; // Mobile
} elseif ($screenWidth < 992) {
    $articlesToShow = 2; // Tablet
}

// Fetch news posts from the database with limit
$stmt = $conn->query("SELECT * FROM news_posts ORDER BY created_at DESC LIMIT " . $articlesToShow);
$newsPosts = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Output the articles HTML
foreach ($newsPosts as $post): ?>
    <article class="business" tabindex="0">
        <img class="card-img" src="<?php echo htmlspecialchars($post['image_url']); ?>" 
            alt="<?php echo htmlspecialchars($post['title']); ?>">
        <div class="labelz" id="l1" style="background-color: <?php echo htmlspecialchars($post['labelz_colors']); ?>;"><?php echo htmlspecialchars($post['labelz']); ?></div>
        <div class="article-content">
            <h3 style="color: <?php echo htmlspecialchars($post['labelz_colors']); ?>;"><strong><?php echo htmlspecialchars($post['title']); ?></strong></h3>
            <p><?php echo htmlspecialchars($post['content']); ?></p>
            <button class="btn-orange btn-style" style="background-color: <?php echo htmlspecialchars($post['labelz_colors']); ?>;">READ MORE</button>
            <hr class="seperator">
            <div class="card-footer-container">
                <img class="avatar item" src="<?php echo htmlspecialchars($post['profile_image_url']); ?>" alt="<?php echo htmlspecialchars($post['author']); ?>">
                <p class="item"><strong>Posted by <?php echo htmlspecialchars($post['author']); ?></strong> <br>
                <?php echo date('jS F Y', strtotime($post['created_at'])); ?></p>
            </div>
        </div>
    </article>
<?php endforeach;
?> 