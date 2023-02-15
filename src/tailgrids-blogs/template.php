<?php

$args = array(
    'post_type' => 'post',
    'posts_per_page' => 3,
);

$query = new WP_Query( $args );

?>

<section class="tailgrids-blogs">
    <div class="tailgrids-blogs__text">
        <p class="tailgrids-blogs__text--subheading"><?php echo $attributes['subheading']; ?></p>
        <h3 class="tailgrids-blogs__text--heading"><?php echo $attributes['heading']; ?></h3>
        <p class="tailgrids-blogs__text--caption"><?php echo $attributes['caption']; ?></p>
    </div>
    <?php if( $query->have_posts() ) : ?>
        <div class="container">
            <div class="tailgrids-blogs__item">
                <?php while( $query->have_posts() ) : $query->the_post(); ?>
                    <div class="tailgrids-blogs__item--card">
                        <div class="blogs-thumbnail">
                            <a href="<?Php echo get_the_permalink(); ?>"><img src="<?Php echo get_the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title(); ?>"></a>
                        </div>
                        <?php $excerpt = substr( get_the_excerpt(), 0 , 120 ); ?>
                        <p class="blogs-date"><?php echo get_the_date(); ?></p>
                        <a href="<?php echo get_the_permalink(); ?>"><h3 class="blogs-title"><?php echo get_the_title(); ?></h3></a>
                        <p class="blogs-excerpt"><?php echo $excerpt; ?></p>
                    </div>
                <?php endwhile; ?>
            </div>
            <div class="tailgrids-blogs__button">
                <a href="<?php echo get_home_url() . '/news'; ?>">View All</a>
            </div>
        </div>
    <?php endif; ?>
</section>