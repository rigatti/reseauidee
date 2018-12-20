<?php

/* themes/gavias_colin/templates/addon/skins.html.twig */
class __TwigTemplate_4ae32555494dfa4a59d124cd074d7016bee6818541669512cb4922640e2a4070 extends Twig_Template
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
        $tags = array("include" => 4);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('include'),
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
        echo "<div class=\"gavias-skins-panel hidden-xs hidden-sm\">
\t<div class=\"control-panel\"><i class=\"fas fa-eye-dropper\"></i></div>
\t<div class=\"gavias-skins-panel-inner\">
\t   ";
        // line 4
        $this->loadTemplate((($context["directory"] ?? null) . "/customize/form.php"), "themes/gavias_colin/templates/addon/skins.html.twig", 4)->display($context);
        // line 5
        echo "\t</div>   
</div>

<div class=\"gavias-skins-panel gavias-skin-demo hidden-xs hidden-sm\">
\t<div class=\"control-panel\"><i class=\"fa fa-cogs\"></i></div>
\t<div class=\"panel-skins-content\">
\t\t<div class=\"title\">Color skins</div>
\t\t<div class=\"text-center\">
\t\t\t<a class=\"item-color default\" href=\"//";
        // line 13
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas\"></a>
\t\t\t<a class=\"item-color blue\" href=\"//";
        // line 14
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=blue\"></a>
\t\t\t<a class=\"item-color brown\" href=\"//";
        // line 15
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=brown\"></a>
\t\t\t<a class=\"item-color green\" href=\"//";
        // line 16
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=green\"></a>
\t\t\t<a class=\"item-color lilac\" href=\"//";
        // line 17
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=lilac\"></a>
\t\t\t<a class=\"item-color lime_green\" href=\"//";
        // line 18
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=lime_green\"></a>
\t\t\t<a class=\"item-color orange\" href=\"//";
        // line 19
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=orange\"></a>
\t\t\t<a class=\"item-color pink\" href=\"//";
        // line 20
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=pink\"></a>
\t\t\t<a class=\"item-color purple\" href=\"//";
        // line 21
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=purple\"></a>
\t\t\t<a class=\"item-color red\" href=\"//";
        // line 22
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=red\"></a>
\t\t\t<a class=\"item-color turquoise\" href=\"//";
        // line 23
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=turquoise\"></a>
\t\t\t<a class=\"item-color turquoise2\" href=\"//";
        // line 24
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=turquoise2\"></a>
\t\t\t<a class=\"item-color violet_red\" href=\"//";
        // line 25
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=violet_red\"></a>
\t\t\t<a class=\"item-color violet_red2\" href=\"//";
        // line 26
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=violet_red2\"></a>
\t\t\t<a class=\"item-color yellow\" href=\"//";
        // line 27
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["current_url"] ?? null), "html", null, true));
        echo "gvas=yellow\"></a>
\t\t</div>
\t</div>

\t<div class=\"clearfix\"></div>

\t<div class=\"panel-skins-content\">
\t\t<div class=\"title\">Body layout</div>
\t\t<div class=\"text-center\">
\t\t\t<a class=\"layout\" data-layout=\"boxed\">Boxed</a>
\t\t\t<a class=\"layout\" data-layout=\"wide\">Wide</a>
\t\t</div>
\t</div>
</div>

";
    }

    public function getTemplateName()
    {
        return "themes/gavias_colin/templates/addon/skins.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  116 => 27,  112 => 26,  108 => 25,  104 => 24,  100 => 23,  96 => 22,  92 => 21,  88 => 20,  84 => 19,  80 => 18,  76 => 17,  72 => 16,  68 => 15,  64 => 14,  60 => 13,  50 => 5,  48 => 4,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/gavias_colin/templates/addon/skins.html.twig", "C:\\wamp64\\www\\reseauidee\\themes\\gavias_colin\\templates\\addon\\skins.html.twig");
    }
}
