<?php

$heading = $attributes['heading'];
$subheading = $attributes['subheading'];
$caption = $attributes['caption'];

$terms = get_terms( array(
    'taxonomy' => 'category',
    'hide_empty' => false,
) );

$categories = array();

foreach ( $terms as $term ) {
    if( $term->slug !== 'uncategorized' )
    array_push( $categories, $term->name );
}

$args = array(
    'post_type' => 'project',
    'posts_per_page' => 9, 
);
 
$query = new WP_Query( $args );

?>
 
<section class="tailgrids-project">
    <div class="container">
        <div class="tailgrids-project__text">
            <p class="tailgrids-project__text--subheading"><?php echo $subheading; ?></p>
            <h1 class="tailgrids-project__text--heading"><?php echo $heading; ?></h1>
            <p class="tailgrids-project__text--caption"><?php echo $caption; ?></p>
        </div>
        <?php if( $query->have_posts() ) : ?>
            <div class="tailgrids-project__list">
                <div class="tailgrids-project__list--tabs">
                    <button class="button-tab active" data-cat="all">All</button>
                    <?php foreach( $categories as $category ) : ?>
                        <button class="button-tab" data-cat="<?php echo strtolower( $category ); ?>"><?php echo $category; ?></button>
                    <?php endforeach; ?>
                </div> 
                <div class="tailgrids-project__list--wrapper">
                    <?php while( $query->have_posts() ) : $query->the_post(); $categories = get_the_terms( get_the_ID(), 'category' ); ?>
                        <div class="project-card" data-project="<?php echo strtolower( $categories[0]->name ); ?>">
                            <div class="project-card__thumbnail">
                                <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title(); ?>">
                            </div> 
                            <div class="project-card__detail">
                                <p class="project-card__detail--category"><?php echo $categories[0]->name; ?></p>
                                <h3 class="project-card__detail--title"><?php echo get_the_title(); ?></h3>
                                <a href="<?php echo get_the_permalink(); ?>">View Detail</a>
                            </div>
                        </div> 
                    <?php endwhile; ?>
                </div>
            </div>
        <?php endif; ?>
    </div>  
</section>