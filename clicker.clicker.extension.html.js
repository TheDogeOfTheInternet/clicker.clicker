window.onload = function () {
	document.body.innerHTML = "\<html\>\<head\>\<span id='includes'\>\<script src='JSlib.js'\>\</script\>\<script src='https://rawgit.com/met4000/JSlib/master/JSlib.js'\>\</script\>\<script src='CryptoJS.js'\>\</script\>\<script src='clicker.clicker.jsfiles.js'\>\</script\>\</span\>\<script type='text/javascript'\>document.title = 'Clicks: ' + Math.floor(clickAmount);cpsUpdate();\</script\>\</head\>\<body onload='loadCookie()' id='body'\>\<img src=cursor1.png style='cursor: pointer' onclick='mouseClick(); tick();'\>\<br\>\<span\>\<span id='amountOf'\>0\</span\> clicks!\</span\>\<br\>\<br\>\<span\>\<span id='clickerAmountDisplay'\>0\</span\> clickers: +\<span id='clickerTotalCpsDisplay'\>0\</span\> cps\</span\>\<br\>\<span\>\<span id='cursorAmountDisplay'\>0\</span\> cursors: +\<span id='cursorClickTotalIncreaseDisplay'\>0\</span\> cpc\</span\>\<br\>\<br\>\<div id='genUpgrade1Display' style='visibility: hidden'\>\<button onclick='genUpgrade(1);'\>\<span id='genUpgrade1DisplayText'\>\<span id='genUpgrade1CostDisplay'\>1000000\</span\>c - Generic Upgrade - \<i\>Plastic Tier\</i\> 1 - Autoclick (Your click is disabled and \<b\>autoclicks 2\</b\> times a second)\</span\>\</button\>\</div\>\<div id='genUpgrade2Display' style='visibility: hidden'\>\<button onclick='genUpgrade(2);'\>\<span id='genUpgrade2DisplayText'\>\<span id='genUpgrade2CostDisplay'\>2000000\</span\>c - Generic Upgrade - \<i\>Wood Tier\</i\> 2 - Wooden Mouse (Autoclick clicks \<b\>twice\</b\> a second)\</span\>\</button\>\</div\>\<br\>\<div id='clickerUpgrade1Display' style='visibility: hidden'\>\<button onclick='clickerUpgrade(1);'\>\<span id='clickerUpgrade1DisplayText'\>\<span id='clickerUpgrade1CostDisplay'\>250c\</span\> - Clicker Upgrade - Fatter Fingers (Clickers get \<b\>+1 cpc\</b\>)\</span\>\</button\>\</div\>\<div id='clickerUpgrade2Display' style='visibility: hidden'\>\<button onclick='clickerUpgrade(2);'\>\<span id='clickerUpgrade2DisplayText'\>\<span id='clickerUpgrade2CostDisplay'\>1000\</span\>c - Clicker Upgrade - Mythical Pointers (Clickers get \<b\>+0.1 cpc\</b\> for each clicker owned)\</span\>\</button\>\</div\>\<div id='clickerUpgrade3Display' style='visibility: hidden'\>\<button onclick='clickerUpgrade(3);'\>\<span id='clickerUpgrade3DisplayText'\>\<span id='clickerUpgrade3CostDisplay'\>2500\</span\>c - Clicker Upgrade - \<i\>Plastic Tier\</i\> 1 - Sheet Plastic Clickers (Clickers are \<b\>twice\</b\> as efficient)\</span\>\</button\>\</div\>\<br\>\<div id='cursorUpgrade1Display' style='visibility: hidden'\>\<button onclick='cursorUpgrade(1);'\>\<span id='cursorUpgrade1DisplayText'\>\<span id='cursorUpgrade1CostDisplay'\>2500c\</span\> - Cursor Upgrade - Fatter Fingers (Cursors get \<b\>+1 cpc\</b\>)\</span\>\</button\>\</div\>\<div id='cursorUpgrade2Display' style='visibility: hidden'\>\<button onclick='cursorUpgrade(2);'\>\<span id='cursorUpgrade2DisplayText'\>\<span id='cursorUpgrade2CostDisplay'\>10000\</span\>c - Cursor Upgrade - Mythical Pointer (Cursors get \<b\>+0.1 cpc\</b\> for each cursor owned)\</span\>\</button\>\</div\>\<div id='cursorUpgrade3Display' style='visibility: hidden'\>\<button onclick='cursorUpgrade(3);'\>\<span id='cursorUpgrade3DisplayText'\>\<span id='cursorUpgrade3CostDisplay'\>50000\</span\>c - Cursor Upgrade - \<i\>Plastic Tier\</i\> 1 - Sheet Plastic Cursors (Cursors are \<b\>twice\</b\> as efficient)\</span\>\</button\>\</div\>\<br\>\<br\>\<div\>\<button onclick='increaseClicker();'\>Buy a clicker for \<span id='clickerCostDisplay'\>50\</span\>c (\<b\>+\<span id='clickerCpsDisplay'\>1\</span\> cps\</b\>)\</button\>\</div\>\<div\>\<button onclick='increaseCursor();' id='buyCursor'\>Buy a cursor for \<span id='cursorCostDisplay'\>400\</span\>c (\<b\>+\<span id='cursorIncreaseDisplay'\>1\</span\> cpc\</b\>)\</button\>\</div\>\<br\>\<br\>\<br\>\<div id='achievementFClick' style='visibility: hidden'\>Achievement: First Click\</div\>\<div id='achievement10Click' style='visibility: hidden'\>Achievement: 10 Clicks\</div\>\<div id='achievement100Click' style='visibility: hidden'\>Achievement: 100 Clicks\</div\>\<div id='achievementTClick' style='visibility: hidden'\>Achievement: Thousand Clicks\</div\>\<div id='achievement10000Click' style='visibility: hidden'\>Achievement: 10000 Clicks\</div\>\<div id='achievement100000Click' style='visibility: hidden'\>Achievement: 100000 Clicks\</div\>\<div id='achievementMClick' style='visibility: hidden'\>Achievement: Million Clicks\</div\>\<div id='achievement10000000Click' style='visibility: hidden'\>Achievement: 10000000 Clicks\</div\>\<div id='achievement100000000Click' style='visibility: hidden'\>Achievement: 100000000 Clicks\</div\>\<div id='achievementBClick' style='visibility: hidden'\>Achievement: Billion Clicks\</div\>\<div id='achievementClickMoreTotalDisplay' style='visibility: hidden'\>Achievment: Hacked Clicking\</div\>\<div id='achievementRuinedTheFun' style='visibility: hidden'\>Achievment: Ruined The Fun\</div\>\<div id='saveEntire'\>\<br\>\<br\>\<br\>\<br\>\<center\>\<textarea id='saveDisplayArea' style='width: 1300px; height: 128px' draggable='false'\>\</textarea\>\<br\>\<button onclick='saveDisplayWrite(saveCodeGet());'\>Get copyable save code\</button\>\<button onclick='saveCodeRun(saveLoadRead());'\>Load copyable save code\</button\>\<br\>\<input type='submit' value='Save' onclick='setSaveCookie()'\>\<span\> Autosave every: \</span\>\<input type='checkbox' onchange='autosaveToggle(10000);uncheckAs(1)' id='as1'\>10 sec \<input type='checkbox' onchange='autosaveToggle(30000);uncheckAs(2)' id='as2'\>30 sec \<input type='checkbox' onchange='autosaveToggle(60000);uncheckAs(3)' checked id='as3'\>1 min \<input type='checkbox' onchange='autosaveToggle(120000);uncheckAs(4)' id='as4'\>2 min \<input type='checkbox' onchange='autosaveToggle(300000);uncheckAs(5)' id='as5'\>5 min\<!-- \<input type='checkbox' onchange='autosaveToggle(document.getElementById('as6i').value * 1000);uncheckAs(6)' id='as6'\> \<input type='number' onchange='if(document.getElementById('as6').checked){autosaveToggle(this.value * 1000);}' id='as6i'\> sec !--\>\<br\>\<button id='saveDelete' onclick='removeSaveCookie('save_cookie')'\>Reset Save\</button\>\</center\>\<br\>\<br\>\<div\>\<span id='autoclickToggleDisplay' style='visibility: hidden'\>\<span id='autoclickToggleDisplayText'\>Autoclick on: \</span\>\<input type='checkbox' onchange='autoclickToggle();'\>\</span\>\</div\>\</div\>\</body\>\</html\>";
};
