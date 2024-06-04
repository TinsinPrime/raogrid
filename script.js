let tilenum = 0;















let data = '{ "games" : [' +
	'{ "title":"The Second Reality Project" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=4983"}' +
	',{ "title":"The Second Reality Project 2" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=4974"}' +
	',{ "title":"Super Mario Infinity" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=19547"}' +
	',{ "title":"Super Challenge World" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=9914"}' +
	',{ "title":"Mario X World Deluxe" , "type":"smw", "site":"https://www.angelfire.com/pokemon2/pika22/hack/oldwork/oldwork.htm"}' +
	',{ "title":"Mario X World SER" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=10183"}' +
	',{ "title":"Mario X World BSB" , "type":"smw", "site":"https://www.angelfire.com/pokemon2/pika22/hack/oldwork/oldwork.htm"}' +
	',{ "title":"Super Mario World Plus" , "type":"smw", "site":"https://web.archive.org/web/20040607153933/http://www.angelfire.com/games4/smwplus/1.html"}' +
	',{ "title":"Super Mario World Master Courses" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=9029"}' +
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
	',{ "title":"Commander Keen" , "type":"steam", "site":"https://www.gog.com/en/game/commander_keen_complete_pack"}' +
	',{ "title":"The Second Reality Project Reloaded" , "type":"smw", "site":"https://www.smwcentral.net/?a=details&id=16696&p=section"}' +
	',{ "title":"Misadventures of Plumma Man" , "type":"smw", "site":"http://smwdb.me/db/8/89acdbc536eccd3c5f2c1c80feeb9df816ba2844/"}' +
	',{ "title":"Super Black Mario" , "type":"smw", "site":"https://web.archive.org/web/20110828065916/http://www7.atpages.jp/smw/view.cgi/1232432088"}' +
	',{ "title":"Super Black Mario 2" , "type":"smw", "site":"https://web.archive.org/web/20110816162952/http://www7.atpages.jp/smw/view.cgi/1233053286/"}' +
	',{ "title":"Super Marisa World" , "type":"indie", "site":"https://en.touhouwiki.net/wiki/Super_Marisa_World"}' +
	',{ "title":"Super Black Mario 3" , "type":"smw", "site":"https://web.archive.org/web/20110828071155/http://www7.atpages.jp/smw/view.cgi/1238155862"}' +
	',{ "title":"PPP" , "type":"smw", "site":"https://web.archive.org/web/20110826040816/http://www7.atpages.jp/smw/view.cgi/1218383563"}' +
	',{ "title":"The Mario" , "type":"smw", "site":"https://web.archive.org/web/20120418172355/http://1st.geocities.jp/puriny_ping/zip/MARIO.zip"}' +
	',{ "title":"Marisa and Alice" , "type":"indie", "site":"https://en.touhouwiki.net/wiki/Marisa_and_Alice"}' +
	',{ "title":"World of Illusion" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=4980"}' +
	',{ "title":"Super Mario World Returns" , "type":"smw", "site":"https://web.archive.org/web/20130125035929/http://www.h7.dion.ne.jp/~tkmt/smwr/SMWR.htm"}' +
	',{ "title":"An Untitled Story" , "type":"indie", "site":"https://www.maddymakesgames.com/"}' + 
	',{ "title":"Super Mario World Returns 2" , "type":"smw", "site":"https://web.archive.org/web/20130125003202/http://www.h7.dion.ne.jp/~tkmt/smwr2/SMWR2.htm"}' +
	',{ "title":"What the Hell" , "type":"smw", "site":"https://www.smwcentral.net/?p=viewthread&t=16069&page=81&pid=455179#p455179"}' +
	',{ "title":"Jump on Mushrooms" , "type":"indie", "site":"https://hempuli.com/mush/"}' + 
	',{ "title":"SYNSO" , "type":"indie", "site":"https://www.moddb.com/games/squid-yes-not-so-octopus/downloads"}' + 
	',{ "title":"The Game" , "type":"indie", "site":"https://www.newgrounds.com/portal/view/467574"}' +
	',{ "title":"Spelunky Classic" , "type":"indie", "site":"https://spelunkyworld.com/original.html"}' + 
	',{ "title":"GROW" , "type":"indie", "site":"https://www.eyezmaze.com/sp/2002/02/growPlanet.html"}' + 
	',{ "title":"MUGEN" , "type":"indie", "site":"https://www.elecbyte.com/mugendocs-11b1/mugen.html"}' +
	',{ "title":"Super Mario World Returns EX" , "type":"smw", "site":"https://web.archive.org/web/20081017113708/http://www.h7.dion.ne.jp/~tkmt/SMWREX/SMWREX.htm"}' + 
	',{ "title":"Blob Adventure 2" , "type":"indie", "site":"https://www.newgrounds.com/portal/view/632203"}' + 
	',{ "title":"Super Metroid Legacy" , "type":"smw", "site":"http://metroidconstruction.com/hack.php?id=25"}' + 
	',{ "title":"Super Mario Omega" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=5252"}' + 
	',{ "title":"Chocolate Level Design Contest 09" , "type":"smw", "site":"https://www.smwcentral.net/?p=viewthread&t=22769"}' + 
	',{ "title":"Super Mario World YEAH" , "type":"smw", "site":"https://www.smwcentral.net/?p=viewthread&t=46715&page=1&pid=742621#p742621"}' + 
	',{ "title":"Mushroom Kingdom Meltdown" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=30027"}' + 
	',{ "title":"Runman" , "type":"steam", "site":"https://store.steampowered.com/app/2466160/RunMan_Race_Around_the_World/"}' + 
	',{ "title":"Mushroom Kingdom Meltdown 2" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=31223"}' + 
	',{ "title":"Nezumi Man" , "type":"indie", "site":"https://indieoverlook.com/freeware/nezumi-man/"}' + 
	',{ "title":"Super Mario World 2 Plus" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=4569"}' + 
	',{ "title":"Robot Dinosaurs That Shoot Beams When They Roar" , "type":"indie", "site":"https://www.kongregate.com/games/i_smell/robot-dinosaurs-that-shoot-beams-when-they-roar"}' + 
	',{ "title":"Upgrade Complete" , "type":"indie", "site":"https://www.kongregate.com/games/armorgames/upgrade-complete"}' + 
	',{ "title":"The Company of Myself" , "type":"indie", "site":"https://www.kongregate.com/games/2darray/the-company-of-myself"}' + 
	',{ "title":"Multitask" , "type":"indie", "site":"https://www.kongregate.com/games/IcyLime/multitask"}' + 
	',{ "title":"Cat Planet" , "type":"indie", "site":"https://sylvie.website/catplanet/"}' + 
	',{ "title":"Scarlet Devil Mario" , "type":"smw", "site":"https://web.archive.org/web/20160810044926/http://www.geocities.jp/pyua51113/mario/kouma.html"}' + 
	',{ "title":"The Legend of Randorland 3" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=10002"}' + //STOPPED HERE
	',{ "title":"EVW" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=10001"}' +
	',{ "title":"A Super Mario Thing" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=17125"}' +
	',{ "title":"Kirbys Dream Land 3" , "type":"emu", "site":"https://www.igdb.com/games/kirby-s-dream-land-3"}' +
	',{ "title":"VVVVVV" , "type":"steam", "site":"https://thelettervsixtim.es/"}' +
	',{ "title":"An SMWC Production" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=5420"}' +
	',{ "title":"The Legend of Zelda" , "type":"emu", "site":"https://www.igdb.com/games/the-legend-of-zelda"}' +
	',{ "title":"NieR Automata" , "type":"steam", "site":"https://www.platinumgames.com/games/nier-automata?age-verified=98bb03574a"}' +
	',{ "title":"Nonsense" , "type":"smw", "site":"https://www.smwcentral.net/?p=section&a=details&id=35707"}' +
	']}'











const games = JSON.parse(data);

$(function() {
	for (let i = 0; i < games.games.length; i++){
		let current = games.games[i]
		let baseimage = '<img src="img/' + current.title + '.png" class="img-fluid rounded img-thumbnail ' + current.type +'-type" alt="' + current.title + '"></img>'
		let interior = '<a href="' + current.site + '">' + baseimage + '</a>'
		
		$('#content').append('<div class="col game-tile" id="game-' + (tilenum+1) + '">' + interior + '</div>')
		tilenum++
	}
	
	$("p").addClass("text-center")
});