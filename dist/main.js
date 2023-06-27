/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

App.showCenterLabel("Hello World");
let zepLogo = App.loadSpritesheet("zep_logo.png");
App.onUpdate.Add(() => {});
App.onJoinPlayer.Add(function (player) {
  player.tag = {
    widget: null
  };
  player.tag.widget.sendMessage({
    a: "this is message? "
  });
});
App.onInit.Add(() => {
  App.addOnLocationTouched(`bs`, function (p) {
    p.showWidget("test.html", "top", 300, 300);
    p.tag.widget.sendMessage({
      text: "블루맨"
    });
  });
});
Map.putObject(0, 0, zepLogo, {
  overlap: true
});
App.onDestroy.Add(function () {
  Map.clearAllObjects();
});