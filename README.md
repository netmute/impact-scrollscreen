# Scrollscreen plugin for ImpactJS

This is a simple plugin that keeps the screen centered on the player, but doesn't scroll over the level boundaries.

Inspired by a post on the Impact forums by MyShuitings.

## Usage

The plugin expects `ig.game.player` to contain the player entity (this is generally a good idea anyway).

    EntityPlayer = ig.Entity.extend({
    
      init: function( x, y, settings ) {
        this.parent( x, y, settings );
        ig.game.player = this;
      }
    
    });

Then just call `scrollScreen()` in the games `update()` function.

    ig.module(
      'game.main'
    )
    .requires(
      'impact.game',
      'plugins.scrollscreen'
    )
    .defines(function(){
      MyGame = ig.Game.extend({

        update: function() {
          this.scrollScreen();
        }
        
      });
    });
