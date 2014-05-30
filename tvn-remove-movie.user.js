// ==UserScript==
// @name           TVN Remove Movie
// @description    Removes movies from tvn24.pl website.   
// @namespace      http://github.com/krzysztofr/tvn-remove-movie  
// @author         Krzysztof Rakowski
// @license        MIT
// @homepage       http://github.com/krzysztofr/tvn-remove-movie
// @version        1.3
// @match          http://tvn24.pl/*
// @match          http://www.tvn24.pl/*
// @match          http://tvnwarszawa.tvn24.pl/*
// @match          http://tvn24bis.pl/*
// @match          http://www.tvn24bis.pl/*
// @match          http://tvnmeteo.tvn24.pl/*
// ==/UserScript==

// tvn24.pl
e = document.getElementsByClassName('articleMainPhoto');
if (typeof e[0] != 'undefined'){
	e[0].parentNode.removeChild(e[0]);
}

e = document.getElementsByClassName('videoVideo');
if (typeof e[0] != 'undefined'){
	e[0].parentNode.removeChild(e[0]);
}

e = document.getElementsByClassName('fl');
if (typeof e[0] != 'undefined'){
	e[0].parentNode.removeChild(e[0]);
}

console.log('tvn-remove-movie userscript ran');