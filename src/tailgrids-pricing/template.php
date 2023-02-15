<?php 

$heading = $attributes['heading'];
$subheading = $attributes['subheading'];
$caption = $attributes['caption'];

$ids = array();

for( $i = 0; $i < count( $attributes['products'] ); $i++ ) {
    array_push( $ids , $attributes['products'][$i]['id'] );
}

$args = array(
    'post_type' => 'product',
    'posts_per_page' => 3,
    'orderby' => 'post__in',
    'post__in' => $ids, 
);

$query = new WP_Query($args);

?>

<section class="tailgrids-pricing">
    <div class="tailgrids-pricing__text">
        <p class="pricing-subheading"><?php echo $subheading; ?></p>
        <h2><?php echo $heading; ?></h2>
        <p><?php echo $caption; ?></p>
    </div>
    <?php if( $query->have_posts() ) : $i = 0; ?>
        <div class="container">
            <div class="tailgrids-pricing__products">
                <?php while( $query->have_posts() ) : $query->the_post(); $i++;
                        $price = get_post_meta( get_the_ID(), '_price', true );
                        $cart_link = get_home_url() . '/checkout/?add-to-cart=' . get_the_ID();
                        $data_aos = '';
                        if( $i === 1 ) {
                            $data_aos = "right";
                        } elseif( $i === 3 ){
                            $data_aos = 'left';
                        } else {
                            $data_aos = 'up';
                        }
                    ?>
                    <div class="pricing-card" data-aos="fade-<?php echo $data_aos; ?>" data-aos-duration="1500">
                        <h2><?php echo get_the_title(); ?></h2>
                        <p class="product-price"><span class="dollars">$</span><?php echo $price; ?>.00 <span class="per_month">Per Month</span></p>
                        <p class="product-features">
                            <?php echo get_the_excerpt(); ?>
                        </p>
                        <?php if(  get_post_meta( get_the_ID(), 'recommended' ) && get_post_meta( get_the_ID(), 'recommended')[0] === 'yes' ) : ?>
                            <a href="<?php echo $cart_link; ?>" class="white-button">Purchase Now</a>
                            <div class="recommended">
                                Recommended
                            </div>
                        <?php else : ?>
                            <a href="<?php echo $cart_link; ?>" class="blue-button">Purchase Now</a>
                        <?php endif; ?>
                    </div>
                <?php endwhile; ?>
            </div>
        </div>
<?php endif; ?>
</section>