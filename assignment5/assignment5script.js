
var text = '{"movie" : "Matrix","director" : "the Wachowski Brothers","released" : 1999,"cast" : [' +
		'{"firstname" : "Keanu","lastname" : "Reeves","character" : "Neo"},' +
		'{"firstname" : "Laurence","lastname" : "Fishburne","character" : "Morpheus"},' +
		'{"firstname" : "Carrie-Anne","lastname" : "Moss","character" : "Trinity"},' +
		'{"firstname" : "Hugo","lastname" : "Weaving","character" : "Agent Smith"}}';
obj = JSON.parse(text);
document.getElementById("one").innerHTML = obj.movie;
