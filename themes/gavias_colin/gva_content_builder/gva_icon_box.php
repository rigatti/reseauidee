<?php 
if(!class_exists('element_gva_icon_box')):
   class element_gva_icon_box{
      public function render_form(){
         $fields = array(
            'type' => 'gsc_icon_box',
            'title' => ('Icon Box'), 
            'fields' => array(
               array(
                  'id'        => 'title',
                  'type'      => 'text',
                  'title'     => t('Title'),
                  'admin'     => true
               ),
               array(
                  'id'        => 'content',
                  'type'      => 'textarea',
                  'title'     => t('Content'),
                  'desc'      => t('Some Shortcodes and HTML tags allowed'),
               ),
               array(
                  'id'            => 'hidden_content',
                  'type'          => 'select',
                  'options'       => array(
                     ''                      => t('Always Display'),
                     'hidden-xs hidden-sm'   => t('Hidden Small & Extra Small Screen (hidden-sm & hidden-xs)'), 
                     'hidden-sm'             => t('Hidden Small Screen (hidden-sm)'), 
                     'hidden-xs'             => t('hidden Extra Small Screen (hidden-xs)'), 
                  ),
                  'title'  => t('Hidden Content in Small Screen'),
               ),
               array(
                  'id'        => 'icon',
                  'type'      => 'text',
                  'title'     => t('Icon class'),
                  'std'       => '',
                  'desc'     => t('Use class icon font <a target="_blank" href="http://fontawesome.io/icons/">Icon Awesome</a> or <a target="_blank" href="http://gaviasthemes.com/icons/ionicon/">Custom icon</a>'),
               ),
               array(
                  'id'        => 'image',
                  'type'      => 'upload',
                  'title'     => t('Image Icon'),
                  'desc'      => t('Use image icon instead of icon class'),
               ),
               array(
                  'id'            => 'style',
                  'type'          => 'select',
                  'options'       => array(
                     'style-1'               => 'Style 1', 
                     'style-2'               => 'Style 2', 
                     'style-3'               => 'Style 3', 
                     'style-4'               => 'Style 4', 
                     'style-5'               => 'Style 5', 
                     'style-6'               => 'Style 6', 
                  ),
                  'title'  => t('Icon Position'),
                  'std'    => 'top',
               ),
               array(
                  'id'        => 'link',
                  'type'      => 'text',
                  'title'     => t('Link'),
                  'desc'      => t('Link for text')
               ),
               array(
                  'id'        => 'skin_text',
                  'type'      => 'select',
                  'title'     => 'Skin Text for box',
                  'options'   => array(
                     'text-dark'  => t('Text Dark'), 
                     'text-light' => t('Text Light')
                  ) 
               ),
               array(
                  'id'        => 'target',
                  'type'      => 'select',
                  'options'   => array( 'off' => 'No', 'on' => 'Yes' ),
                  'title'     => t('Open in new window'),
                  'desc'      => t('Adds a target="_blank" attribute to the link.'),
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
               
               array(
                  'id'     => 'el_class',
                  'type'      => 'text',
                  'title'  => t('Extra class name'),
                  'desc'      => t('Style particular content element differently - add a class name and refer to it in custom CSS.'),
               ),

            ),                                       
         );
         return $fields;
      }

      public static function render_content( $attr = array(), $content = '' ){
         global $base_url;
         extract(gavias_merge_atts(array(
            'title'              => '',
            'content'            => '',
            'hidden_content'     => '',
            'icon'               => '',
            'image'              => '',
            'style'              => 'style-1',
            'link'               => '',
            'skin_text'          => '',
            'target'             => '',
            'animate'            => '',
            'animate_delay'      => '',
            'min_height'         => '',
            'el_class'           => ''
         ), $attr));
         
         if($image) $image = $base_url . $image; 

         // target
         if( $target =='on' ){
            $target = 'target="_blank"';
         } else {
            $target = false;
         }

         $class = array();
         $class[] = $style;
         $class[] = $skin_text;
         if($el_class) $class[] = $el_class;
         
         $css = array(); 
         if($min_height) $css[] = "min-height:{$min_height};";
         
         if($animate) $class[] = 'wow ' . $animate;

         ?>
         <?php ob_start() ?>
         
         <?php if($style == 'style-1' || $style == 'style-2' || $style == 'style-4'){ ?>
            <div class="widget gsc-icon-box-new <?php if(count($class)>0) print implode($class, ' ') ?>" <?php if(count($css) > 0) print 'style="'.implode($css, ';').'"' ?> <?php print gavias_content_builder_print_animate_wow('', $animate_delay) ?>>
               <?php if($icon || $image){ ?>
                  <div class="icon-inner">
                     <?php if($link){ ?><a href="<?php print $link ?>"> <?php } ?>
                        <?php if($icon){ ?><span class="icon <?php print $icon ?>"></span> <?php } ?>
                        <?php if($image){ ?><span class="icon"><img src="<?php print $image ?>" alt="<?php print strip_tags($title) ?>"/> </span> <?php } ?>
                     <?php if($link){ ?> </a> <?php } ?>
                  </div>
               <?php } ?>
               <div class="content-inner">
                  <div class="title"><?php print $title; ?></div>
                  <?php if($content){ ?><div class="desc <?php print $hidden_content ?>"><?php print $content; ?></div><?php } ?>   
               </div>
            </div> 
         <?php } ?>

         <?php if($style == 'style-3'){ ?>
            <div class="widget gsc-icon-box-new <?php if(count($class)>0) print implode($class, ' ') ?>" <?php if(count($css) > 0) print 'style="'.implode($css, ';').'"' ?> <?php print gavias_content_builder_print_animate_wow('', $animate_delay) ?>>
               <?php if($icon || $image){ ?>
                  <div class="icon-inner">
                     <?php if($link){ ?><a href="<?php print $link ?>"> <?php } ?>
                        <?php if($icon){ ?><span class="icon <?php print $icon ?>"></span> <?php } ?>
                        <?php if($image){ ?><span class="icon"><img src="<?php print $image ?>" alt="<?php print strip_tags($title) ?>"/> </span> <?php } ?>
                     <?php if($link){ ?> </a> <?php } ?>
                  </div>
               <?php } ?>
               <div class="content-inner">
                  <div class="title"><?php print $title; ?></div>
               </div>
            </div> 
         <?php } ?>   

         <?php if($style == 'style-5' || $style == 'style-6'){ ?>
            <div class="widget gsc-icon-box-new <?php if(count($class)>0) print implode($class, ' ') ?>" <?php if(count($css) > 0) print 'style="'.implode($css, ';').'"' ?> <?php print gavias_content_builder_print_animate_wow('', $animate_delay) ?>>
               <?php if($icon || $image){ ?>
                  <div class="icon-inner">
                     <?php if($link){ ?><a href="<?php print $link ?>"> <?php } ?>
                        <?php if($icon){ ?><span class="icon <?php print $icon ?>"></span> <?php } ?>
                        <?php if($image){ ?><span class="icon"><img src="<?php print $image ?>" alt="<?php print strip_tags($title) ?>"/> </span> <?php } ?>
                     <?php if($link){ ?> </a> <?php } ?>
                  </div>
               <?php } ?>
               <div class="content-inner">
                  <div class="title"><?php print $title; ?></div>
                  <div class="desc <?php print $hidden_content ?>"><?php print $content; ?></div>
               </div>
            </div> 
         <?php } ?>

         <?php return ob_get_clean() ?>
       <?php
      }

   } 
endif;   
