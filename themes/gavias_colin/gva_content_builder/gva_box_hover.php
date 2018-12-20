<?php 

if(!class_exists('element_gva_box_hover')):
   class element_gva_box_hover{
      
      public function render_form(){
         $fields = array(
            'type'            => 'gsc_box_hover',
            'title'           => t('Box Hover'),
            'fields' => array(
               array(
                  'id'        => 'title',
                  'type'      => 'text',
                  'title'     => 'Title',
                  'admin'     => true
               ),
               array(
                  'id'        => 'content',
                  'type'      => 'textarea',
                  'title'     => t('Content')
               ),
               array(
                  'id'        => 'icon',
                  'type'      => 'text',
                  'title'     => t('Icon')
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
                  'std'       => t('Read more')
               ),
               array(
                  'id'        => 'style',
                  'type'      => 'select',
                  'title'     => t('Style'),
                  'options'   => array( 
                     'style-1' => t('Style 1'),
                     'style-2' => t('Style 2') 
                  ),
               ),
               array(
                  'id'        => 'text_style',
                  'type'      => 'select',
                  'title'     => t('Text Style'),
                  'options'   => array( 
                     'dark' => t('Dark'), 
                     'white' => t('White')
                  ),
               ),
               array(
                  'id'        => 'target',
                  'type'      => 'select',
                  'title'     => t('Open in new window'),
                  'desc'      => t('Adds a target="_blank" attribute to the link'),
                  'options'   => array( 0 => 'No', 1 => 'Yes' ),
               ),
               array(
                  'id'        => 'height',
                  'type'      => 'text',
                  'title'     => t('Min Height')
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
         return $fields;
      }

      public static function render_content( $attr = array(), $content = '' ){
         extract(gavias_merge_atts(array(
            'icon'                  => '',
            'title'                 => '',
            'content'               => '',
            'link'                  => '',
            'text_link'             => 'Read more',
            'style'                 => 'style-1',
            'text_style'            => 'white',
            'target'                => '',
            'image'                 => '',
            'height'                => '',
            'el_class'              => '',
            'animate'               => '',
            'animate_delay'         => ''
         ), $attr));

         // target
         if( $target ){
            $target = 'target="_blank"';
         } else {
            $target = false;
         }
         $el_class .= ' ' . $style;
         $el_class .= ' text-' . $text_style;
         $css = '';
         $css .= !empty($height) ? "min-height: {$height};" : "";
         if(!empty($css)){
            $css = "style=\"{$css}\"";
         }

         if($animate) $el_class .= ' wow ' . $animate; 

         ?>
         <?php ob_start() ?>
         <div class="widget gsc-box-hover clearfix <?php print $el_class; ?>" <?php print $css ?> <?php print gavias_content_builder_print_animate_wow('', $animate_delay) ?>>
            <div class="box-content">
               <?php if($icon){ ?><div class="icon"><i class="<?php print $icon ?>"></i></div> <?php } ?>
               <div class="content-inner">
                  <div class="box-title"><h4 class="title"><?php print $title ?></h3></div>
                  <?php if($content){ ?><div class="content-inner"><?php print $content ?></div><?php } ?>
                  <div class="action"><a class="btn-inline" <?php if($link) print 'href="'. $link .'"' ?> <?php print $target ?>><span class="text"><?php print $text_link ?></span></a></div>
               </div>
            </div>   
         </div>
         <?php return ob_get_clean() ?>
         <?php
      }
   }
endif;   




