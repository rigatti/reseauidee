<?php 

if(!class_exists('element_gva_image_content_parallax')):
   class element_gva_image_content_parallax{
      public function render_form(){
         return array(
           'type'          => 'gva_image_content_parallax',
            'title'        => t('Image Content Parallax'),
            'fields' => array(
               array(
                  'id'        => 'title',
                  'type'      => 'text',
                  'title'     => t('Title'),
                  'admin'     => true
               ),
               array(
                  'id'        => 'sub_title',
                  'type'      => 'text',
                  'title'     => t('Sub Title'),
               ),
               array(
                  'id'        => 'image_1',
                  'type'      => 'upload',
                  'title'     => t('Images 1')
               ),
               array(
                  'id'        => 'image_2',
                  'type'      => 'upload',
                  'title'     => t('Images 2')
               ),
               array(
                  'id'        => 'content',
                  'type'      => 'textarea',
                  'title'     => t('Content'),
                  'desc'      => t('Some HTML tags allowed'),
               ),
               array(
                  'id'        => 'position',
                  'type'      => 'select',
                  'title'     => t('Content position'),
                  'options'   => array( 
                     'left' => t('Left'), 
                     'right' => t('Right')
                  ),
               ),
               array(
                  'id'        => 'link',
                  'type'      => 'text',
                  'title'     => t('Link'),
               ),

               array(
                  'id'        => 'text_link',
                  'type'      => 'text',
                  'title'     => t('Text Link'),
               ),

               array(
                  'id'        => 'target',
                  'type'      => 'select',
                  'title'     => t('Open in new window'),
                  'desc'      => t('Adds a target="_blank" attribute to the link'),
                  'options'   => array( 'off' => 'No', 'on' => 'Yes' ),
                  'std'       => 'on'
               ),

               array(
                  'id'        => 'style',
                  'type'      => 'select',
                  'title'     => t('Style'),
                  'options'   => array( 
                     'style-v1' => t('Style 1'), 
                     'style-v2' => t('Style 2')
                  ),
               ),

               array(
                  'id'        => 'el_class',
                  'type'      => 'text',
                  'title'     => t('Extra class name'),
                  'desc'      => t('Style particular content element differently - add a class name and refer to it in custom CSS.'),
               ),
               array(
                  'id'        => 'animate',
                  'type'      => 'select',
                  'title'     => t('Animation'),
                  'desc'      => t('Entrance animation for element'),
                  'options'   => gavias_content_builder_animate_aos(),
                  'class'     => 'width-1-2'
               ), 
               array(
                  'id'        => 'animate_delay',
                  'type'      => 'select',
                  'title'     => t('Animation Delay'),
                  'options'   => gavias_content_builder_delay_aos(),
                  'desc'      => '0 = default',
                  'class'     => 'width-1-2'
               ), 
         
            ),                                     
         );
      }

      public static function render_content( $attr = array(), $content = '' ){
         global $base_url;
         extract(gavias_merge_atts(array(
            'title'              => '',
            'sub_title'          => '',
            'content'            => '',
            'position'           => 'left',
            'image_1'            => '',
            'image_2'            => '',
            'link'               => '',
            'text_link'          => 'Read more',
            'target'             => '',
            'style'              => 'style-v1',
            'el_class'           => '',
            'animate'            => '',
            'animate_delay'      => ''
         ), $attr));

         // target
         if( $target =='on' ){
            $target = 'target="_blank"';
         } else {
            $target = false;
         }
         if($image_1) $image_1 = $base_url . $image_1; 
         if($image_2) $image_2 = $base_url . $image_2; 

         $el_class .= ' ' . $position;
         if($style) $el_class .= ' ' . $style;
         if($animate) $el_class .= ' wow ' . $animate; 

         $skrollable1 = '';
         $skrollable2 = '';
         if($style == 'style-v1'){
           if($position == 'left') $skrollable2 = 'data-bottom-top="bottom: 180px;" data-top-bottom="bottom: -30px;"';
           if($position == 'right') $skrollable2 = 'data-bottom-top="top: 180px;" data-top-bottom="top: -30px;"';
         }
         if($style == 'style-v2'){
           if($position == 'left'){
             $skrollable1 = 'data-top="top: 40px;" data-bottom="top: 0px;"';
             $skrollable2 = 'data-top="top: 0px;" data-bottom="top: 80px;"';
           }
           if($position == 'right'){
             $skrollable1 = 'data-top="top: 0px;" data-bottom="top: 80px;"';
             $skrollable2 = 'data-top="top: 40px;" data-bottom="top: 0px;"';
           }
         }
         ?>
         <?php ob_start() ?>

         <div class="widget gsc-content-images-parallax <?php print $el_class; ?> ">
           <div class="widget-content">
             <div class="images">
               <?php if($image_1){ ?>
                 <img class="image-1" <?php print $skrollable1 ?> src="<?php print $image_1 ?>" alt="<?php print $title; ?>" />
               <?php } ?>
               <?php if($image_2){ ?>
                 <img class="image-2" <?php print $skrollable2 ?>  src="<?php print $image_2 ?>" alt="<?php print $title; ?>" />
               <?php } ?> 
             </div>
             
             <div class="content">
               <div class="content-inner">
                 <?php if($sub_title){ ?><div class="sub-title"><span><?php print $sub_title ?></span></div><?php } ?>
                 <div class="title"><span><?php print $title ?></span></div>
                 <?php if($content){ ?><div class="description"><?php print $content ?></div><?php } ?>
                 <?php if($link){ ?>
                   <div class="action">
                     <a class="btn-theme" href="<?php print $link ?>"><?php print $text_link ?></a>
                   </div>
                 <?php } ?>  
               </div>
             </div>  

           </div>
         </div>

         <?php return ob_get_clean() ?>
        <?php            
      } 

   }
endif;   
