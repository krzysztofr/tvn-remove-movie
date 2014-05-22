// ==UserScript==
// @name           TVN Remove Movie
// @description    Removes movies from tvn24.pl website.   
// @namespace      http://github.com/krzysztofr/tvn-remove-movie  
// @author         Krzysztof Rakowski
// @license        MIT
// @homepage       http://github.com/krzysztofr/tvn-remove-movie
// @version        1.0
// @match          http://tvn24.pl/*
// @match          http://www.tvn24.pl/*
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js
// ==/UserScript==


e = document.getElementsByClassName('articleMainPhoto')
e[0].parentNode.removeChild(e[0])
console.log('tvn-remove-movie userscript ran');