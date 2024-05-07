let tilenum = 0;
let total = 5;
let rownum = 0;



let data = '{ "games" : [' +
	'{ "title":"The Second Reality Project" , "img":"The Second Reality Project", "site":"https://www.smwcentral.net/?p=section&a=details&id=4983"}' +
	',{ "title":"The Second Reality Project 2" , "img":"The Second Reality Project 2", "site":"https://www.smwcentral.net/?p=section&a=details&id=4974"}' +
	',{ "title":"A Super Mario Thing" , "img":"A Super Mario Thing", "site":"https://www.smwcentral.net/?p=section&a=details&id=17125"}' +
	',{ "title":"An SMWC Production" , "img":"An SMWC Production", "site":"https://www.smwcentral.net/?p=section&a=details&id=5420"}' +
	',{ "title":"Nonsense" , "img":"Nonsense", "site":"https://www.smwcentral.net/?p=section&a=details&id=35707"}' +
	']}'

const games = JSON.parse(data);












$(function() {
	for (let i = 0; i < games.games.length; i++){
		let current = games.games[i]
		let interior = '<a href="' + current.site + '"><img src="img/' + current.img + '.png" class="img-fluid rounded img-thumbnail" alt="' + current.title + '"></img></a>'
		if (i % 3 == 0){
			$("#content").append('<tr id="row-' + rownum + '">')
		}
		$("#row-" + rownum).append('<td><p>' + interior + '</p></td>')
		if (i % 3 == 2){
			$("#row-" + rownum).append('</tr>')
			rownum++
		}
		console.log(i%3)
	}
	
	$("#content").append('</row>')
	
	$("p").addClass("text-center")
});