<?php

/* themes/gavias_colin/templates/views/views-view-grid.html.twig */
class __TwigTemplate_cca3be67c8675c3cb8a7bacc290c8e9642cd10800de72af733ec4046afe717df extends Twig_Template
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
        $tags = array("set" => 30, "if" => 39, "for" => 74);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if', 'for'),
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

        // line 30
        $context["classes"] = array(0 => "views-view-grid", 1 => $this->getAttribute(        // line 32
($context["gva_masonry"] ?? null), "class", array()), 2 => $this->getAttribute(        // line 33
($context["options"] ?? null), "alignment", array()), 3 => ("cols-" . $this->getAttribute(        // line 34
($context["options"] ?? null), "columns", array())), 4 => "clearfix");
        // line 38
        echo "
  ";
        // line 39
        if (($this->getAttribute(($context["options"] ?? null), "columns", array()) == "1")) {
            // line 40
            echo "    ";
            $context["xclass"] = array(0 => "col-lg-12 col-md-12 col-sm-12 col-xs-12");
            // line 41
            echo "  ";
        } elseif (($this->getAttribute(($context["options"] ?? null), "columns", array()) == "2")) {
            // line 42
            echo "    ";
            $context["xclass"] = array(0 => "col-lg-6 col-md-6 col-sm-6 col-xs-12");
            // line 43
            echo "  ";
        } elseif (($this->getAttribute(($context["options"] ?? null), "columns", array()) == "3")) {
            // line 44
            echo "    ";
            $context["xclass"] = array(0 => "col-lg-4 col-md-4 col-sm-4 col-xs-12");
            // line 45
            echo "  ";
        } elseif (($this->getAttribute(($context["options"] ?? null), "columns", array()) == "4")) {
            // line 46
            echo "    ";
            $context["xclass"] = array(0 => "col-lg-3 col-md-3 col-sm-6 col-xs-12");
            // line 47
            echo "  ";
        } elseif (($this->getAttribute(($context["options"] ?? null), "columns", array()) == "6")) {
            // line 48
            echo "    ";
            $context["xclass"] = array(0 => "col-lg-2 col-md-2 col-sm-6 col-xs-6");
            // line 49
            echo "  ";
        } else {
            // line 50
            echo "    ";
            $context["xclass"] = array(0 => "col-lg-4 col-md-4 col-sm-4 col-xs-12");
            // line 51
            echo "  ";
        }
        echo "    

";
        // line 53
        if ($this->getAttribute(($context["options"] ?? null), "row_class_default", array())) {
            // line 54
            echo "  ";
            // line 55
            $context["row_classes"] = array(0 => "views-row row", 1 => ((($this->getAttribute(            // line 57
($context["options"] ?? null), "alignment", array()) == "horizontal")) ? ("clearfix") : ("")));
        }
        // line 61
        if ($this->getAttribute(($context["options"] ?? null), "col_class_default", array())) {
            // line 62
            echo "  ";
            // line 63
            $context["col_classes"] = array(0 => "views-col", 1 => ((($this->getAttribute(            // line 65
($context["options"] ?? null), "alignment", array()) == "vertical")) ? ("clearfix") : ("")));
        }
        // line 69
        if (($context["title"] ?? null)) {
            // line 70
            echo "  <h3>";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["title"] ?? null), "html", null, true));
            echo "</h3>
";
        }
        // line 72
        echo "<div";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => ($context["classes"] ?? null)), "method"), "html", null, true));
        echo ">
  ";
        // line 73
        if (($this->getAttribute(($context["options"] ?? null), "alignment", array()) == "horizontal")) {
            // line 74
            echo "    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
            $context['loop'] = array(
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            );
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
                // line 75
                echo "      
      ";
                // line 76
                if (($this->getAttribute(($context["gva_masonry"] ?? null), "class", array()) == "")) {
                    // line 77
                    echo "        <div";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["row"], "attributes", array()), "addClass", array(0 => ($context["row_classes"] ?? null), 1 => (($this->getAttribute(($context["options"] ?? null), "row_class_default", array())) ? (("row-" . $this->getAttribute($context["loop"], "index", array()))) : (""))), "method"), "html", null, true));
                    echo ">
      ";
                }
                // line 78
                echo "  

        ";
                // line 80
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["row"], "content", array()));
                $context['loop'] = array(
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                );
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["column"]) {
                    // line 81
                    echo "          <div";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["column"], "attributes", array()), "addClass", array(0 => ($context["col_classes"] ?? null), 1 => (($this->getAttribute(($context["options"] ?? null), "col_class_default", array())) ? (("col-" . $this->getAttribute($context["loop"], "index", array()))) : ("")), 2 => ($context["xclass"] ?? null), 3 => $this->getAttribute(($context["gva_masonry"] ?? null), "class_item", array())), "method"), "html", null, true));
                    echo ">
            ";
                    // line 82
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["column"], "content", array()), "html", null, true));
                    echo "
          </div>
        ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['column'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 85
                echo "      
      ";
                // line 86
                if (($this->getAttribute(($context["gva_masonry"] ?? null), "class", array()) == "")) {
                    // line 87
                    echo "        </div>
      ";
                }
                // line 88
                echo "  

    ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 91
            echo "  ";
        } else {
            // line 92
            echo "    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
            $context['loop'] = array(
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            );
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["column"]) {
                // line 93
                echo "      <div";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["column"], "attributes", array()), "addClass", array(0 => ($context["col_classes"] ?? null), 1 => (($this->getAttribute(($context["options"] ?? null), "col_class_default", array())) ? (("col-" . $this->getAttribute($context["loop"], "index", array()))) : ("")), 2 => ($context["xclass"] ?? null)), "method"), "html", null, true));
                echo ">
        ";
                // line 94
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["column"], "content", array()));
                $context['loop'] = array(
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                );
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
                    // line 95
                    echo "          <div";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["row"], "attributes", array()), "addClass", array(0 => ($context["row_classes"] ?? null), 1 => (($this->getAttribute(($context["options"] ?? null), "row_class_default", array())) ? (("row-" . $this->getAttribute($context["loop"], "index", array()))) : (""))), "method"), "html", null, true));
                    echo ">
            ";
                    // line 96
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["row"], "content", array()), "html", null, true));
                    echo "
          </div>
        ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 99
                echo "      </div>
    ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['column'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 101
            echo "  ";
        }
        // line 102
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "themes/gavias_colin/templates/views/views-view-grid.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  303 => 102,  300 => 101,  285 => 99,  268 => 96,  263 => 95,  246 => 94,  241 => 93,  223 => 92,  220 => 91,  204 => 88,  200 => 87,  198 => 86,  195 => 85,  178 => 82,  173 => 81,  156 => 80,  152 => 78,  146 => 77,  144 => 76,  141 => 75,  123 => 74,  121 => 73,  116 => 72,  110 => 70,  108 => 69,  105 => 65,  104 => 63,  102 => 62,  100 => 61,  97 => 57,  96 => 55,  94 => 54,  92 => 53,  86 => 51,  83 => 50,  80 => 49,  77 => 48,  74 => 47,  71 => 46,  68 => 45,  65 => 44,  62 => 43,  59 => 42,  56 => 41,  53 => 40,  51 => 39,  48 => 38,  46 => 34,  45 => 33,  44 => 32,  43 => 30,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/gavias_colin/templates/views/views-view-grid.html.twig", "C:\\wamp64\\www\\reseauidee\\themes\\gavias_colin\\templates\\views\\views-view-grid.html.twig");
    }
}
