class Test1 extends Phaser.Scene {
    constructor(){
        super({key:"Test1"})
    }

    preload(){
        this.load.image('Title','assets/Title.jpg');


    }


    create(){

        this.image = this.add.image(400,300,'Title');
    }

}