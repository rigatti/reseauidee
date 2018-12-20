<?php

/* themes/gavias_colin/templates/page/header.html.twig */
class __TwigTemplate_4dc588736742988241b1157ff7cb3d2f5835c28a09ed087727f9b063d724f191 extends Twig_Template
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
        $tags = array("if" => 3, "set" => 13);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'set'),
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
        echo "<header id=\"header\" class=\"header-default\">
  
  ";
        // line 3
        if ($this->getAttribute(($context["page"] ?? null), "topbar", array())) {
            // line 4
            echo "    <div class=\"topbar\">
      <div class=\"topbar-inner\">
        <div class=\"container\">
          <div class=\"content\">";
            // line 7
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "topbar", array()), "html", null, true));
            echo "</div> 
        </div>
      </div>
    </div>
  ";
        }
        // line 12
        echo "
  ";
        // line 13
        $context["class_sticky"] = "";
        // line 14
        echo "  ";
        if ((($context["sticky_menu"] ?? null) == 1)) {
            // line 15
            echo "    ";
            $context["class_sticky"] = "gv-sticky-menu";
            // line 16
            echo "  ";
        }
        echo "  

  <div class=\"header-main\">
    <div class=\"container\">
      <div class=\"header-inner clearfix\">
        <div class=\"row\">
          <div class=\"col-md-3 col-sm-4 col-xs-4 branding\">
            ";
        // line 23
        if ($this->getAttribute(($context["page"] ?? null), "branding", array())) {
            // line 24
            echo "              ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "branding", array()), "html", null, true));
            echo "
            ";
        }
        // line 26
        echo "          </div>
          <div class=\"col-md-9 col-sm-8 col-xs-8 right-header\">
            ";
        // line 28
        if ($this->getAttribute(($context["page"] ?? null), "header_right", array())) {
            // line 29
            echo "              ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "header_right", array()), "html", null, true));
            echo "
            ";
        }
        // line 31
        echo "          </div>
        </div>  
      </div>
    </div>  
  </div>

  <div class=\"main-menu ";
        // line 37
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["class_sticky"] ?? null), "html", null, true));
        echo "\">
    <div class=\"container header-content-layout\">
      <div class=\"header-main-inner p-relative\">
        <div class=\"row\">
          <div class=\"col-md-12 col-sm-12 col-xs-12 p-static\">
            <div class=\"area-main-menu\">
              <div class=\"area-inner\">
                <div class=\"gva-offcanvas-mobile\">
                  <div class=\"close-offcanvas hidden\"><i class=\"fa fa-times\"></i></div>
                  ";
        // line 46
        if ($this->getAttribute(($context["page"] ?? null), "main_menu", array())) {
            // line 47
            echo "                    ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "main_menu", array()), "html", null, true));
            echo "
                  
                  ";
        }
        // line 49
        echo "  
                  ";
        // line 50
        if ($this->getAttribute(($context["page"] ?? null), "offcanvas", array())) {
            // line 51
            echo "                    <div class=\"after-offcanvas hidden\">
                      ";
            // line 52
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "offcanvas", array()), "html", null, true));
            echo "
                    </div>
                 ";
        }
        // line 55
        echo "                </div>
                  
                <div id=\"menu-bar\" class=\"menu-bar hidden-lg hidden-md\">
                  <span class=\"one\"></span>
                  <span class=\"two\"></span>
                  <span class=\"three\"></span>
                </div>
                
                ";
        // line 63
        if ($this->getAttribute(($context["page"] ?? null), "quick_side", array())) {
            // line 64
            echo "                  <div class=\"quick-side-icon hidden-xs hidden-sm\">
                    <div class=\"icon\"><a href=\"#\"><span class=\"qicon fa fa-bars\"></span></a></div>
                  </div>
                ";
        }
        // line 68
        echo "
                ";
        // line 69
        if ($this->getAttribute(($context["page"] ?? null), "search", array())) {
            // line 70
            echo "                  <div class=\"gva-search-region search-region\">
                    <span class=\"icon\"><i class=\"fa fa-search\"></i></span>
                    <div class=\"search-content\">  
                      ";
            // line 73
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "search", array()), "html", null, true));
            echo "
                    </div>  
                  </div>
                ";
        }
        // line 77
        echo "              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</header>
";
    }

    public function getTemplateName()
    {
        return "themes/gavias_colin/templates/page/header.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  182 => 77,  175 => 73,  170 => 70,  168 => 69,  165 => 68,  159 => 64,  157 => 63,  147 => 55,  141 => 52,  138 => 51,  136 => 50,  133 => 49,  126 => 47,  124 => 46,  112 => 37,  104 => 31,  98 => 29,  96 => 28,  92 => 26,  86 => 24,  84 => 23,  73 => 16,  70 => 15,  67 => 14,  65 => 13,  62 => 12,  54 => 7,  49 => 4,  47 => 3,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/gavias_colin/templates/page/header.html.twig", "C:\\wamp64\\www\\reseauidee\\themes\\gavias_colin\\templates\\page\\header.html.twig");
    }
}
