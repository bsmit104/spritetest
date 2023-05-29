class Test extends Phaser.Scene {
    constructor() {
        super('test');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.spritesheet('jump', 'docjump.png', {
            frameWidth: 32,
            frameHeight: 32,

        });
        this.load.spritesheet('run', 'docrun.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('runfast', 'docdash.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('kick', 'kick3.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('kick2', 'kick2.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('dash', 'dashin.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('idle', 'doc.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('jump2', 'docjump2.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('djump', 'docjump3.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        // this.load.spritesheet('longdash', 'dash.png', {
        //     frameWidth: 32,
        //     frameHeight: 32,
        // });
    }
    create() {
        this.cameras.main.setBackgroundColor(0xADD8E6);

        ///////////////idle/////////////
        this.imageObject = this.add.sprite(
            530,//x
            100,//y
            'idle',//imagename
        );
        this.imageObject.setDepth(1);
        this.imageObject.setScale(3); //resize
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('idle', {
                start: 0,
                end: 1
            }),
            frameRate: 7,
            repeat: -1
        });
        this.imageObject.anims.play('idle', true);
        /////////////////////////////////

        ///////////////jump/////////////
        this.imageObject = this.add.sprite(
            100,//x
            100,//y
            'jump',//imagename
        );
        this.imageObject.setDepth(1);
        this.imageObject.setScale(3); //resize
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('jump', {
                start: 0,
                end: 8
            }),
            frameRate: 10,
            repeat: -1
        });
        this.imageObject.anims.play('jump', true);
        /////////////////////////////////

        ///////////////jump no knee bend/////////////
        this.imageObject = this.add.sprite(
            620,//x
            100,//y
            'jump2',//imagename
        );
        this.imageObject.setDepth(1);
        this.imageObject.setScale(3); //resize
        this.anims.create({
            key: 'jump2',
            frames: this.anims.generateFrameNumbers('jump2', {
                start: 0,
                end: 4
            }),
            frameRate: 10,
            repeat: -1
        });
        this.imageObject.anims.play('jump2', true);
        /////////////////////////////////

        ///////////////doublejump/////////////
        this.imageObject = this.add.sprite(
            720,//x
            100,//y
            'djump',//imagename
        );
        this.imageObject.setDepth(1);
        this.imageObject.setScale(3); //resize
        this.anims.create({
            key: 'djump',
            frames: this.anims.generateFrameNumbers('djump', {
                start: 0,
                end: 4
            }),
            frameRate: 10,
            repeat: -1
        });
        this.imageObject.anims.play('djump', true);
        /////////////////////////////////

        // //////////////////complete dash//////////////////
        // this.imageObject = this.add.sprite(
        //     500,//x
        //     400,//y
        //     'longdash',//imagename
        // );
        // this.imageObject.setDepth(1);
        // this.imageObject.setScale(3); //resize
        // this.anims.create({
        //     key: 'longdash',
        //     frames: this.anims.generateFrameNumbers('longdash', {
        //         start: 0,
        //         end: 9
        //     }),
        //     frameRate: 10,
        //     repeat: -1
        // });
        // this.imageObject.anims.play('longdash', true);
        // //////////////////////////////////////


        //////////////////run//////////////////
        this.imageObject = this.add.sprite(
            400,//x
            400,//y
            'run',//imagename
        );
        this.imageObject.setDepth(1);
        this.imageObject.setScale(3); //resize
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('run', {
                start: 0,
                end: 9
            }),
            frameRate: 10,
            repeat: -1
        });
        this.imageObject.anims.play('run', true);
        //////////////////////////////////////

        //////////////////runfast//////////////////
        this.imageObject = this.add.sprite(
            400,//x
            100,//y
            'runfast',//imagename
        );
        this.imageObject.setDepth(1);
        this.imageObject.setScale(3); //resize
        this.anims.create({
            key: 'runfast',
            frames: this.anims.generateFrameNumbers('runfast', {
                start: 0,
                end: 9
            }),
            frameRate: 17,
            repeat: -1
        });
        this.imageObject.anims.play('runfast', true);
        //////////////////////////////////////

        //////////////////dash//////////////////
        this.imageObject = this.add.sprite(
            250,//x
            100,//y
            'dash',//imagename
        );
        this.imageObject.setDepth(1);
        this.imageObject.setScale(3); //resize
        this.anims.create({
            key: 'dash',
            frames: this.anims.generateFrameNumbers('dash', {
                start: 0,
                end: 9
            }),
            frameRate: 15,
            repeat: -1
        });
        this.imageObject.anims.play('dash', true);
        //////////////////////////////////////

        /////////////////kick fast/////////////////
        this.imageObject = this.add.sprite(
            100,//x
            400,//y
            'kick',//imagename
        );
        this.imageObject.setDepth(1);
        this.imageObject.setScale(3); //resize
        this.anims.create({
            key: 'kick',
            frames: this.anims.generateFrameNumbers('kick', {
                start: 0,
                end: 12
            }),
            frameRate: 10,
            repeat: -1
        });
        this.imageObject.anims.play('kick', true);
        /////////////////////////////////////////////

        /////////////////kick slow/////////////////
        this.imageObject = this.add.sprite(
            250,//x
            400,//y
            'kick2',//imagename
        );
        this.imageObject.setDepth(1);
        this.imageObject.setScale(3); //resize
        this.anims.create({
            key: 'kick2',
            frames: this.anims.generateFrameNumbers('kick2', {
                start: 0,
                end: 12
            }),
            frameRate: 15,
            repeat: -1
        });
        this.imageObject.anims.play('kick2', true);
        /////////////////////////////////////////////
    }
}
