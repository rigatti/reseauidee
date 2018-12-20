<?php

/* themes/gavias_colin/templates/page/footer.html.twig */
class __TwigTemplate_16988f6c85ae6cf1cf0fb172db7c662dfdc2d22327926a03804cc82f88b44a6e extends Twig_Template
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
        $tags = array("if" => 5);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
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
        echo "
<footer id=\"footer\" class=\"footer\">
  <div class=\"footer-inner\">
    
    ";
        // line 5
        if ($this->getAttribute(($context["page"] ?? null), "before_footer", array())) {
            // line 6
            echo "     <div class=\"footer-top\">
        <div class=\"container\">
          <div class=\"row\">
            <div class=\"col-xs-12\">
              <div class=\"before-footer clearfix area\">
                  ";
            // line 11
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "before_footer", array()), "html", null, true));
            echo "
              </div>
            </div>
          </div>     
        </div>   
      </div> 
     ";
        }
        // line 18
        echo "     
     <div class=\"footer-center\">
        <div class=\"container\">      
           <div class=\"row\">
              ";
        // line 22
        if ($this->getAttribute(($context["page"] ?? null), "footer_first", array())) {
            // line 23
            echo "                <div class=\"footer-first col-lg-";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_first_size"] ?? null), "html", null, true));
            echo " col-md-";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_first_size"] ?? null), "html", null, true));
            echo " col-sm-12 col-xs-12 column\">
                  ";
            // line 24
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_first", array()), "html", null, true));
            echo "
                </div> 
              ";
        }
        // line 27
        echo "
              ";
        // line 28
        if ($this->getAttribute(($context["page"] ?? null), "footer_second", array())) {
            // line 29
            echo "               <div class=\"footer-second col-lg-";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_second_size"] ?? null), "html", null, true));
            echo " col-md-";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_second_size"] ?? null), "html", null, true));
            echo " col-sm-12 col-xs-12 column\">
                  ";
            // line 30
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_second", array()), "html", null, true));
            echo "
                </div> 
              ";
        }
        // line 33
        echo "
              ";
        // line 34
        if ($this->getAttribute(($context["page"] ?? null), "footer_third", array())) {
            // line 35
            echo "                <div class=\"footer-third col-lg-";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_third_size"] ?? null), "html", null, true));
            echo " col-md-";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_third_size"] ?? null), "html", null, true));
            echo " col-sm-12 col-xs-12 column\">
                  ";
            // line 36
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_third", array()), "html", null, true));
            echo "
                </div> 
              ";
        }
        // line 39
        echo "
              ";
        // line 40
        if ($this->getAttribute(($context["page"] ?? null), "footer_four", array())) {
            // line 41
            echo "                 <div class=\"footer-four col-lg-";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_four_size"] ?? null), "html", null, true));
            echo " col-md-";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["footer_four_size"] ?? null), "html", null, true));
            echo " col-sm-12 col-xs-12 column\">
                  ";
            // line 42
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_four", array()), "html", null, true));
            echo "
                </div> 
              ";
        }
        // line 45
        echo "           </div>   
        </div>
    </div>  
  </div>   

  ";
        // line 50
        if ($this->getAttribute(($context["page"] ?? null), "copyright", array())) {
            // line 51
            echo "    <div class=\"copyright\">
      <div class=\"container\">
        <div class=\"copyright-inner\">
            ";
            // line 54
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "copyright", array()), "html", null, true));
            echo "
        </div>   
      </div>   
    </div>
  ";
        }
        // line 59
        echo "
</footer>
";
    }

    public function getTemplateName()
    {
        return "themes/gavias_colin/templates/page/footer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  165 => 59,  157 => 54,  152 => 51,  150 => 50,  143 => 45,  137 => 42,  130 => 41,  128 => 40,  125 => 39,  119 => 36,  112 => 35,  110 => 34,  107 => 33,  101 => 30,  94 => 29,  92 => 28,  89 => 27,  83 => 24,  76 => 23,  74 => 22,  68 => 18,  58 => 11,  51 => 6,  49 => 5,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/gavias_colin/templates/page/footer.html.twig", "C:\\wamp64\\www\\reseauidee\\themes\\gavias_colin\\templates\\page\\footer.html.twig");
    }
}
