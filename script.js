let tilenum = 0;
let rownum = 0;
let colnum = 4;















let data = '{ "games" : [' +
	'{ "title":"The Second Reality Project" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=4983"}' +
	',{ "title":"The Second Reality Project 2" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=4974"}' +
	',{ "title":"Super Mario Infinity" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=19547"}' +
	',{ "title":"Super Challenge World" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=9914"}' +
	',{ "title":"Mario X World Deluxe" , "type":"smw", "site":"https://www.angelfire.com/pokemon2/pika22/hack/oldwork/oldwork.htm"}' +
	',{ "title":"Mario X World SER" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=10183"}' +
	',{ "title":"Mario X World BSB" , "type":"smw", "site":"https://www.angelfire.com/pokemon2/pika22/hack/oldwork/oldwork.htm"}' +
	',{ "title":"Super Mario World Plus" , "type":"smw", "site":"https://web.archive.org/web/20040607153933/http://www.angelfire.com/games4/smwplus/1.html"}' +
	',{ "title":"Super Mario World Master Courses" , "type":"smw", "site":"http://smwdb.me/db/6/6f5548898168cea1d9752fc5b9b271a94fcac2fa/"}' +
	',{ "title":"VIP and Wall Mix" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=9706"}' +
	',{ "title":"Super Mario Infinity 2" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=20859"}' +
	',{ "title":"The Reture" , "type":"smw", "site":"http://smwdb.me/db/f/f0e8e4b7137bbe969e9d04971af63765b3c357f2/"}' +
	',{ "title":"The Ninji Saga" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=9710"}' +
	',{ "title":"Rob-ombs Quest" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=9735"}' +
	',{ "title":"VIP and Wall Mix 2" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=9821"}' +
	',{ "title":"VIP and Wall Mix 3" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=10027"}' +
	',{ "title":"Super Mario World Plus 2" , "type":"smw", "site":"http://smwdb.me/db/3/32142643d567983bb3db3beaadae79b0ab2820a9/"}' +
	',{ "title":"Chaos Complexx" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=9680"}' +
	',{ "title":"Luigis Adventure" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=34399"}' +
	',{ "title":"VIP and Wall Mix 4" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=9799"}' +
	',{ "title":"Kameks Revenge" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=12812"}' +
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
		if (i % colnum == 0){
			$("#content").append('<tr id="row-' + rownum + '">')
		}
		$("#row-" + rownum).append('<td>' + interior + '</td>')
		if (i % colnum == colnum-1){
			$("#row-" + rownum).append('</tr>')
			rownum++
		}
		console.log(i%colnum)
	}
	
	$("#content").append('</row>')
	
	$("p").addClass("text-center")
});