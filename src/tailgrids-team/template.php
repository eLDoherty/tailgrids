<?php

$ids = array();

if( $attributes['teams'] ) {
    for( $i = 0; $i < count( $attributes['teams'] ); $i++ ) {
        array_push( $ids , $attributes['teams'][$i]['id'] );
    }
}

$args = array(
    'post_type' => 'teams',
    'posts_per_page' => 4,
    'orderby' => 'post__in',
    'post__in' => $ids,
);

$heading = $attributes['heading'];
$subheading = $attributes['subheading'];
$caption = $attributes['caption']; 

$query = new WP_Query($args);

?> 

<section class="tailgrids-team">
    <div class="container">
        <h4 class="tailgrids-team__subheading"><?php echo $subheading; ?></h4>
        <h2 class="tailgrids-team__heading"><?php echo $heading; ?></h2>
        <p class="tailgrids-team__caption"><?php echo $caption; ?></p>

        <?php if ($query->have_posts()) : ?>
            <div class="tailgrids-team__content">
                <?php while ($query->have_posts()) : $query->the_post(); ?>
                    <div class="tailgrids-team__content--item" data-aos="fade-up" data-aos-duration="1500">
                        <div class="team-image">
                            <a href="<?php echo get_the_permalink(); ?>"><img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title(); ?>"><div class="green-badge"></div></a> 
                        </div>
                        <div class="team-credentials">
                            <a href="<?php echo get_the_permalink(); ?>">
                                <h3 class="team-name"><?php echo get_the_title(); ?></h3>
                            </a>
                            <p class="team-position"><?php echo get_the_excerpt(); ?></p>
                        </div>
                        <div class="team-socmed">
                            <a href="<?php echo get_post_meta(get_the_ID(), 'Facebook')[0]; ?>">
                                <img src="<?php echo get_template_directory_uri() . '/assets/icons/facebook.png'; ?>">
                            </a>
                            <a href="<?php echo get_post_meta(get_the_ID(), 'Twitter')[0]; ?>">
                                <img src="<?php echo get_template_directory_uri() . '/assets/icons/twitter.png'; ?>">
                            </a>
                            <a href="<?php echo get_post_meta(get_the_ID(), 'Instagram')[0]; ?>">
                                <img src="<?php echo get_template_directory_uri() . '/assets/icons/instagram.png'; ?>">
                            </a>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
    </div>
</section>