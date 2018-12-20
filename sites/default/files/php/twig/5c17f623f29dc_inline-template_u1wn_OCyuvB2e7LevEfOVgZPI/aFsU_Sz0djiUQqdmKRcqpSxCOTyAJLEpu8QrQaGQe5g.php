<?php

/* {# inline_template_start #}<div class="testimonial-node-v2">      
   <div class="testimonial-content">
      <div class="content">
         <div class="content-inner text-left">
            <div class="quote">{{ body }}</div>  
            <div class="info">
               <span class="title"> {{ field_testimonial_name }}</span><span class="job"> {{ field_testimonial_job }}</span>
            </div>   
         </div>    
      </div>
   </div>
</div >
 */
class __TwigTemplate_9b6dcef9f099588a489465d94fa0fd811fd2c789a0bcf766fcf57ad216a7496b extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array();
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array(),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo "<div class=\"testimonial-node-v2\">      
   <div class=\"testimonial-content\">
      <div class=\"content\">
         <div class=\"content-inner text-left\">
            <div class=\"quote\">";
        // line 5
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["body"] ?? null), "html", null, true));
        echo "</div>  
            <div class=\"info\">
               <span class=\"title\"> ";
        // line 7
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["field_testimonial_name"] ?? null), "html", null, true));
        echo "</span><span class=\"job\"> ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["field_testimonial_job"] ?? null), "html", null, true));
        echo "</span>
            </div>   
         </div>    
      </div>
   </div>
</div >
";
    }

    public function getTemplateName()
    {
        return "{# inline_template_start #}<div class=\"testimonial-node-v2\">      
   <div class=\"testimonial-content\">
      <div class=\"content\">
         <div class=\"content-inner text-left\">
            <div class=\"quote\">{{ body }}</div>  
            <div class=\"info\">
               <span class=\"title\"> {{ field_testimonial_name }}</span><span class=\"job\"> {{ field_testimonial_job }}</span>
            </div>   
         </div>    
      </div>
   </div>
</div >
";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  66 => 7,  61 => 5,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "{# inline_template_start #}<div class=\"testimonial-node-v2\">      
   <div class=\"testimonial-content\">
      <div class=\"content\">
         <div class=\"content-inner text-left\">
            <div class=\"quote\">{{ body }}</div>  
            <div class=\"info\">
               <span class=\"title\"> {{ field_testimonial_name }}</span><span class=\"job\"> {{ field_testimonial_job }}</span>
            </div>   
         </div>    
      </div>
   </div>
</div >
", "");
    }
}
