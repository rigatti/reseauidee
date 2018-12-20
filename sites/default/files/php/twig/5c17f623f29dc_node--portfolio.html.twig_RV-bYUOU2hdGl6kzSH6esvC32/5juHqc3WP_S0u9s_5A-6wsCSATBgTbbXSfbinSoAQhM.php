<?php

/* themes/gavias_colin/templates/node/node--portfolio.html.twig */
class __TwigTemplate_34f7f49c50db5972c6cc2c182ddcf9e9e8898dc205b135512bd87e07ce1602a3 extends Twig_Template
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
        $tags = array("set" => 2, "if" => 15, "trans" => 86);
        $filters = array("clean_class" => 4, "t" => 38, "raw" => 64, "without" => 93);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if', 'trans'),
                array('clean_class', 't', 'raw', 'without'),
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

        // line 2
        $context["classes"] = array(0 => "node", 1 => ("node--type-" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(        // line 4
($context["node"] ?? null), "bundle", array()))), 2 => (($this->getAttribute(        // line 5
($context["node"] ?? null), "isPromoted", array(), "method")) ? ("node--promoted") : ("")), 3 => (($this->getAttribute(        // line 6
($context["node"] ?? null), "isSticky", array(), "method")) ? ("node--sticky") : ("")), 4 => (( !$this->getAttribute(        // line 7
($context["node"] ?? null), "isPublished", array(), "method")) ? ("node--unpublished") : ("")), 5 => ((        // line 8
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass(($context["view_mode"] ?? null)))) : ("")), 6 => "clearfix");
        // line 12
        echo "
<!-- Start Display article for teaser page -->

";
        // line 15
        if ((($context["view_mode"] ?? null) == "teaser")) {
            // line 16
            echo "
  <div class=\"portfolio-v1\">      
    <div class=\"portfolio-content\">
      <div class=\"images lightGallery\">
        ";
            // line 20
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content"] ?? null), "field_portfolio_images", array()), "html", null, true));
            echo "
        <a class=\"link\" href=\"";
            // line 21
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["url"] ?? null), "html", null, true));
            echo "\"><i class=\"fa fa-link\"></i></a>
      </div>
      <div class=\"content-inner\"> <div class=\"title\"> <a href=\"";
            // line 23
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["url"] ?? null), "html", null, true));
            echo "\" rel=\"bookmark\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["label"] ?? null), "html", null, true));
            echo "</a> </div><div class=\"category\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content"] ?? null), "field_portfolio_tags", array()), "html", null, true));
            echo "</div></div>    
    </div>
  </div>

";
        } elseif ((        // line 27
($context["view_mode"] ?? null) == "teaser_2")) {
            // line 28
            echo "  <div class=\"portfolio-v2\">      
    <div class=\"images lightGallery\">
      ";
            // line 30
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content"] ?? null), "field_portfolio_images", array()), "html", null, true));
            echo "
      <a class=\"link\" href=\"";
            // line 31
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["url"] ?? null), "html", null, true));
            echo "\"><i class=\"fa fa-link\"></i></a>
    </div>
    <div class=\"content-inner\">
      <div class=\"portfolio-content\">
        <div class=\"category\">";
            // line 35
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content"] ?? null), "field_portfolio_tags", array()), "html", null, true));
            echo "</div>
        <div class=\"title\"> <a href=\"";
            // line 36
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["url"] ?? null), "html", null, true));
            echo "\" rel=\"bookmark\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["label"] ?? null), "html", null, true));
            echo "</a> </div>
        <div class=\"description\"> ";
            // line 37
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content"] ?? null), "body", array()), "html", null, true));
            echo " </div>
        <div class=\"action\"><a class=\"btn-inline\" href=\"";
            // line 38
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["url"] ?? null), "html", null, true));
            echo "\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Read more")));
            echo "</a></div>
      </div>  
    </div>    
  </div>
