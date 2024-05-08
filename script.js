let tilenum = 0;
let total = 5;
let rownum = 0;



let data = '{ "games" : [' +
	'{ "title":"The Second Reality Project" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=4983"}' +
	',{ "title":"The Second Reality Project 2" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=4974"}' +
	',{ "title":"Super Mario Infinity" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=19547"}' +
	',{ "title":"Commander Keen" , "type":"steam", "site":"https://store.steampowered.com/app/9180/Commander_Keen/"}' +
	',{ "title":"Super Marisa World" , "type":"indie", "site":"https://en.touhouwiki.net/wiki/Super_Marisa_World"}' +
	',{ "title":"EVW" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=10001"}' +
	',{ "title":"A Super Mario Thing" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=17125"}' +
	',{ "title":"Kirbys Dream Land 3" , "type":"emu", "site":"https://www.igdb.com/games/kirby-s-dream-land-3"}' +
	',{ "title":"VVVVVV" , "type":"steam", "site":"https://store.steampowered.com/app/70300/VVVVVV/"}' +
	',{ "title":"An SMWC Production" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=5420"}' +
	',{ "title":"Nonsense" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=35707"}' +
	']}'

const games = JSON.parse(data);












$(function() {
	for (let i = 0; i < games.games.length; i++){
		let current = games.games[i]
		let baseimage = '<img src="img/' + current.title + '.png" class="img-fluid rounded img-thumbnail ' + current.type +'-type" alt="' + current.title + '"></img>'
		let interior = '<a href="' + current.site + '"><div>' + baseimage + '</div></a>'
		if (i % 3 == 0){
			$("#content").append('<tr id="row-' + rownum + '">')
		}
		$("#row-" + rownum).append('<td>' + interior + '</td>')
		if (i % 3 == 2){
			$("#row-" + rownum).append('</tr>')
			rownum++
		}
		console.log(i%3)
	}
	
	$("#content").append('</row>')
	
	$("p").addClass("text-center")
});