Rhea = {
    /* Here we've just got some global level vars that persist regardless of State swaps */
    score: 0,

    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    music: null,

    /* Your game can check Rhea.orientated in internal loops to know if it should pause or not */
    orientated: false

};

Rhea.Boot = function (game) {
};

Rhea.Boot.prototype = {

    preload: function () {

        //this.load.image('preloaderBar', 'images/preload.png');

    },

    create: function () {
        // this.stage.smoothed = false;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.input.maxPointers = 1;

        //this.stage.disableVisibilityChange = true;
		this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

        this.state.start('Preloader');

    },

    gameResized: function (width, height) {
    },

    enterIncorrectOrientation: function () {

        Rhea.orientated = false;

        document.getElementById('orientation').style.display = 'block';

    },

    leaveIncorrectOrientation: function () {

        Rhea.orientated = true;

        document.getElementById('orientation').style.display = 'none';

    }

};
