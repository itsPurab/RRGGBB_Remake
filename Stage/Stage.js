/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("grid", "./Stage/costumes/grid.png", { x: 480, y: 360 }),
      new Costume("menu", "./Stage/costumes/menu.svg", {
        x: 240.63531353135312,
        y: 181.5882838283828
      }),
      new Costume("end", "./Stage/costumes/end.svg", { x: 240, y: 180.5 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.i = 2;
    this.vars.gameFrame = 383;
    this.vars.i2 = 0;
    this.vars.fps = 29;
    this.vars.playerSelected = 1;
    this.vars.downArrowTimer = 0;
    this.vars.lastPlayerSelected = 2;
    this.vars.i4 = 48;
    this.vars.i5 = 1;
    this.vars.i6 = 10;
    this.vars.portalX = -40;
    this.vars.portalY = -120;
    this.vars.initX = -61;
    this.vars.initY = -130;
    this.vars.i7 = 1;
    this.vars.i8 = 1;
    this.vars.level = 25;
    this.vars.transitionVal = 0;
    this.vars.i9 = 19;
    this.vars.i10 = 2;
    this.vars.i11 = 555;
    this.vars.keyColor = 3;
    this.vars.i12 = 0;
    this.vars.i13 = 0;
    this.vars.collision2 = 0;
    this.vars.invisColor = 2;
    this.vars.brit = 0;
    this.vars.i14 = 2;
    this.vars.j = 3;
    this.vars.backFade = 100;
    this.vars.j2 = 6;
    this.vars.menu = 0;
    this.vars.J3 = 3;
    this.vars.J4 = 3;
    this.vars.J5 = 21;
    this.vars.levelsUnlocked = 25;
    this.vars.J6 = 8;
    this.vars.playerWalkFrame = [45.25, 45.25, 45.25];
    this.vars.playerStandFrame = [0, 0, 0];
    this.vars.playerDirection = [1, 1, 1];
    this.vars.playerSx = [0, 0, 0];
    this.vars.playerSy = [0, 0, 0];
    this.vars.playerX = [-10, -10, -10];
    this.vars.playerY = [10, 10, 10];
    this.vars.collision = [0, 0, 0];
    this.vars.platformType = [
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ];
    this.vars.platformX = [
      -241,
      -221,
      -181,
      -161,
      -121,
      -101,
      -61,
      -41,
      -1,
      19,
      59,
      79,
      119,
      139,
      179,
      199,
      -241,
      -221,
      -181,
      -161,
      -121,
      -101,
      -61,
      -41,
      -1,
      19,
      59,
      79,
      119,
      139,
      179,
      199,
      -241,
      -221,
      -181,
      -161,
      -121,
      -101,
      -61,
      -41,
      -1,
      19,
      59,
      79,
      119,
      139,
      179,
      199,
      -245,
      -245,
      -245,
      219
    ];
    this.vars.platformY = [
      60,
      60,
      60,
      60,
      60,
      60,
      60,
      60,
      60,
      60,
      60,
      60,
      60,
      60,
      60,
      60,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -20,
      -100,
      -100,
      -100,
      -100,
      -100,
      -100,
      -100,
      -100,
      -100,
      -100,
      -100,
      -100,
      -100,
      -100,
      -100,
      -100,
      -140,
      182,
      145,
      145
    ];
    this.vars.platformLength = [
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      45,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      45,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      40,
      20,
      45,
      500,
      500,
      24,
      24
    ];
    this.vars.platformHeight = [
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      42,
      42,
      290,
      290
    ];
    this.vars.platformColor = [
      1,
      0,
      4,
      0,
      1,
      0,
      4,
      0,
      1,
      0,
      4,
      0,
      1,
      0,
      4,
      0,
      2,
      0,
      5,
      0,
      2,
      0,
      5,
      0,
      2,
      0,
      5,
      0,
      2,
      0,
      5,
      0,
      3,
      0,
      6,
      0,
      3,
      0,
      6,
      0,
      3,
      0,
      6,
      0,
      3,
      0,
      6,
      0,
      0,
      0,
      0,
      0
    ];
    this.vars.inAir = [0, 0, 0];
    this.vars.inGamePlayers = [1, 2, 3];
    this.vars.jumpKey = [0, 0, 0];
    this.vars.playerGhost = [0, 0, 0];
    this.vars.p1StartX = [
      -9,
      -2,
      -6,
      -8.1,
      0,
      -9,
      -10,
      -9,
      0.9,
      -4,
      -4,
      -9,
      -3,
      -9,
      -5.1,
      -8.1,
      -4,
      -7,
      -8,
      -8,
      10.9,
      -4,
      -0.6,
      -6
    ];
    this.vars.p1StartY = [
      1,
      -7,
      -7,
      -7,
      -7,
      -7,
      -5,
      -1,
      0,
      -7,
      -7,
      -7,
      0,
      0,
      -4.5,
      -7,
      -7,
      -7,
      -7,
      -7,
      -1,
      -1,
      -7,
      -7
    ];
    this.vars.p2StartX = [
      -9,
      0,
      2,
      -7,
      -9,
      -9,
      10,
      10,
      2,
      0,
      0.5,
      0,
      4,
      10,
      6,
      -7,
      1,
      -5,
      0.5,
      6,
      6,
      -10,
      0.5,
      5
    ];
    this.vars.p2StartY = [
      -3,
      -7,
      -7,
      -7,
      -7,
      3,
      -1,
      -1,
      0,
      -7,
      -7,
      -7,
      0,
      0,
      3,
      -7,
      -7,
      -7,
      -4,
      -7,
      -7,
      -7,
      -7,
      -7
    ];
    this.vars.p3StartX = [
      -9,
      2,
      -2,
      -5.9,
      10,
      -2,
      1,
      5,
      3.1,
      4,
      4,
      10,
      0,
      0.95,
      7,
      -5.9,
      5,
      -3,
      9,
      -3,
      -2,
      -8,
      1.6,
      8
    ];
    this.vars.p3StartY = [
      -7,
      -7,
      -4,
      -7,
      -7,
      -7,
      -7,
      -7,
      0,
      -7,
      -7,
      -7,
      -7,
      -7,
      -5,
      -7,
      -7,
      -7,
      -7,
      -7,
      -7,
      -1,
      -7,
      -7
    ];
    this.vars.unlocked = [0, 0, 0, 0, 0, 0, 0];
    this.vars.lockedPlatformFrame = [0, 0, 0, 0, 0, 0, 0];
    this.vars.collideBoxData = [];
    this.vars.notInvis = [0, 0, 0, 0, 0, 0, 0];
    this.vars.trampBounce = [];
    this.vars.trampX = [];
    this.vars.trampY = [];
    this.vars.trampColor = [];
    this.vars.trampPos = [];
    this.vars.increasingTramp = [];
    this.vars.lastCollided = [0, 0, 0];
    this.vars.playerYDir = [1, 1, 1];
    this.vars.arrowGhost = [0, 100, 100];
    this.vars.endingX = [-415, -295, -175, -55, 65, 185];
    this.vars.soundOptions = [
      "Jump",
      "Beep",
      "Portal",
      "Unlock",
      "Pressure",
      "Step",
      "Whoosh",
      "Bounce"
    ];
    this.vars.soundTimes = [6, 7, 17, 5, 10, 0, 10, 12];
    this.vars.soundTimer = [0, 0, 0, 0, 0, 0, 0, 0];
    this.vars.soundsPlayed = [];
    this.vars.soundsPitch = [45, 5, -5, 0, 10, 0, -5, -20];
  }
}
