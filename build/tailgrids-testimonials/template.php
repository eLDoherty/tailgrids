<?php

$args = array( 
    'status'      => 'approve', 
    'post_status' => 'publish', 
    'post_type'   => 'product' 
);

$comments = get_comments( $args );

$heading = $attributes['heading'];
$subheading = $attributes['subheading'];
$caption = $attributes['caption'];

?>

<section class="tailgrids-testimonials">
    <div class="container">
        <div class="tailgrids-testimonials__text">
            <p class="tailgrids-testimonials__text--subheading"><?php echo $subheading; ?></p>
            <h2 class="tailgrids-testimonials__text--heading"><?php echo $heading; ?></h2>
            <p class="tailgrids-testimonials__text--caption"><?php echo $caption; ?></p>
        </div>
        <div class="tailgrids-testimonials__wrapper swiper swiper-container">
            <div class="testimonials-slider-holder swiper-wrapper">
                <?php foreach( $comments as $comment ) : $rating = (int) get_comment_meta( $comment->comment_ID, 'rating', true ); ?>
                    <div class="testimonials-item swiper-slide">
                        <?php if( $rating && $rating > 0 ) : ?>
                            <div class="rating">
                                <?php for( $i = 0; $i < $rating; $i++ ) : ?>
                                    <span class="star"></span>
                                <?php endfor; ?>
                            </div> 
                        <?php endif; ?> 
                        <p class="testimonials-caption"><?php echo $comment->comment_content; ?></p>
                        <div class="testimonials-credentials">
                            <p class="comment-author"><?php echo $comment->comment_author; ?></p>
                            <p class="email-author"><?php echo $comment->comment_author_email; ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
            <div class="swiper-button-prev">⭠</div>
			<div class="swiper-button-next">⭢</div>
        </div>
    </div>
</section>