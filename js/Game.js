class Game {
    constructor() {

    }



    start() {

        background(endbg);
        form = new Form();
        form.display();

        bg = createSprite(100, 100, width, height);
        bg.addImage("BG1", bgIm);
        bg.scale = 2.5;
        knight = createSprite(200, 100, 5, 5);
        knight.addAnimation("KnightIdle", knightIdle);
        knight.addAnimation("knightRun", knightRun);

        knight.scale = 0.2;


        knight.shapeColor = "red";
        floor = createSprite(750, height + 351, width, height);
        floor.shapeColor = "lightgreen";

        knight.collide(floor);

        bgmusic.loop();

    }




    play() {
        background("white")
    


        knight.velocityY = knight.velocityY + 12
        knight.collide(floor)

        if (bg.x < 0) {
            bg.x = width / 2
        }

        if (keyDown("space")) {
            knight.velocityY = -42
            kills = kills + 1
        }




        if (keyDown("S")) {
            bg.velocityX = -9
            knight.changeAnimation("KnightRun", knightRun)
            form.hide()
            keyS = true

        }

        if (keyS === true) {

            Monster1()

        }

        if (kills >= 6) {
            level = 2
            Monster2()
        }
        if (kills >= 12) {
            level = 3
            Monster3()
        }
        if (kills >= 24) {
            level = 4
            Monster4()
        }
        if (kills >= 48) {
            level = 5
            Monster5()
        }


        for (var i = 0; i < monsters.length; i++) {
            if (monsters.get(i).isTouching(knight)) {
                monsters.get(i).destroy()
                lives = lives - 1
                hurt.play()
                hit.play()
            }
        }



        function Monster1() {
            if (frameCount % 160 === 0) {
                var hyena = createSprite(width, height - 78, 30, 30);
                hyena.velocityX = -23;
                hyena.addAnimation("HyenaRun", hyenaIm);
                hyena.scale = 1.5
                hyena.lifetime = 150
                monsters.add(hyena)
            }

        }



        function Monster2() {
            if (frameCount % Math.round(random(180, 240)) === 0) {
                var vulture = createSprite(width, Math.round(random(250, 600)), 30, 30);
                vulture.velocityX = -28;
                vulture.addAnimation("VultureRun", vultureIm);
                vulture.scale = 1.2
                vulture.lifetime = 150
                monsters.add(vulture)
            }

        }
        function Monster3() {
            if (frameCount % Math.round(random(190, 310)) === 0) {
                var deceased = createSprite(width, height - 78, 30, 30);
                deceased.velocityX = -15;
                deceased.addAnimation("DeceasedRun", deceasedIm);
                deceased.scale = 1.5
                deceased.lifetime = 170
                monsters.add(deceased)
            }

        }
        function Monster4() {
            if (frameCount % Math.round(random(190, 310)) === 0) {
                var scorpio = createSprite(width, height - 65, 30, 30);
                scorpio.velocityX = -15;
                scorpio.addAnimation("ScorpioRun", scorpioIm);
                scorpio.scale = 1.5
                scorpio.lifetime = 170
                monsters.add(scorpio)
            }

        }
        function Monster5() {
            if (frameCount % Math.round(random(190, 310)) === 0) {
                var mummy = createSprite(width, height - 78, 30, 30);
                mummy.velocityX = -17;
                mummy.addAnimation("MummyRun", mummyIm);
                mummy.scale = 1.5
                mummy.lifetime = 170
                monsters.add(mummy)
            }

        }

    




        drawSprites();
        textSize(20)
        fill("white")
        if (lives >= 1) { text(form.name, knight.x - 50, knight.y - 41) }

        textSize(30)
        fill("red")
        stroke(25)
        text("Lives: " + lives, 100, 70)
        text("Kills: " + kills, 1200, 70)
        text("Level: " + level, 730, 120)








        if (lives < 1) {
            console.log("GAME OVER");
            end();
        }



    }
    end() {

        gameState = "END";
        monsters.destroyEach();
        bg.velocityX = 0;
        knight.destroy();

        background(endbg);

        fill("brown");
        stroke(100);
        textSize(30);
        text("Press 'R' to retry", 670, 600);
        text("Oh No.. ", 730, 120);
        textSize(130);
        text("GAME OVER!", 375, 350);

        if (keyDown("R")) {
            gameState = "PLAY";
            kills = 0;
            level = 1;
            lives = 5;

            background(bg);
        }

    }


}


