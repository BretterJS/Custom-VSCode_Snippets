// Custom Javascript Snippets for VSCode

{

	"Console Log": {
		"prefix": "clog",
		"body": ["console.log($1);",
		"$2"
		],
		"description": "console.log()"
	},

	"Named Function": {

		"prefix": "fun",
		"body": [
			"function ${1:name} ($2) {",
			" $3",
			"};"
		],
		"description": "namedFunction()"
	},

	"Anonymous Function": {

		"prefix": "fun",
		"body": [
			"function($1) {",
			" $2",
			"};"
		],
		"description": "anonymousFunction()"
	},

	"Arrow Function": {
    "prefix": "fun",
    "body": [
			"const ${1:functionName} = ($2) => {",
				 "  $3",
			 "};"
		],
    "description": "Arrow Function"
	},

	"Query Selector": {
		"prefix": "query",
		"body": "document.querySelector('$1');",
		"description": "querySelector()"
	},

	"Query Selector All": {
		"prefix": "querya",
		"body": "document.querySelectorAll('$1');",
		"description": "querySelectorAll()"
	},

	"Document By ID" : {
		"prefix": "docid",
		"body": "document.getElementById('$1');",
		"description": "getElementById()"
	},

	"Document By Class": {
		"prefix": "docclass",
		"body": "document.getElementByClassName('$1');",
		"description": "getElementsByClassName()"
	},

	"Document By Tag Name": {
		"prefix": "doctag",
		"body": "document.getElementsByTagName('$1')",
		"description": "getElementsByTagName()"


	},

	"Require": {
		"prefix": "req",
		"body": "const $1  = require('$2');",
		"description": "Require"
	},

	"Array Manipulation": {
		"prefix": "arr",
		"body": "${1:arrayName}.${2|push,pop,shift,unshift,slice,splice,sort,concat,indexOf,includes,find,findIndex|}('$3')",
		"description": "Array Manipulation"
	},

	"Array Methods": {
    "prefix": "arrm",
    "body": [
      "${1|forEach,map,filter,reduce,includes,some|}((${2:item}) => {",
      "  $3",
      "})"
    ],
    "description": "Array Methods"
	},

}