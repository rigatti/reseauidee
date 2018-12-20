<?php 

if(!class_exists('element_gva_call_to_action')):
   class element_gva_call_to_action{
      public function render_form(){
         $fields = array(
            'type' => 'gsc_call_to_action',
            'title' => t('Call to Action'),
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
                  'desc'      => t('HTML tags allowed.'),
               ),
               array(
                  'id'           => 'button_align',
                  'type'         => 'select',
                  'title'        => 'Style',
                  'options'      => array(
                     'button-left'              => t('Button Left'),
                     'button-right'             => t('Button Right'),
                     'button-bottom'            => t('Button Bottom Left'),
                     'button-bottom-2'          => t('Button Bottom Left 2'),
                     'button-bottom-right'      => t('Button Bottom Right'),
                     'button-center'            => t('Button Bottom Center'),
                  )
               ),
               array(
                  'id'        => 'box_background',
                  'type'      => 'text',
                  'title'     => t('Box Background'),
                  'desc'      => t('Box Background, e.g: #f5f5f5')
               ),
               array(
                  'id'        => 'width',
                  'type'      => 'text',
                  'title'     => t('Max width for content'),
                  'desc'      => 'e.g 660px'
               ),
               array(
                  'id'        => 'style_text',
                  'type'      => 'select',
                  'title'     => 'Skin Text for box',
                  'options'   => array(
                        'text-light'  => 'Text light',
                        'text-dark'   => 'Text dark',
                  ),
                  'std'       => 'text-dark'
               ),
               array(
                 'id'        => 'info',
                 'type'      => 'info',
                 'title'      => 'Settings Button #1'
               ),
               array(
                  'id'        => 'link',
                  'type'      => 'text',
                  'title'     => t('Link 1'),
               ),
               array(
                  'id'        => 'button_title',
                  'type'      => 'text',
                  'title'     => t('Button Title 1'),
                  'desc'      => t('Leave this field blank if you want Call to Action with Big Icon'),
               ),
               array(
                  'id'        => 'style_button',
                  'type'      => 'select',
                  'title'     => 'Style button #1',
                  'options'   => array(
                        'btn-theme'           => 'Button default of theme',
                        'btn-theme-second'    => 'Button second of theme',
                        'btn-white'           => 'Button white'
                  ),
                  'std'       => 'text-dark'
               ),
               array(
                 'id'        => 'info',
                 'type'      => 'info',
                 'title'      => 'Settings Button #2'
               ),
               array(
                  'id'        => 'link_2',
                  'type'      => 'text',
                  'title'     => t('Link 2'),
               ),
               array(
                  'id'        => 'button_title_2',
                  'type'      => 'text',
                  'title'     => t('Button Title 2'),
                  'desc'      => t('Leave this field blank if you want Call to Action with Big Icon'),
               ),
               array(
                  'id'        => 'style_button_2',
                  'type'      => 'select',
                  'title'     => 'Style button 2',
                  'options'   => array(
                        'btn-theme'           => 'Button default of theme',
                        'btn-theme-second'    => 'Button second of theme',
                        'btn-white'           => 'Button white'
                  ),
                  'std'       => 'text-dark'
               ),
               array(
                 'id'        => 'info',
                 'type'      => 'info',
                 'title'      => 'Settings Video Link'
               ),
               array(
                  'id'        => 'link_video',
                  'type'      => 'text',
                  'title'     => t('Link Video (youtube/vimeo)'),
               ),
               array(
                  'id'        => 'target',
                  'type'      => 'select',
                  'title'     => t('Open in new window'),
                  'desc'      => t('Adds a target="_blank" attribute to the link'),
                  'options'   => array( 'off' => 'Off', 'on' => 'On' ),
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

      function render_content( $attr = array(), $content = ''  ){
         extract(gavias_merge_atts(array(
            'title'           => '',
            'subtitle'        => '',
            'content'         => '',
            'button_align'    => '',
            'width'           => '',
            'link'            => '',
            'button_title'    => '',
            'style_button'    => 'btn-theme',
            'link_2'          => '',
            'button_title_2'  => '',
            'style_button_2'  => 'btn-theme',
            'link_video'      => '',
            'target'          => '',
            'el_class'        => '',
            'animate'         => '',
            'animate_delay'   => '',
            'style_text'      => 'text-dark',
            'box_background'  => '',
            'video'           => ''
         ), $attr));
         
         // target
         if( $target =='on' ){
            $target = 'target="_blank"';
         } else {
            $target = false;
         }
         
         $class = array();
         $class[] = $el_class;
         $class[] = $button_align;
         $class[] = $style_text;
         if($animate) $class[] = 'wow ' . $animate; 
         if($box_background) $class[] = 'has-background';

         $style = '';
         if($width) $style .= "max-width: {$width};";
         if($box_background) $style .= "background: {$box_background};";
         $style = !empty($style) ? "style=\"".$style ."\"" : '';
         ?>

         <?php ob_start() ?>
         <div class="widget gsc-call-to-action <?php print implode($class, ' ') ?>" <?php print $style ?> <?php print gavias_content_builder_print_animate_wow('', $animate_delay) ?>>
            <div class="content-inner clearfix" >
               <div class="content">
                  <h2 class="title"><span><?php print $title; ?></span></h2>
                  <div class="desc"><?php print $content; ?></div>
               </div>
               <div class="button-action">
                  <?php if($link){?>
                     <a href="<?php print $link ?>" class="<?php print $style_button ?>" <?php print $target ?>><?php print $button_title ?></a>   
                  <?php } ?>
                  <?php if($link_2){?>
                     <a href="<?php print $link_2 ?>" class="<?php print $style_button_2 ?>" <?php print $target ?>><?php print $button_title_2 ?></a>   
                  <?php } ?>
               </div>
               <?php if($link_video){ ?>
                  <div class="link-video">
                     <a class="popup-video" href="<?php print $link_video ?>"><?php print t('Watch the video') ?></a>
                  </div>
               <?php } ?>   
            </div>
         </div>
         <?php return ob_get_clean() ?>
      <?php
      }

   }
endif;   



