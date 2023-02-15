<?php

$heading = $attributes['heading'];
$subheading = $attributes['subheading'];
$locationHeading = $attributes['locationHeading'];
$locationDetail = $attributes['locationDetail'];
$mailHeading = $attributes['mailHeading'];
$mailDetail = $attributes['mailDetail'];

?>

<section class="tailgrids-contact">
    <div class="tailgrids-contact__top">
        <div class="tailgrids-contact__top--text">
            <p class="contact-subheading"><?php echo $subheading; ?></p>
            <h2 class="contact-subheading"><?php echo $heading; ?></h2>
        </div>
    </div>
    <div class="tailgrids-contact__bottom">
        <div class="detail-contact">
            <div class="detail-contact__location">
                <span class="location-icon"></span>
                <div class="location-detail">
                    <h3><?php echo $locationHeading; ?></h3>
                    <p><?php echo $locationDetail; ?></p>
                </div>
            </div>
            <div class="detail-contact__mail">
                <span class="mail-icon"></span>
                <div class="mail-detail">
                    <h3><?php echo $mailHeading; ?></h3>
                    <p><?php echo $mailDetail; ?></p>
                </div>
            </div>
        </div>
    </div>
    <div class="tailgrids-contact__form">
        <h2>Send us a message</h2>
        <?php echo do_shortcode( '[contact-form-7 id="5" title="Contact form 1"]' ); ?>
    </div>
</section>