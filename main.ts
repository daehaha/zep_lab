/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

import "zep-script";

ScriptApp.showCenterLabel("Hello World");

let zepLogo = ScriptApp.loadSpritesheet("zep_logo.png");
ScriptApp.onUpdate.Add(() => {
});


ScriptApp.onJoinPlayer.Add(function(player) {
	player.tag = {
		widget: null,
	};
	player.tag.widget.onMessage.Add(function(player, data) {

	});
});
ScriptApp.onInit.Add(() => {
	ScriptApp.addOnLocationTouched(`bs`, function(p) {

		p.showWidget("test.html", "top", 300, 300);

		p.tag.widget.sendMessage({
			text: "블루맨",
		});
	});
});

ScriptMap.putObject(0, 0, zepLogo, { overlap: true });

ScriptApp.onDestroy.Add(function() {
	ScriptMap.clearAllObjects();
});
