<style class="customize">
<?php
    $customize = (array)json_decode($json, true);
    if($customize):
?>

    <?php //================= Font Body Typography ====================== ?>
    <?php if(isset($customize['font_family_primary'])  && $customize['font_family_primary'] != '---'){ ?>
        body,.block.block-blocktabs .ui-widget,.block.block-blocktabs .ui-tabs-nav > li > a,.gavias-slider .gva-caption .caption-description
        {
            font-family: <?php echo $customize['font_family_primary'] ?>!important;
        }
    <?php } ?> 

    <?php if(isset($customize['font_family_second'])  && $customize['font_family_second'] != '---'){ ?>
        header .header-info .content-inner .title, .post-block .post-title a,.team-block.team-v1 .team-content .team-name,.team-block.team-v2 .team-content .team-name,.btn, .btn-white, .btn-theme, .btn-theme-second, .more-link a, .btn-theme-submit,
        .btn-inline,.pricing-table .plan-name .title,.pricing-table .content-wrap .plan-price .price-value .value,.pricing-table .content-wrap .plan-price .interval,.block .block-title,.contact-link .title,.company-presentation .title,.navigation .gva_menu > li > a,
        .tags-list .item-list > ul > li a,.gsc-icon-box .highlight_content .title,.gsc-icon-box-new.style-1 .content-inner .title,.gsc-icon-box-new.style-2 .content-inner .title,.gsc-icon-box-new.style-3 .content-inner,.gsc-icon-box-new.style-4 .content-inner .title,
        .gsc-icon-box-new.style-5 .content-inner .title,.gsc-icon-box-color .content-inner .box-title,.milestone-block.position-icon-top .milestone-text,.milestone-block.position-icon-top-2 .milestone-text,.milestone-block.position-icon-left .milestone-right .milestone-text,
        .gsc-content-images-parallax.style-v1 .content .title,.gsc-content-images-parallax.style-v2 .content .title,.gsc-video-box.style-1 .video-content .left,.gsc-video-box.style-2 .video-content .link-video strong,.gsc-video-box.style-2 .video-content .button-review a,.gsc-team .team-name,
        .gsc-team.team-vertical .team-name,.gsc-team.team-circle .team-name,.gsc-quotes-rotator .cbp-qtrotator .cbp-qtcontent .content-title,.gva-job-box .content-inner .job-type,.gva-job-box .content-inner .box-title .title,.gsc-our-gallery .item .box-content .title,.gsc-text-rotate .rotate-text .primary-text,
        .gsc-heading .sub-title,.portfolio-v2 .content-inner .title a,.portfolio-v2 .content-inner .category a,.view-testimonail-carousel-center .owl-item .testimonial-node-v2 .testimonial-content .quote,.view-testimonail-carousel-center .owl-item .testimonial-node-v2 .testimonial-content .info .title,.testimonial-node-2 .quote,
        .testimonial-node-2 .title,.testimonial-node-3 .quote,.testimonial-node-3 .title,.gavias-slider .gva-caption .caption-title,.gavias-slider .caption-title
        h1, h2, h3, h4, h5, h6,.h1, .h2, .h3, .h4, .h5, .h6
        {
            font-family: <?php echo $customize['font_family_second'] ?>!important;
        }
    <?php } ?> 

    <?php if(isset($customize['font_body_size'])  && $customize['font_body_size']){ ?>
        body{
            font-size: <?php echo ($customize['font_body_size'] . 'px'); ?>;
        }
    <?php } ?>    

    <?php if(isset($customize['font_body_weight'])  && $customize['font_body_weight']){ ?>
        body{
            font-weight: <?php echo $customize['font_body_weight'] ?>;
        }
    <?php } ?>    

    <?php //================= Body ================== ?>

    <?php if(isset($customize['body_bg_image'])  && $customize['body_bg_image']){ ?>
        body{
            background-image:url('<?php echo drupal_get_path('theme', 'gavias_colin') .'/images/patterns/'. $customize['body_bg_image']; ?>');
        }
    <?php } ?> 
    <?php if(isset($customize['body_bg_color'])  && $customize['body_bg_color']){ ?>
        body{
            background-color: <?php echo $customize['body_bg_color'] ?>!important;
        }
    <?php } ?> 
    <?php if(isset($customize['body_bg_position'])  && $customize['body_bg_position']){ ?>
        body{
            background-position:<?php echo $customize['body_bg_position'] ?>;
        }
    <?php } ?> 
    <?php if(isset($customize['body_bg_repeat'])  && $customize['body_bg_repeat']){ ?>
        body{
            background-repeat: <?php echo $customize['body_bg_repeat'] ?>;
        }
    <?php } ?> 

    <?php //================= Body page ===================== ?>
    <?php if(isset($customize['text_color'])  && $customize['text_color']){ ?>
        body .body-page{
            color: <?php echo $customize['text_color'] ?>;
        }
    <?php } ?>

    <?php if(isset($customize['link_color'])  && $customize['link_color']){ ?>
        body .body-page a{
            color: <?php echo $customize['link_color'] ?>!important;
        }
    <?php } ?>

    <?php if(isset($customize['link_hover_color'])  && $customize['link_hover_color']){ ?>
        body .body-page a:hover{
            color: <?php echo $customize['link_hover_color'] ?>!important;
        }
    <?php } ?>

    <?php //===================Header=================== ?>
    <?php if(isset($customize['topbar_bg'])  && $customize['topbar_bg']){ ?>
        .topbar{
            background: <?php echo $customize['topbar_bg'] ?>!important;
        }
    <?php } ?>
    <?php if(isset($customize['topbar_color'])  && $customize['topbar_color']){ ?>
        .topbar{
            color: <?php echo $customize['topbar_color'] ?>!important;
        }
    <?php } ?>
    <?php if(isset($customize['topbar_color_link'])  && $customize['topbar_color_link']){ ?>
        .topbar a{
            color: <?php echo $customize['topbar_color_link'] ?>!important;
        }
    <?php } ?>

    <?php if(isset($customize['topbar_color_link_hover'])  && $customize['topbar_color_link_hover']){ ?>
        .topbar a:hover, .topbar i:hover{
            color: <?php echo $customize['topbar_color_link_hover'] ?>!important;
        }
    <?php } ?>

    <?php //===================Header=================== ?>
    <?php if(isset($customize['header_bg'])  && $customize['header_bg']){ ?>
        header, header.header-default .header-main{
            background: <?php echo $customize['header_bg'] ?>!important;
        }
    <?php } ?>
    <?php if(isset($customize['header_color'])  && $customize['header_color']){ ?>
        header .header-main, header .header-main *{
            color: <?php echo $customize['header_color'] ?>!important;
        }
    <?php } ?>
    <?php if(isset($customize['header_color_link'])  && $customize['header_color_link']){ ?>
        header .header-main a{
            color: <?php echo $customize['header_color_link'] ?>!important;
        }
    <?php } ?>

    <?php if(isset($customize['header_color_link_hover'])  && $customize['header_color_link_hover']){ ?>
        header .header-main a:hover{
            color: <?php echo $customize['header_color_link_hover'] ?>!important;
        }
    <?php } ?>

   <?php //===================Menu=================== ?>
    <?php if(isset($customize['menu_bg']) && $customize['menu_bg']){ ?>
        .main-menu, ul.gva_menu, .header.header-default .stuck{
            background: <?php echo $customize['menu_bg'] ?>!important;
        }
    <?php } ?> 

    <?php if(isset($customize['menu_color_link']) && $customize['menu_color_link']){ ?>
        .main-menu ul.gva_menu > li > a{
            color: <?php echo $customize['menu_color_link'] ?>!important;
        }
    <?php } ?> 

    <?php if(isset($customize['menu_color_link_hover']) && $customize['menu_color_link_hover']){ ?>
        .main-menu ul.gva_menu > li > a:hover{
            color: <?php echo $customize['menu_color_link_hover'] ?>!important;
        }
    <?php } ?> 

    <?php if(isset($customize['submenu_background']) && $customize['submenu_background']){ ?>
        .main-menu .sub-menu{
            background: <?php echo $customize['submenu_background'] ?>!important;
            color: <?php echo $customize['submenu_color'] ?>!important;
        }
    <?php } ?> 

    <?php if(isset($customize['submenu_color']) && $customize['submenu_color']){ ?>
        .main-menu .sub-menu{
            color: <?php echo $customize['submenu_color'] ?>!important;
        }
    <?php } ?> 

    <?php if(isset($customize['submenu_color_link']) && $customize['submenu_color_link']){ ?>
        .main-menu .sub-menu a{
            color: <?php echo $customize['submenu_color_link'] ?>!important;
        }
    <?php } ?> 

    <?php if(isset($customize['submenu_color_link_hover']) && $customize['submenu_color_link_hover']){ ?>
        .main-menu .sub-menu a:hover{
            color: <?php echo $customize['submenu_color_link_hover'] ?>!important;
        }
    <?php } ?> 

    <?php //===================Footer=================== ?>
    <?php if(isset($customize['footer_bg']) && $customize['footer_bg'] ){ ?>
        #footer .footer-center{
            background: <?php echo $customize['footer_bg'] ?>!important;
        }
    <?php } ?>

     <?php if(isset($customize['footer_color'])  && $customize['footer_color']){ ?>
        #footer .footer-center, #footer .block .block-title span, body.footer-white #footer .block .block-title span{
            color: <?php echo $customize['footer_color'] ?> !important;
        }
    <?php } ?>

    <?php if(isset($customize['footer_color_link'])  && $customize['footer_color_link']){ ?>
        #footer .footer-center ul.menu > li a::after, .footer a{
            color: <?php echo $customize['footer_color_link'] ?>!important;
        }
    <?php } ?>    

    <?php if(isset($customize['footer_color_link_hover'])  && $customize['footer_color_link_hover']){ ?>
        #footer .footer-center a:hover{
            color: <?php echo $customize['footer_color_link_hover'] ?> !important;
        }
    <?php } ?>    

    <?php //===================Copyright======================= ?>
    <?php if(isset($customize['copyright_bg'])  && $customize['copyright_bg']){ ?>
        .copyright{
            background: <?php echo $customize['copyright_bg'] ?> !important;
        }
    <?php } ?>

     <?php if(isset($customize['copyright_color'])  && $customize['copyright_color']){ ?>
        .copyright{
            color: <?php echo $customize['copyright_color'] ?> !important;
        }
    <?php } ?>

    <?php if(isset($customize['copyright_color_link'])  && $customize['copyright_color_link']){ ?>
        .copyright a{
            color: $customize['copyright_color_link'] ?>!important;
        }
    <?php } ?>    

    <?php if(isset($customize['copyright_color_link_hover'])  && $customize['copyright_color_link_hover']){ ?>
        .copyright a:hover{
            color: <?php echo $customize['copyright_color_link_hover'] ?> !important;
        }
    <?php } ?>    
<?php endif; ?>    
</style>
