ig.module(
  'plugins.scrollscreen'
)
.requires(
  'impact.game'
)
.defines(function() {
  ig.Game.inject({

    scrollScreen: function() {
      if( this.player.pos.x > (ig.game.collisionMap.width*ig.game.collisionMap.tilesize-ig.system.width/2) ) {
        this.screen.x = ig.game.collisionMap.width*ig.game.collisionMap.tilesize-ig.system.width;
      } else if ( this.player.pos.x < ig.system.width/2 ) {
        this.screen.x = 0;
      } else {
        this.screen.x = this.player.pos.x - ig.system.width/2;
      }
      if( this.player.pos.y > (ig.game.collisionMap.height*ig.game.collisionMap.tilesize-ig.system.height/2) ) {
        this.screen.y = ig.game.collisionMap.height*ig.game.collisionMap.tilesize-ig.system.height;
      } else if ( this.player.pos.y < ig.system.height/2 ) {
        this.screen.y = 0;
      } else {
        this.screen.y = this.player.pos.y - ig.system.height/2;
      }
    }

  });
});