";
        } else {
            // line 43
            echo "
<!-- Start Display article for detail page -->
";
            // line 45
            $context["xcol"] = "col-md-12 col-sm-12 col-xs-12";
            // line 46
            if (($context["informations"] ?? null)) {
                // line 47
                echo "  ";
                $context["xcol"] = "col-md-6 col-sm-12 col-xs-12";
            }
            // line 48
            echo " 

<article";
            // line 50
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => ($context["classes"] ?? null)), "method"), "addClass", array(0 => "node-detail"), "method"), "html", null, true));
            echo ">
  <div class=\"post-block portfolio-single\">
    
    <div class=\"row\">
      <div class=\"";
            // line 54
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["xcol"] ?? null), "html", null, true));
            echo "\"> 
        <div class=\"post-thumbnail\">
          ";
            // line 56
            if ($this->getAttribute(($context["content"] ?? null), "field_portfolio_images", array())) {
                // line 57
                echo "            ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content"] ?? null), "field_portfolio_images", array()), "html", null, true));
                echo " 
          ";
            }
            // line 59
            echo "        </div>
      </div>
      ";
            // line 61
            if (($context["informations"] ?? null)) {
                // line 62
                echo "      <div class=\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["xcol"] ?? null), "html", null, true));
                echo "\">
        <div class=\"portfolio-informations\">
          ";
                // line 64
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["informations"] ?? null)));
                echo "
        </div>
      </div>  
      ";
            }
            // line 68
            echo "    </div> 
     
    <div class=\"post-content\">
      <span class=\"post-categories\">";
            // line 71
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content"] ?? null), "field_portfolio_tags", array()), "html", null, true));
            echo "</span>
      ";
            // line 72
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["title_prefix"] ?? null), "html", null, true));
            echo "
         <h1";
            // line 73
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["title_attributes"] ?? null), "addClass", array(0 => "post-title"), "method"), "html", null, true));
            echo ">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["label"] ?? null), "html", null, true));
            echo "</h1>
      ";
            // line 74
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["title_suffix"] ?? null), "html", null, true));
            echo "         
      <div class=\"post-meta\">
        <span class=\"post-created\"> ";
            // line 76
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["date"] ?? null), "html", null, true));
            echo " </span> /
        <span class=\"post-comment\"> 
          <a href=\"";
            // line 78
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["url"] ?? null), "html", null, true));
            echo "/#comments\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["comment_count"] ?? null), "html", null, true));
            echo " Comments</a>
        </span>
      </div>
      
      ";
            // line 82
            if (($context["display_submitted"] ?? null)) {
                // line 83
                echo "        <div class=\"node__meta hidden\">
          ";
                // line 84
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["author_picture"] ?? null), "html", null, true));
                echo "
          <span";
                // line 85
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["author_attributes"] ?? null), "html", null, true));
                echo ">
            ";
                // line 86
                echo t("Submitted by @author_name on @date", array("@author_name" => ($context["author_name"] ?? null), "@date" => ($context["date"] ?? null), ));
                // line 87
                echo "          </span>
          ";
                // line 88
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["metadata"] ?? null), "html", null, true));
                echo "
        </div>
      ";
            }
            // line 91
            echo "
      <div";
            // line 92
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content_attributes"] ?? null), "addClass", array(0 => "node__content", 1 => "clearfix"), "method"), "html", null, true));
            echo ">
        ";
            // line 93
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_without(($context["content"] ?? null), "field_portfolio_images", "field_portfolio_tags", "field_portfolio_information", "comment"), "html", null, true));
            echo "
      </div>

      ";
            // line 96
            if ($this->getAttribute(($context["content"] ?? null), "comment", array())) {
                // line 97
                echo "        <div id=\"node-single-comment\">
          ";
                // line 98
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content"] ?? null), "comment", array()), "html", null, true));
                echo "
        </div>
      ";
            }
            // line 101
            echo "
    </div>

  </div>

</article>

<!-- End Display article for detail page -->
";
        }
    }

    public function getTemplateName()
    {
        return "themes/gavias_colin/templates/node/node--portfolio.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  265 => 101,  259 => 98,  256 => 97,  254 => 96,  248 => 93,  244 => 92,  241 => 91,  235 => 88,  232 => 87,  230 => 86,  226 => 85,  222 => 84,  219 => 83,  217 => 82,  208 => 78,  203 => 76,  198 => 74,  192 => 73,  188 => 72,  184 => 71,  179 => 68,  172 => 64,  166 => 62,  164 => 61,  160 => 59,  154 => 57,  152 => 56,  147 => 54,  140 => 50,  136 => 48,  132 => 47,  130 => 46,  128 => 45,  124 => 43,  114 => 38,  110 => 37,  104 => 36,  100 => 35,  93 => 31,  89 => 30,  85 => 28,  83 => 27,  72 => 23,  67 => 21,  63 => 20,  57 => 16,  55 => 15,  50 => 12,  48 => 8,  47 => 7,  46 => 6,  45 => 5,  44 => 4,  43 => 2,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/gavias_colin/templates/node/node--portfolio.html.twig", "C:\\wamp64\\www\\reseauidee\\themes\\gavias_colin\\templates\\node\\node--portfolio.html.twig");
    }
}
