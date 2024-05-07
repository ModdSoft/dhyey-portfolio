import * as adobeXd from "../images/svg/skills/adobe-xd.svg";
import adobeaudition from "../images/svg/skills/adobeaudition.svg";
import afterEffects from "../images/svg/skills/after-effects.svg";
import angular from "../images/svg/skills/angular.svg";
import aws from "../images/svg/skills/aws.svg";
import azure from "../images/svg/skills/azure.svg";
import blender from "../images/svg/skills/blender.svg";
import bootstrap from "../images/svg/skills/bootstrap.svg";
import bulma from "../images/svg/skills/bulma.svg";
import c from "../images/svg/skills/c.svg";
import canva from "../images/svg/skills/canva.svg";
import capacitorjs from "../images/svg/skills/capacitorjs.svg";
import coffeescript from "../images/svg/skills/coffeescript.svg";
import cplusplus from "../images/svg/skills/cplusplus.svg";
import csharp from "../images/svg/skills/csharp.svg";
import css from "../images/svg/skills/css.svg";
import dart from "../images/svg/skills/dart.svg";
import deno from "../images/svg/skills/deno.svg";
import django from "../images/svg/skills/django.svg";
import docker from "../images/svg/skills/docker.svg";
import fastify from "../images/svg/skills/fastify.svg";
import figma from "../images/svg/skills/figma.svg";
import firebase from "../images/svg/skills/firebase.svg";
import flutter from "../images/svg/skills/flutter.svg";
import gcp from "../images/svg/skills/gcp.svg";
import gimp from "../images/svg/skills/gimp.svg";
import git from "../images/svg/skills/git.svg";
import go from "../images/svg/skills/go.svg";
import graphql from "../images/svg/skills/graphql.svg";
import haxe from "../images/svg/skills/haxe.svg";
import html from "../images/svg/skills/html.svg";
import illustrator from "../images/svg/skills/illustrator.svg";
import ionic from "../images/svg/skills/ionic.svg";
import java from "../images/svg/skills/java.svg";
import javascript from "../images/svg/skills/javascript.svg";
import julia from "../images/svg/skills/julia.svg";
import kotlin from "../images/svg/skills/kotlin.svg";
import lightroom from "../images/svg/skills/lightroom.svg";
import markdown from "../images/svg/skills/markdown.svg";
import materialui from "../images/svg/skills/materialui.svg";
import matlab from "../images/svg/skills/matlab.svg";
import memsql from "../images/svg/skills/memsql.svg";
import microsoftoffice from "../images/svg/skills/microsoftoffice.svg";
import mongoDB from "../images/svg/skills/mongoDB.svg";
import mysql from "../images/svg/skills/mysql.svg";
import nextJS from "../images/svg/skills/nextJS.svg";
import nginx from "../images/svg/skills/nginx.svg";
import numpy from "../images/svg/skills/numpy.svg";
import nuxtJS from "../images/svg/skills/nuxtJS.svg";
import opencv from "../images/svg/skills/opencv.svg";
import photoshop from "../images/svg/skills/photoshop.svg";
import php from "../images/svg/skills/php.svg";
import picsart from "../images/svg/skills/picsart.svg";
import postgresql from "../images/svg/skills/postgresql.svg";
import premierepro from "../images/svg/skills/premierepro.svg";
import python from "../images/svg/skills/python.svg";
import pytorch from "../images/svg/skills/pytorch.svg";
import react from "../images/svg/skills/react.svg";
import ruby from "../images/svg/skills/ruby.svg";
import selenium from "../images/svg/skills/selenium.svg";
import sketch from "../images/svg/skills/sketch.svg";
import strapi from "../images/svg/skills/strapi.svg";
import svelte from "../images/svg/skills/svelte.svg";
import swift from "../images/svg/skills/swift.svg";
import tailwind from "../images/svg/skills/tailwind.svg";
import tensorflow from "../images/svg/skills/tensorflow.svg";
import typescript from "../images/svg/skills/typescript.svg";
import unity from "../images/svg/skills/unity.svg";
import vitejs from "../images/svg/skills/vitejs.svg";
import vue from "../images/svg/skills/vue.svg";
import vuetifyjs from "../images/svg/skills/vuetifyjs.svg";
import webix from "../images/svg/skills/webix.svg";
import wolframalpha from "../images/svg/skills/wolframalpha.svg";
import wordpress from "../images/svg/skills/wordpress.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    default:
      break;
  }
};
