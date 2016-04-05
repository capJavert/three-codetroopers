Rhea.Game = function (game) {
  this.mouse;
  this.platforms;
  this.players;
  this.moveDirection = -200;
  this.limit = 4;
  this.pause = 0;
  this.text1;
  this.text2;
  this.text3;
  this.text4;
  this.text5;
  this.text6;
};

Rhea.Game.prototype = {

  create: function () {
    limit = 4;
    pause = 0;

    this.add.sprite(0, 0, 'sky');
    this.add.tileSprite(0, 0, 6500, 704, 'sky');
    this.world.setBounds(0, 0, 6300, 768);

    this.world.create(1366, 125, 'board1');
    this.world.create(2800, 125, 'board2');
    this.world.create(4100, 125, 'board3');
    this.world.create(5400, 125, 'board4');

    text1 = this.world.create(250, 100, 'text1');

    platforms = this.add.group();
    platforms.enableBody = true;

    var ground = platforms.create(0, this.world.height - 64, 'ground');
    ground.scale.setTo(6500, 704);
    ground.body.immovable = true;

    players = [];

    for(i=1;i<=4;i++) {
      players[i] = new Rhea.Player(this.game, 160*i, 100, i);
      this.game.add.existing(players[i]);
    }

    cursors = this.input.keyboard.createCursorKeys();

    this.camera.width = 1024;
    this.camera.height = 768;
    this.camera.follow(players[limit]);
  },

  update: function () {
    if(this.camera.x+1024>6240) {
      this.camera.reset();
      this.camera.x = 6240-1024;
    } else
      if(limit<4 && limit>0 && players[limit].x>players[limit+1].x && this.camera.target && this.camera.target.key!=players[limit].key)
         this.camera.follow(players[limit]);

    if(players[4].x>=1940 && (typeof text2 == 'undefined')) {
      text2 = this.world.create(players[4].x, 100, 'text2');
      limit--;
      pause = 0;
      players[4].body.velocity.x = 0;
      players[4].body.velocity.y = 50;
    }

    if(players[3].x>=3440 && (typeof text3 == 'undefined')) {
      text3 = this.world.create(players[3].x, 100, 'text3');
      limit--;
      pause = 0;
      players[3].body.velocity.x = 0;
      players[3].body.velocity.y = 50;
    }

    if(players[2].x>=4740 && (typeof text4 == 'undefined')) {
      text4 = this.world.create(players[2].x, 100, 'text4');
      limit--;
      pause = 0;
      players[2].body.velocity.x = 0;
      players[2].body.velocity.y = 50;
    }

    if(players[1].x>=6040 && (typeof text5 == 'undefined')) {
      text5 = this.world.create(players[1].x, 100, 'text5');
      limit--;
      pause = 0;
      players[1].body.velocity.x = 0;
      players[1].body.velocity.y = 50;
      var cameraX = this.camera.x;
      this.camera.reset();
      this.camera.x = cameraX;
    }

    if(players[4].x>=1366 && (typeof text2 == 'undefined')) {
      pause = 4;
    }

    if(players[3].x>=2800 && (typeof text3 == 'undefined')) {
      pause = 3;
    }

    if(players[2].x>=4100 && (typeof text4 == 'undefined')) {
      pause = 2;
    }

    if(players[1].x>=5400 && (typeof text5 == 'undefined')) {
      pause = 1;
    }

    for(i=1;i<=4;i++) {
      this.physics.arcade.collide(players[i], platforms);
    }

    for(i=1;i<=limit;i++) {
      players[i].body.velocity.x = 0;
    }

    if (cursors.left.isDown)
    {
      if(players[1].x<20)
        return;

      if(!limit && this.camera.x>0)
        this.camera.x-=25;

      for(i=1;i<=limit;i++) {
        if(i<pause)
          continue;

        switch(i) {
          case 1: var modifier = 2.5;
          break;
          case 2: var modifier = 1.5;
          break;
          case 3: var modifier = 1;
          break;
          case 4: var modifier = 2;
          break;
        }

        if(!players[i].body.touching.down) {
          players[i].body.velocity.x = -230;
            continue;
        }

        if(players[i].body.velocity.y<-40) {
          players[i].body.velocity.y = 100 * modifier;
            continue;
        }

        players[i].body.velocity.y = -50 * modifier;
        players[i].body.velocity.x = -230;
      }
    }
    else if (cursors.right.isDown || this.game.input.activePointer.isDown)
    {
      if(!limit && this.camera.x<6040)
        this.camera.x+=25;

      for(i=1;i<=limit;i++) {
        if(i<pause)
          continue;

        switch(i) {
          case 1: var modifier = 2.5;
          break;
          case 2: var modifier = 1.5;
          break;
          case 3: var modifier = 1;
          break;
          case 4: var modifier = 2;
          break;
        }

        if(!players[i].body.touching.down) {
          players[i].body.velocity.x = 230;
            continue;
        }

        if(players[i].body.velocity.y<-40) {
          players[i].body.velocity.y = 100*modifier;
            continue;
        }

        players[i].body.velocity.y = -50*modifier;
        players[i].body.velocity.x = 230;
      }
    }
    else
    {
      for(i=1;i<=limit;i++) {
        players[i].animations.stop();
      }
    }
  },

  gameOver: function () {
  },

  quitGame: function () {
  }

};
