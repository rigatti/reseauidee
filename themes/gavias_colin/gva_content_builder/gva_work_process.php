<?php 
if(!class_exists('element_gva_work_process')):
   class element_gva_work_process{
      public function render_form(){
         $fields = array(
            'type'      => 'gva_work_process',
            'title'  => t('Work Process'), 
            'fields' => array(
               array(
                  'id'     => 'title',
                  'type'   => 'text',
                  'title'  => t('Title'),
                  'admin'  => true
               ),
               array(
                  'id'     => 'el_class',
                  'type'      => 'text',
                  'title'  => t('Extra class name'),
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
         for($i=1; $i<=8; $i++){
            $fields['fields'][] = array(
               'id'     => "info_${i}",
               'type'   => 'info',
               'desc'   => "Information for item {$i}"
            );
            $fields['fields'][] = array(
               'id'        => "title_{$i}",
               'type'      => 'text',
               'title'     => t("Title {$i}")
            );
            $fields['fields'][] = array(
               'id'        => "icon_{$i}",
               'type'      => 'text',
               'title'     => t("Icon {$i}")
            );
            $fields['fields'][] = array(
               'id'           => "content_{$i}",
               'type'         => 'textarea_without_html',
               'title'        => t("Content {$i}")
            );
            
         }
      return $fields;
      }

      public static function render_content( $attr = array(), $content = '' ){
         $default = array(
            'title'           => '',
            'el_class'        => '',
            'animate'         => '',
            'animate_delay'   => ''
         );        
         for($i=1; $i<=8; $i++){
            $default["title_{$i}"] = '';
            $default["icon_{$i}"] = '';
            $default["content_{$i}"] = '';
         }
         extract(gavias_merge_atts($default, $attr)); 

         if($animate) $class[] = 'wow ' . $animate; 

         $_id = 'workprocess-' . gavias_content_builder_makeid();
         $classes = $el_class;

         ?>
          <?php ob_start() ?>
         <div class="gsc-workprocess <?php print $classes ?>" id="<?php print $_id; ?>" <?php print gavias_content_builder_print_animate_wow('', $animate_delay) ?>>
            <ul class="service-timeline post-area">
               <?php for($i=1; $i<=8; $i++){ ?>
               <?php 
                  $title = "title_{$i}";
                  $icon = "icon_{$i}";
                  $content = "content_{$i}";
               ?>
               <?php if(!empty($$title)){ ?>
                  <li class="entry-timeline clearfix">
                     <div class="hentry skrollable skrollable-between" data-bottom-top="opacity: 0;" data-center-bottom="opacity: 1;" data-top-bottom="opacity: 0;">
                        <div class="icon"><span class="<?php print $$icon ?>"></span></div>    
                        <div class="hentry-box clearfix">
                           <div class="content-inner">
                              <div class="title"><?php print $$title ?></div>
                              <div class="content"><?php print $$content ?></div>
                           </div>  
                           <div class="icon-overlay"><span class="<?php print $$icon ?>"></span></div>  
                       </div>
                    </div> 
                  </li>
               <?php } ?>   
               <?php } ?>   
            </ul>
         </div>
         <?php return ob_get_clean() ?>
      <?php    
      }
      
   }

endif;