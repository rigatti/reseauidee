<?php

/* themes/gavias_colin/templates/navigation/links.html.twig */
class __TwigTemplate_6de1d0637a8bd8b88af419e6b3017fb4106dafcf2a2e2138788d3035398fec40 extends Twig_Template
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
        $tags = array("if" => 35, "for" => 44);
        $filters = array("clean_class" => 45);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'for'),
                array('clean_class'),
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

        // line 35
        if (($context["links"] ?? null)) {
            // line 36
            if (($context["heading"] ?? null)) {
                // line 37
                if ($this->getAttribute(($context["heading"] ?? null), "level", array())) {
                    // line 38
                    echo "<";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["heading"] ?? null), "level", array()), "html", null, true));
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["heading"] ?? null), "attributes", array()), "html", null, true));
                    echo ">";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["heading"] ?? null), "text", array()), "html", null, true));
                    echo "</";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["heading"] ?? null), "level", array()), "html", null, true));
                    echo ">";
                } else {
                    // line 40
                    echo "<h2";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["heading"] ?? null), "attributes", array()), "html", null, true));
                    echo ">";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["heading"] ?? null), "text", array()), "html", null, true));
                    echo "</h2>";
                }
            }
            // line 43
            echo "<ul";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["attributes"] ?? null), "html", null, true));
            echo ">";
            // line 44
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["links"] ?? null));
            foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                // line 45
                echo "<li";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["item"], "attributes", array()), "addClass", array(0 => \Drupal\Component\Utility\Html::getClass($context["key"])), "method"), "html", null, true));
                echo ">";
                // line 46
                if ($this->getAttribute($context["item"], "link", array())) {
                    // line 47
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "link", array()), "html", null, true));
                } elseif ($this->getAttribute(                // line 48
$context["item"], "text_attributes", array())) {
                    // line 49
                    echo "<span";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "text_attributes", array()), "html", null, true));
                    echo ">";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "text", array()), "html", null, true));
                    echo "</span>";
                } else {
                    // line 51
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "text", array()), "html", null, true));
                }
                // line 53
                echo "</li>";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 55
            echo "</ul>";
        }
    }

    public function getTemplateName()
    {
        return "themes/gavias_colin/templates/navigation/links.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  101 => 55,  95 => 53,  92 => 51,  85 => 49,  83 => 48,  81 => 47,  79 => 46,  75 => 45,  71 => 44,  67 => 43,  59 => 40,  49 => 38,  47 => 37,  45 => 36,  43 => 35,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/gavias_colin/templates/navigation/links.html.twig", "C:\\wamp64\\www\\reseauidee\\themes\\gavias_colin\\templates\\navigation\\links.html.twig");
    }
}
