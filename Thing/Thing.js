/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Thing extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Thing/costumes/costume2.svg", {
        x: 360.5,
        y: 271.5
      })
    ];

    this.sounds = [
      new Sound("Jump", "./Thing/sounds/Jump.wav"),
      new Sound("Beep", "./Thing/sounds/Beep.wav"),
      new Sound("Portal", "./Thing/sounds/Portal.wav"),
      new Sound("Unlock", "./Thing/sounds/Unlock.wav"),
      new Sound("Pressure", "./Thing/sounds/Pressure.wav"),
      new Sound("Step", "./Thing/sounds/Step.wav"),
      new Sound("Whoosh", "./Thing/sounds/Whoosh.wav"),
      new Sound("Bounce", "./Thing/sounds/Bounce.wav"),
      new Sound(
        "new-beginning-SBA-300418064",
        "./Thing/sounds/new-beginning-SBA-300418064.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "1win" }, this.whenIReceive1win),
      new Trigger(
        Trigger.BROADCAST,
        { name: "continue1" },
        this.whenIReceiveContinue1
      ),
      new Trigger(Trigger.BROADCAST, { name: "2win" }, this.whenIReceive2win),
      new Trigger(
        Trigger.BROADCAST,
        { name: "continue2" },
        this.whenIReceiveContinue2
      ),
      new Trigger(Trigger.BROADCAST, { name: "3win" }, this.whenIReceive3win),
      new Trigger(
        Trigger.BROADCAST,
        { name: "continue3" },
        this.whenIReceiveContinue3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "transition" },
        this.whenIReceiveTransition
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "l" }, this.whenKeyLPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lock animation" },
        this.whenIReceiveLockAnimation
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "b" }, this.whenKeyBPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "reset_transition" },
        this.whenIReceiveResetTransition
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *drawXYSize(number, x, y, dilation, bold) {
    this.penSize = this.toNumber(bold);
    this.stage.vars.i14 = 0;
    for (let i = 0; i < this.toString(number).length; i++) {
      if (
        this.toNumber(
          this.letterOf(number, this.toNumber(this.stage.vars.i14))
        ) === 0
      ) {
        this.warp(this.drawOval)(
          this.toNumber(x) +
            12 * this.toNumber(dilation) +
            this.toNumber(this.stage.vars.i14) * (32 * this.toNumber(dilation)),
          this.toNumber(y) + -18 * this.toNumber(dilation),
          12 * this.toNumber(dilation),
          18 * this.toNumber(dilation),
          0,
          360,
          0
        );
      } else {
        if (
          this.toNumber(
            this.letterOf(number, this.toNumber(this.stage.vars.i14))
          ) === 1
        ) {
          this.warp(this.drawLine)(
            this.toNumber(x) +
              14 * this.toNumber(dilation) +
              this.toNumber(this.stage.vars.i14) *
                (32 * this.toNumber(dilation)),
            this.toNumber(y) + 0 * this.toNumber(dilation),
            this.toNumber(x) +
              14 * this.toNumber(dilation) +
              this.toNumber(this.stage.vars.i14) *
                (32 * this.toNumber(dilation)),
            this.toNumber(y) + -36 * this.toNumber(dilation),
            bold
          );
          this.warp(this.drawLine)(
            this.toNumber(x) +
              14 * this.toNumber(dilation) +
              this.toNumber(this.stage.vars.i14) *
                (32 * this.toNumber(dilation)),
            this.toNumber(y) + 0 * this.toNumber(dilation),
            this.toNumber(x) +
              6 * this.toNumber(dilation) +
              this.toNumber(this.stage.vars.i14) *
                (32 * this.toNumber(dilation)),
            this.toNumber(y) + -5 * this.toNumber(dilation),
            bold
          );
          this.warp(this.drawLine)(
            this.toNumber(x) +
              6 * this.toNumber(dilation) +
              this.toNumber(this.stage.vars.i14) *
                (32 * this.toNumber(dilation)),
            this.toNumber(y) + -36 * this.toNumber(dilation),
            this.toNumber(x) +
              22 * this.toNumber(dilation) +
              this.toNumber(this.stage.vars.i14) *
                (32 * this.toNumber(dilation)),
            this.toNumber(y) + -36 * this.toNumber(dilation),
            bold
          );
        } else {
          if (
            this.toNumber(
              this.letterOf(number, this.toNumber(this.stage.vars.i14))
            ) === 2
          ) {
            this.warp(this.drawOval)(
              this.toNumber(x) +
                12 * this.toNumber(dilation) +
                this.toNumber(this.stage.vars.i14) *
                  (32 * this.toNumber(dilation)),
              this.toNumber(y) + -10 * this.toNumber(dilation),
              10 * this.toNumber(dilation),
              10 * this.toNumber(dilation),
              330,
              540,
              0
            );
            this.warp(this.drawLine)(
              this.toNumber(x) +
                (Math.cos(this.degToRad(330)) * 10 + 12) *
                  this.toNumber(dilation) +
                this.toNumber(this.stage.vars.i14) *
                  (32 * this.toNumber(dilation)),
              this.toNumber(y) + -15 * this.toNumber(dilation),
              this.toNumber(x) +
                2 * this.toNumber(dilation) +
                this.toNumber(this.stage.vars.i14) *
                  (32 * this.toNumber(dilation)),
              this.toNumber(y) + -35 * this.toNumber(dilation),
              bold
            );
            this.warp(this.drawLine)(
              this.toNumber(x) +
                22 * this.toNumber(dilation) +
                this.toNumber(this.stage.vars.i14) *
                  (32 * this.toNumber(dilation)),
              this.toNumber(y) + -35 * this.toNumber(dilation),
              this.toNumber(x) +
                2 * this.toNumber(dilation) +
                this.toNumber(this.stage.vars.i14) *
                  (32 * this.toNumber(dilation)),
              this.toNumber(y) + -35 * this.toNumber(dilation),
              bold
            );
          } else {
            if (
              this.toNumber(
                this.letterOf(number, this.toNumber(this.stage.vars.i14))
              ) === 3
            ) {
              this.warp(this.drawLine)(
                this.toNumber(x) +
                  9 * this.toNumber(dilation) +
                  this.toNumber(this.stage.vars.i14) *
                    (32 * this.toNumber(dilation)),
                this.toNumber(y) + -18 * this.toNumber(dilation),
                this.toNumber(x) +
                  12 * this.toNumber(dilation) +
                  this.toNumber(this.stage.vars.i14) *
                    (32 * this.toNumber(dilation)),
                this.toNumber(y) + -18 * this.toNumber(dilation),
                bold
              );
              this.warp(this.drawOval)(
                this.toNumber(x) +
                  12 * this.toNumber(dilation) +
                  this.toNumber(this.stage.vars.i14) *
                    (32 * this.toNumber(dilation)),
                this.toNumber(y) + -27 * this.toNumber(dilation),
                12 * this.toNumber(dilation),
                9 * this.toNumber(dilation),
                220,
                450,
                0
              );
              this.warp(this.drawOval)(
                this.toNumber(x) +
                  12 * this.toNumber(dilation) +
                  this.toNumber(this.stage.vars.i14) *
                    (32 * this.toNumber(dilation)),
                this.toNumber(y) + -9 * this.toNumber(dilation),
                12 * this.toNumber(dilation),
                9 * this.toNumber(dilation),
                270,
                495,
                0
              );
            } else {
              if (
                this.toNumber(
                  this.letterOf(number, this.toNumber(this.stage.vars.i14))
                ) === 4
              ) {
                this.warp(this.drawLine)(
                  this.toNumber(x) +
                    18 * this.toNumber(dilation) +
                    this.toNumber(this.stage.vars.i14) *
                      (32 * this.toNumber(dilation)),
                  this.toNumber(y) + 0 * this.toNumber(dilation),
                  this.toNumber(x) +
                    2 * this.toNumber(dilation) +
                    this.toNumber(this.stage.vars.i14) *
                      (32 * this.toNumber(dilation)),
                  this.toNumber(y) + -22 * this.toNumber(dilation),
                  bold
                );
                this.warp(this.drawLine)(
                  this.toNumber(x) +
                    22 * this.toNumber(dilation) +
                    this.toNumber(this.stage.vars.i14) *
                      (32 * this.toNumber(dilation)),
                  this.toNumber(y) + -22 * this.toNumber(dilation),
                  this.toNumber(x) +
                    2 * this.toNumber(dilation) +
                    this.toNumber(this.stage.vars.i14) *
                      (32 * this.toNumber(dilation)),
                  this.toNumber(y) + -22 * this.toNumber(dilation),
                  bold
                );
                this.warp(this.drawLine)(
                  this.toNumber(x) +
                    18 * this.toNumber(dilation) +
                    this.toNumber(this.stage.vars.i14) *
                      (32 * this.toNumber(dilation)),
                  this.toNumber(y) + 0 * this.toNumber(dilation),
                  this.toNumber(x) +
                    18 * this.toNumber(dilation) +
                    this.toNumber(this.stage.vars.i14) *
                      (32 * this.toNumber(dilation)),
                  this.toNumber(y) + -36 * this.toNumber(dilation),
                  bold
                );
              } else {
                if (
                  this.toNumber(
                    this.letterOf(number, this.toNumber(this.stage.vars.i14))
                  ) === 5
                ) {
                  this.warp(this.drawLine)(
                    this.toNumber(x) +
                      3 * this.toNumber(dilation) +
                      this.toNumber(this.stage.vars.i14) *
                        (32 * this.toNumber(dilation)),
                    this.toNumber(y) + 0 * this.toNumber(dilation),
                    this.toNumber(x) +
                      21 * this.toNumber(dilation) +
                      this.toNumber(this.stage.vars.i14) *
                        (32 * this.toNumber(dilation)),
                    this.toNumber(y) + 0 * this.toNumber(dilation),
                    bold
                  );
                  this.warp(this.drawLine)(
                    this.toNumber(x) +
                      3 * this.toNumber(dilation) +
                      this.toNumber(this.stage.vars.i14) *
                        (32 * this.toNumber(dilation)),
                    this.toNumber(y) + 0 * this.toNumber(dilation),
                    this.toNumber(x) +
                      3 * this.toNumber(dilation) +
                      this.toNumber(this.stage.vars.i14) *
                        (32 * this.toNumber(dilation)),
                    this.toNumber(y) + -17 * this.toNumber(dilation),
                    bold
                  );
                  this.warp(this.drawOval)(
                    this.toNumber(x) +
                      11 * this.toNumber(dilation) +
                      this.toNumber(this.stage.vars.i14) *
                        (32 * this.toNumber(dilation)),
                    this.toNumber(y) + -24 * this.toNumber(dilation),
                    11 * this.toNumber(dilation),
                    11 * this.toNumber(dilation),
                    220,
                    495,
                    0
                  );
                } else {
                  if (
                    this.toNumber(
                      this.letterOf(number, this.toNumber(this.stage.vars.i14))
                    ) === 6
                  ) {
                    this.warp(this.drawOval)(
                      this.toNumber(x) +
                        12 * this.toNumber(dilation) +
                        this.toNumber(this.stage.vars.i14) *
                          (32 * this.toNumber(dilation)),
                      this.toNumber(y) + -18 * this.toNumber(dilation),
                      12 * this.toNumber(dilation),
                      18 * this.toNumber(dilation),
                      60,
                      330,
                      0
                    );
                    this.warp(this.drawOval)(
                      this.toNumber(x) +
                        12 * this.toNumber(dilation) +
                        this.toNumber(this.stage.vars.i14) *
                          (32 * this.toNumber(dilation)),
                      this.toNumber(y) + -26 * this.toNumber(dilation),
                      10 * this.toNumber(dilation),
                      9 * this.toNumber(dilation),
                      0,
                      165,
                      0
                    );
                  } else {
                    if (
                      this.toNumber(
                        this.letterOf(
                          number,
                          this.toNumber(this.stage.vars.i14)
                        )
                      ) === 7
                    ) {
                      this.warp(this.drawLine)(
                        this.toNumber(x) +
                          3 * this.toNumber(dilation) +
                          this.toNumber(this.stage.vars.i14) *
                            (32 * this.toNumber(dilation)),
                        this.toNumber(y) + 0 * this.toNumber(dilation),
                        this.toNumber(x) +
                          21 * this.toNumber(dilation) +
                          this.toNumber(this.stage.vars.i14) *
                            (32 * this.toNumber(dilation)),
                        this.toNumber(y) + 0 * this.toNumber(dilation),
                        bold
                      );
                      this.warp(this.drawLine)(
                        this.toNumber(x) +
                          21 * this.toNumber(dilation) +
                          this.toNumber(this.stage.vars.i14) *
                            (32 * this.toNumber(dilation)),
                        this.toNumber(y) + 0 * this.toNumber(dilation),
                        this.toNumber(x) +
                          11 * this.toNumber(dilation) +
                          this.toNumber(this.stage.vars.i14) *
                            (32 * this.toNumber(dilation)),
                        this.toNumber(y) + -34 * this.toNumber(dilation),
                        bold
                      );
                    } else {
                      if (
                        this.toNumber(
                          this.letterOf(
                            number,
                            this.toNumber(this.stage.vars.i14)
                          )
                        ) === 8
                      ) {
                        this.warp(this.drawOval)(
                          this.toNumber(x) +
                            12 * this.toNumber(dilation) +
                            this.toNumber(this.stage.vars.i14) *
                              (32 * this.toNumber(dilation)),
                          this.toNumber(y) + -9 * this.toNumber(dilation),
                          10 * this.toNumber(dilation),
                          8 * this.toNumber(dilation),
                          0,
                          360,
                          0
                        );
                        this.warp(this.drawOval)(
                          this.toNumber(x) +
                            12 * this.toNumber(dilation) +
                            this.toNumber(this.stage.vars.i14) *
                              (32 * this.toNumber(dilation)),
                          this.toNumber(y) + -26 * this.toNumber(dilation),
                          11 * this.toNumber(dilation),
                          9 * this.toNumber(dilation),
                          0,
                          360,
                          0
                        );
                      } else {
                        if (
                          this.toNumber(
                            this.letterOf(
                              number,
                              this.toNumber(this.stage.vars.i14)
                            )
                          ) === 9
                        ) {
                          this.warp(this.drawOval)(
                            this.toNumber(x) +
                              12 * this.toNumber(dilation) +
                              this.toNumber(this.stage.vars.i14) *
                                (32 * this.toNumber(dilation)),
                            this.toNumber(y) + -18 * this.toNumber(dilation),
                            12 * this.toNumber(dilation),
                            18 * this.toNumber(dilation),
                            225,
                            510,
                            0
                          );
                          this.warp(this.drawOval)(
                            this.toNumber(x) +
                              12 * this.toNumber(dilation) +
                              this.toNumber(this.stage.vars.i14) *
                                (32 * this.toNumber(dilation)),
                            this.toNumber(y) + -12 * this.toNumber(dilation),
                            10 * this.toNumber(dilation),
                            9 * this.toNumber(dilation),
                            180,
                            360,
                            0
                          );
                        } else {
                          null;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      this.stage.vars.i14++;
    }
  }

  *drawPortal(x, y) {
    this.stage.vars.portalX = this.toNumber(x) * 20;
    this.stage.vars.portalY = this.toNumber(y) * 20;
    this.stage.vars.platformType.push(9);
    this.stage.vars.platformX.push(this.toNumber(x) * 20 - 15);
    this.stage.vars.platformY.push(this.toNumber(y) * 20 - -15);
    this.stage.vars.platformLength.push(30);
    this.stage.vars.platformHeight.push(30);
    this.stage.vars.platformColor.push(0);
    if (this.compare(this.toNumber(this.stage.vars.gameFrame) % 16, 2) < 0) {
      this.stage.vars.i5 = 44;
    } else {
      if (this.compare(this.toNumber(this.stage.vars.gameFrame) % 16, 4) < 0) {
        this.stage.vars.i5 = 43;
      } else {
        if (
          this.compare(this.toNumber(this.stage.vars.gameFrame) % 16, 6) < 0
        ) {
          this.stage.vars.i5 = 42;
        } else {
          if (
            this.compare(this.toNumber(this.stage.vars.gameFrame) % 16, 8) < 0
          ) {
            this.stage.vars.i5 = 41;
          } else {
            if (
              this.compare(this.toNumber(this.stage.vars.gameFrame) % 16, 10) <
              0
            ) {
              this.stage.vars.i5 = 40;
            } else {
              if (
                this.compare(
                  this.toNumber(this.stage.vars.gameFrame) % 16,
                  12
                ) < 0
              ) {
                this.stage.vars.i5 = 39;
              } else {
                if (
                  this.compare(
                    this.toNumber(this.stage.vars.gameFrame) % 16,
                    14
                  ) < 0
                ) {
                  this.stage.vars.i5 = 38;
                } else {
                  this.stage.vars.i5 = 37;
                }
              }
            }
          }
        }
      }
    }
    this.stage.vars.i6 = 0;
    if (this.compare(this.stage.vars.i5, 40) < 0) {
      this.penColor = Color.rgb(53, 53, 53);
    } else {
      this.penColor = Color.rgb(255, 255, 255);
    }
    this.warp(this.drawCircle)(
      this.toNumber(x) * 20,
      this.toNumber(y) * 20,
      40
    );
    if (this.compare(this.stage.vars.i5, 40) < 0) {
      this.penColor = Color.rgb(255, 255, 255);
      this.warp(this.drawCircle)(
        this.toNumber(x) * 20,
        this.toNumber(y) * 20,
        this.stage.vars.i5
      );
    } else {
      null;
    }
    for (let i = 0; i < 10; i++) {
      this.stage.vars.i5 -= 4;
      this.stage.vars.i6++;
      if (this.toNumber(this.stage.vars.i6) % 2 === 1) {
        this.penColor = Color.rgb(51, 51, 51);
      } else {
        this.penColor = Color.rgb(255, 255, 255);
      }
      if (this.compare(this.stage.vars.i5, 0) > 0) {
        this.warp(this.drawCircle)(
          this.toNumber(x) * 20,
          this.toNumber(y) * 20,
          this.stage.vars.i5
        );
      }
    }
  }

  *drawRect(x, y, length, width, res) {
    this.penDown = false;
    if (this.compare(length, width) > 0) {
      this.warp(this.drawLine)(
        this.toNumber(x) +
          this.toNumber(res) +
          (this.toNumber(width) - this.toNumber(res) * 2) / 2,
        this.toNumber(y) -
          this.toNumber(res) -
          (this.toNumber(width) - this.toNumber(res) * 2) / 2,
        this.toNumber(x) +
          this.toNumber(length) -
          this.toNumber(res) -
          (this.toNumber(width) - this.toNumber(res) * 2) / 2,
        this.toNumber(y) -
          this.toNumber(res) -
          (this.toNumber(width) - this.toNumber(res) * 2) / 2,
        this.toNumber(width) - this.toNumber(res) * 2 + 2
      );
    } else {
      this.warp(this.drawLine)(
        this.toNumber(x) +
          this.toNumber(res) +
          (this.toNumber(length) - this.toNumber(res) * 2) / 2,
        this.toNumber(y) -
          this.toNumber(res) -
          (this.toNumber(length) - this.toNumber(res) * 2) / 2,
        this.toNumber(x) +
          this.toNumber(res) +
          (this.toNumber(length) - this.toNumber(res) * 2) / 2,
        this.toNumber(y) -
          this.toNumber(width) +
          this.toNumber(res) +
          (this.toNumber(length) - this.toNumber(res) * 2) / 2,
        this.toNumber(length) - this.toNumber(res) * 2 + 2
      );
    }
    this.penSize = 2;
    this.stage.vars.i = 0;
    if (this.compare(length, width) > 0) {
      for (
        let i = 0;
        i <
        Math.ceil(
          ((Math.sqrt(2) - 1) / 4) *
            (this.toNumber(width) - 2 * this.toNumber(res))
        );
        i++
      ) {
        this.penDown = false;
        this.goto(
          this.toNumber(x) +
            this.toNumber(res) +
            this.toNumber(this.stage.vars.i),
          this.toNumber(y) -
            this.toNumber(res) -
            this.toNumber(this.stage.vars.i)
        );
        this.penDown = true;
        this.goto(
          this.toNumber(x) +
            this.toNumber(length) -
            this.toNumber(res) -
            this.toNumber(this.stage.vars.i),
          this.toNumber(y) -
            this.toNumber(res) -
            this.toNumber(this.stage.vars.i)
        );
        this.goto(
          this.toNumber(x) +
            this.toNumber(length) -
            this.toNumber(res) -
            this.toNumber(this.stage.vars.i),
          this.toNumber(y) -
            this.toNumber(width) +
            (this.toNumber(res) + this.toNumber(this.stage.vars.i))
        );
        this.goto(
          this.toNumber(x) +
            this.toNumber(res) +
            this.toNumber(this.stage.vars.i),
          this.toNumber(y) -
            this.toNumber(width) +
            (this.toNumber(res) + this.toNumber(this.stage.vars.i))
        );
        this.goto(
          this.toNumber(x) +
            this.toNumber(res) +
            this.toNumber(this.stage.vars.i),
          this.toNumber(y) -
            this.toNumber(res) -
            this.toNumber(this.stage.vars.i)
        );
        this.penDown = false;
        this.stage.vars.i += 2;
      }
    } else {
      for (
        let i = 0;
        i <
        Math.ceil(
          ((Math.sqrt(2) - 1) / 4) *
            (this.toNumber(length) - 2 * this.toNumber(res))
        );
        i++
      ) {
        this.penDown = false;
        this.goto(
          this.toNumber(x) +
            this.toNumber(res) +
            this.toNumber(this.stage.vars.i),
          this.toNumber(y) -
            this.toNumber(res) -
            this.toNumber(this.stage.vars.i)
        );
        this.penDown = true;
        this.goto(
          this.toNumber(x) +
            this.toNumber(length) -
            this.toNumber(res) -
            this.toNumber(this.stage.vars.i),
          this.toNumber(y) -
            this.toNumber(res) -
            this.toNumber(this.stage.vars.i)
        );
        this.goto(
          this.toNumber(x) +
            this.toNumber(length) -
            this.toNumber(res) -
            this.toNumber(this.stage.vars.i),
          this.toNumber(y) -
            this.toNumber(width) +
            (this.toNumber(res) + this.toNumber(this.stage.vars.i))
        );
        this.goto(
          this.toNumber(x) +
            this.toNumber(res) +
            this.toNumber(this.stage.vars.i),
          this.toNumber(y) -
            this.toNumber(width) +
            (this.toNumber(res) + this.toNumber(this.stage.vars.i))
        );
        this.goto(
          this.toNumber(x) +
            this.toNumber(res) +
            this.toNumber(this.stage.vars.i),
          this.toNumber(y) -
            this.toNumber(res) -
            this.toNumber(this.stage.vars.i)
        );
        this.penDown = false;
        this.stage.vars.i += 2;
      }
    }
    this.penSize = this.toNumber(res);
    this.penDown = false;
    this.goto(
      this.toNumber(x) + Math.floor(this.toNumber(res) / 2),
      this.toNumber(y) - Math.floor(this.toNumber(res) / 2)
    );
    this.penDown = true;
    this.goto(
      this.toNumber(x) +
        this.toNumber(length) -
        Math.floor(this.toNumber(res) / 2),
      this.toNumber(y) - Math.floor(this.toNumber(res) / 2)
    );
    this.goto(
      this.toNumber(x) +
        this.toNumber(length) -
        Math.floor(this.toNumber(res) / 2),
      this.toNumber(y) -
        this.toNumber(width) +
        Math.floor(this.toNumber(res) / 2)
    );
    this.goto(
      this.toNumber(x) + Math.floor(this.toNumber(res) / 2),
      this.toNumber(y) -
        this.toNumber(width) +
        Math.floor(this.toNumber(res) / 2)
    );
    this.goto(
      this.toNumber(x) + Math.floor(this.toNumber(res) / 2),
      this.toNumber(y) - Math.floor(this.toNumber(res) / 2)
    );
    this.penDown = false;
  }

  *drawLine(x1, y1, x2, y2, size) {
    this.penDown = false;
    this.penSize = this.toNumber(size);
    this.goto(this.toNumber(x1), this.toNumber(y1));
    this.penDown = true;
    this.goto(this.toNumber(x2), this.toNumber(y2));
    this.penDown = false;
  }

  *drawPlayer(x, y, color) {
    if (this.arrayIncludes(this.stage.vars.inGamePlayers, color)) {
      if (this.toNumber(color) === 1) {
        this.penColor = Color.rgb(206, 52, 52);
      } else {
        if (this.toNumber(color) === 2) {
          this.penColor = Color.rgb(52, 206, 57);
        } else {
          this.penColor = Color.rgb(62, 52, 206);
        }
      }
      this.penColor.a =
        1 - this.itemOf(this.stage.vars.playerGhost, color - 1) / 100;
      if (
        !(this.compare(this.itemOf(this.stage.vars.inAir, color - 1), 4) < 0)
      ) {
        if (
          this.toNumber(this.itemOf(this.stage.vars.playerYDir, color - 1)) ===
          1
        ) {
          this.warp(this.drawRect)(
            this.toNumber(x) - 10,
            this.toNumber(y) + 10,
            20,
            12,
            5
          );
        } else {
          this.warp(this.drawRect)(
            this.toNumber(x) - 10,
            this.toNumber(y) + 2,
            20,
            12,
            5
          );
        }
        this.warp(this.drawLine)(
          this.toNumber(x) - 8,
          this.toNumber(y) -
            -5 *
              this.toNumber(this.itemOf(this.stage.vars.playerYDir, color - 1)),
          this.toNumber(x) - 8,
          this.toNumber(y) -
            5 *
              this.toNumber(this.itemOf(this.stage.vars.playerYDir, color - 1)),
          6
        );
        this.warp(this.drawLine)(
          x,
          this.toNumber(y) - 0,
          x,
          this.toNumber(y) -
            5 *
              this.toNumber(this.itemOf(this.stage.vars.playerYDir, color - 1)),
          6
        );
        this.warp(this.drawLine)(
          this.toNumber(x) - -8,
          this.toNumber(y) -
            -5 *
              this.toNumber(this.itemOf(this.stage.vars.playerYDir, color - 1)),
          this.toNumber(x) - -8,
          this.toNumber(y) -
            5 *
              this.toNumber(this.itemOf(this.stage.vars.playerYDir, color - 1)),
          6
        );
        if (
          this.toNumber(this.itemOf(this.stage.vars.playerYDir, color - 1)) ===
          1
        ) {
          this.warp(this.drawLine)(
            this.toNumber(x) - -8,
            this.toNumber(y) - -10,
            this.toNumber(x) - 8,
            this.toNumber(y) - -10,
            1
          );
        } else {
          this.warp(this.drawLine)(
            this.toNumber(x) - -8,
            this.toNumber(y) - 11,
            this.toNumber(x) - 8,
            this.toNumber(y) - 11,
            1
          );
        }
        if (this.toNumber(color) === 1) {
          this.penColor = Color.rgb(103, 25, 25);
        } else {
          if (this.toNumber(color) === 2) {
            this.penColor = Color.rgb(26, 103, 25);
          } else {
            this.penColor = Color.rgb(29, 24, 103);
          }
        }
        this.penColor.a =
          1 - this.itemOf(this.stage.vars.playerGhost, color - 1) / 100;
        this.warp(this.drawCircle)(
          this.toNumber(x) - 4.5,
          this.toNumber(y) +
            4 *
              this.toNumber(this.itemOf(this.stage.vars.playerYDir, color - 1)),
          6
        );
        this.warp(this.drawCircle)(
          this.toNumber(x) - -4.5,
          this.toNumber(y) +
            4 *
              this.toNumber(this.itemOf(this.stage.vars.playerYDir, color - 1)),
          6
        );
        this.stage.vars.playerStandFrame.splice(color - 1, 1, 0);
        this.stage.vars.playerWalkFrame.splice(color - 1, 1, 0);
      } else {
        if (
          this.toNumber(
            this.itemOf(this.stage.vars.playerWalkFrame, color - 1)
          ) === 0
        ) {
          if (
            Math.round(
              this.toNumber(
                this.itemOf(this.stage.vars.playerStandFrame, color - 1)
              )
            ) %
              2 ===
            0
          ) {
            if (
              this.toNumber(
                this.itemOf(this.stage.vars.playerYDir, color - 1)
              ) === 1
            ) {
              this.warp(this.drawRect)(
                this.toNumber(x) - 10,
                this.toNumber(y) + 10,
                20,
                12,
                5
              );
            } else {
              this.warp(this.drawRect)(
                this.toNumber(x) - 10,
                this.toNumber(y) + 2,
                20,
                12,
                5
              );
            }
            this.warp(this.drawLine)(
              this.toNumber(x) - 8,
              this.toNumber(y) -
                -5 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              this.toNumber(x) - 8,
              this.toNumber(y) -
                7 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
            this.warp(this.drawLine)(
              x,
              this.toNumber(y) - 0,
              x,
              this.toNumber(y) -
                7 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
            this.warp(this.drawLine)(
              this.toNumber(x) - -8,
              this.toNumber(y) -
                -5 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              this.toNumber(x) - -8,
              this.toNumber(y) -
                7 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
            if (
              this.toNumber(
                this.itemOf(this.stage.vars.playerYDir, color - 1)
              ) === 1
            ) {
              this.warp(this.drawLine)(
                this.toNumber(x) - -8,
                this.toNumber(y) - -10,
                this.toNumber(x) - 8,
                this.toNumber(y) - -10,
                1
              );
            } else {
              this.warp(this.drawLine)(
                this.toNumber(x) - -8,
                this.toNumber(y) - 11,
                this.toNumber(x) - 8,
                this.toNumber(y) - 11,
                1
              );
            }
            if (this.toNumber(color) === 1) {
              this.penColor = Color.rgb(103, 25, 25);
            } else {
              if (this.toNumber(color) === 2) {
                this.penColor = Color.rgb(26, 103, 25);
              } else {
                this.penColor = Color.rgb(29, 24, 103);
              }
            }
            this.penColor.a =
              1 - this.itemOf(this.stage.vars.playerGhost, color - 1) / 100;
            this.warp(this.drawCircle)(
              this.toNumber(x) - 4.5,
              this.toNumber(y) +
                4 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
            this.warp(this.drawCircle)(
              this.toNumber(x) - -4.5,
              this.toNumber(y) +
                4 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
          } else {
            if (
              this.toNumber(
                this.itemOf(this.stage.vars.playerYDir, color - 1)
              ) === 1
            ) {
              this.warp(this.drawRect)(
                this.toNumber(x) - 10,
                this.toNumber(y) + 8,
                20,
                12,
                5
              );
            } else {
              this.warp(this.drawRect)(
                this.toNumber(x) - 10,
                this.toNumber(y) + 4,
                20,
                12,
                5
              );
            }
            this.warp(this.drawLine)(
              this.toNumber(x) - 8,
              this.toNumber(y) -
                -3 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              this.toNumber(x) - 8,
              this.toNumber(y) -
                7 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
            this.warp(this.drawLine)(
              x,
              this.toNumber(y) - 0,
              x,
              this.toNumber(y) -
                7 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
            this.warp(this.drawLine)(
              this.toNumber(x) - -8,
              this.toNumber(y) -
                -3 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              this.toNumber(x) - -8,
              this.toNumber(y) -
                7 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
            if (
              this.toNumber(
                this.itemOf(this.stage.vars.playerYDir, color - 1)
              ) === 1
            ) {
              this.warp(this.drawLine)(
                this.toNumber(x) - -8,
                this.toNumber(y) - -8,
                this.toNumber(x) - 8,
                this.toNumber(y) - -8,
                1
              );
            } else {
              this.warp(this.drawLine)(
                this.toNumber(x) - -8,
                this.toNumber(y) - 9,
                this.toNumber(x) - 8,
                this.toNumber(y) - 9,
                1
              );
            }
            if (this.toNumber(color) === 1) {
              this.penColor = Color.rgb(103, 25, 25);
            } else {
              if (this.toNumber(color) === 2) {
                this.penColor = Color.rgb(26, 103, 25);
              } else {
                this.penColor = Color.rgb(29, 24, 103);
              }
            }
            this.penColor.a =
              1 - this.itemOf(this.stage.vars.playerGhost, color - 1) / 100;
            this.warp(this.drawCircle)(
              this.toNumber(x) - 4.5,
              this.toNumber(y) +
                2 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
            this.warp(this.drawCircle)(
              this.toNumber(x) - -4.5,
              this.toNumber(y) +
                2 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
          }
        } else {
          if (
            this.toNumber(
              this.itemOf(this.stage.vars.playerYDir, color - 1)
            ) === 1
          ) {
            this.warp(this.drawRect)(
              this.toNumber(x) - 10,
              this.toNumber(y) + 10,
              20,
              12,
              5
            );
          } else {
            this.warp(this.drawRect)(
              this.toNumber(x) - 10,
              this.toNumber(y) + 2,
              20,
              12,
              5
            );
          }
          if (
            this.compare(
              Math.round(
                this.toNumber(
                  this.itemOf(this.stage.vars.playerWalkFrame, color - 1)
                )
              ) % 3,
              2 -
                2 *
                  this.toNumber(
                    !(
                      this.compare(
                        this.itemOf(this.stage.vars.playerDirection, color - 1),
                        0
                      ) > 0
                    )
                  )
            ) === 0
          ) {
            this.warp(this.drawLine)(
              this.toNumber(x) - 8,
              this.toNumber(y) -
                -5 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              this.toNumber(x) - 8,
              this.toNumber(y) -
                3 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
          } else {
            this.warp(this.drawLine)(
              this.toNumber(x) - 8,
              this.toNumber(y) -
                -5 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              this.toNumber(x) - 8,
              this.toNumber(y) -
                7 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
          }
          if (
            Math.round(
              this.toNumber(
                this.itemOf(this.stage.vars.playerWalkFrame, color - 1)
              )
            ) %
              3 ===
            1
          ) {
            this.warp(this.drawLine)(
              x,
              this.toNumber(y) - 0,
              x,
              this.toNumber(y) -
                3 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
          } else {
            this.warp(this.drawLine)(
              x,
              this.toNumber(y) - 0,
              x,
              this.toNumber(y) -
                7 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
          }
          if (
            this.compare(
              Math.round(
                this.toNumber(
                  this.itemOf(this.stage.vars.playerWalkFrame, color - 1)
                )
              ) % 3,
              2 *
                this.toNumber(
                  !(
                    this.compare(
                      this.itemOf(this.stage.vars.playerDirection, color - 1),
                      0
                    ) > 0
                  )
                ) -
                0
            ) === 0
          ) {
            this.warp(this.drawLine)(
              this.toNumber(x) - -8,
              this.toNumber(y) -
                -5 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              this.toNumber(x) - -8,
              this.toNumber(y) -
                3 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
          } else {
            this.warp(this.drawLine)(
              this.toNumber(x) - -8,
              this.toNumber(y) -
                -5 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              this.toNumber(x) - -8,
              this.toNumber(y) -
                7 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, color - 1)
                  ),
              6
            );
          }
          if (
            this.toNumber(
              this.itemOf(this.stage.vars.playerYDir, color - 1)
            ) === 1
          ) {
            this.warp(this.drawLine)(
              this.toNumber(x) - -8,
              this.toNumber(y) - -10,
              this.toNumber(x) - 8,
              this.toNumber(y) - -10,
              1
            );
          } else {
            this.warp(this.drawLine)(
              this.toNumber(x) - -8,
              this.toNumber(y) - 11,
              this.toNumber(x) - 8,
              this.toNumber(y) - 11,
              1
            );
          }
          if (this.toNumber(color) === 1) {
            this.penColor = Color.rgb(103, 25, 25);
          } else {
            if (this.toNumber(color) === 2) {
              this.penColor = Color.rgb(26, 103, 25);
            } else {
              this.penColor = Color.rgb(29, 24, 103);
            }
          }
          this.penColor.a =
            1 - this.itemOf(this.stage.vars.playerGhost, color - 1) / 100;
          this.warp(this.drawCircle)(
            this.toNumber(x) -
              (4.5 -
                1 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerDirection, color - 1)
                  )),
            this.toNumber(y) +
              4 *
                this.toNumber(
                  this.itemOf(this.stage.vars.playerYDir, color - 1)
                ),
            6
          );
          this.warp(this.drawCircle)(
            this.toNumber(x) -
              (-4.5 -
                1 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerDirection, color - 1)
                  )),
            this.toNumber(y) +
              4 *
                this.toNumber(
                  this.itemOf(this.stage.vars.playerYDir, color - 1)
                ),
            6
          );
        }
      }
    }
  }

  *drawCircle(x, y, size) {
    this.penDown = false;
    this.penSize = this.toNumber(size);
    this.goto(this.toNumber(x), this.toNumber(y));
    this.penDown = true;
    this.penDown = false;
  }

  *reset() {
    this.stage.vars.endingX = [];
    this.stage.vars.collideBoxData = [];
    this.stage.vars.collision = [];
    this.stage.vars.inAir = [];
    this.stage.vars.inGamePlayers = [];
    this.stage.vars.playerStandFrame = [];
    this.stage.vars.playerWalkFrame = [];
    this.stage.vars.platformColor = [];
    this.stage.vars.platformHeight = [];
    this.stage.vars.platformLength = [];
    this.stage.vars.lastCollided = [];
    this.stage.vars.platformType = [];
    this.stage.vars.platformX = [];
    this.stage.vars.platformY = [];
    this.stage.vars.playerSx = [];
    this.stage.vars.playerSy = [];
    this.stage.vars.playerX = [];
    this.stage.vars.playerY = [];
    this.stage.vars.playerDirection = [];
    this.stage.vars.jumpKey = [];
    this.stage.vars.playerGhost = [];
    this.stage.vars.p1StartX = [];
    this.stage.vars.p1StartY = [];
    this.stage.vars.p2StartX = [];
    this.stage.vars.p2StartY = [];
    this.stage.vars.p3StartX = [];
    this.stage.vars.p3StartY = [];
    this.stage.vars.unlocked = [];
    this.stage.vars.lockedPlatformFrame = [];
    this.stage.vars.notInvis = [];
    this.stage.vars.playerYDir = [];
    this.stage.vars.trampBounce = [];
    this.stage.vars.increasingTramp = [];
    this.stage.vars.soundTimer = [];
    this.stage.vars.soundOptions = [];
    this.stage.vars.soundTimes = [];
    this.stage.vars.soundsPitch = [];
    this.warp(this.addToP1StartX)();
    this.stage.vars.playerX.push(
      this.toNumber(
        this.itemOf(this.stage.vars.p1StartX, this.stage.vars.level - 1)
      ) *
        20 -
        10
    );
    this.warp(this.addToP1StartY)();
    this.stage.vars.playerY.push(
      this.toNumber(
        this.itemOf(this.stage.vars.p1StartY, this.stage.vars.level - 1)
      ) *
        20 -
        -10
    );
    this.warp(this.addToP2StartX)();
    this.stage.vars.playerX.push(
      this.toNumber(
        this.itemOf(this.stage.vars.p2StartX, this.stage.vars.level - 1)
      ) *
        20 -
        10
    );
    this.warp(this.addToP2StartY)();
    this.stage.vars.playerY.push(
      this.toNumber(
        this.itemOf(this.stage.vars.p2StartY, this.stage.vars.level - 1)
      ) *
        20 -
        -10
    );
    this.warp(this.addToP3StartX)();
    this.stage.vars.playerX.push(
      this.toNumber(
        this.itemOf(this.stage.vars.p3StartX, this.stage.vars.level - 1)
      ) *
        20 -
        10
    );
    this.warp(this.addToP3StartY)();
    this.stage.vars.playerY.push(
      this.toNumber(
        this.itemOf(this.stage.vars.p3StartY, this.stage.vars.level - 1)
      ) *
        20 -
        -10
    );
    for (let i = 0; i < 3; i++) {
      this.stage.vars.playerGhost.push(0);
      this.stage.vars.collision.push(0);
      this.stage.vars.inAir.push(0);
      this.stage.vars.playerSx.push(0);
      this.stage.vars.playerSy.push(0);
      this.stage.vars.playerWalkFrame.push(0);
      this.stage.vars.playerStandFrame.push(0);
      this.stage.vars.playerYDir.push(1);
      this.stage.vars.playerDirection.push(1);
      this.stage.vars.jumpKey.push(0);
      this.stage.vars.lastCollided.push(0);
    }
    this.stage.vars.endingX.push(-360);
    this.stage.vars.endingX.push(-240);
    this.stage.vars.endingX.push(-120);
    this.stage.vars.endingX.push(0);
    this.stage.vars.endingX.push(120);
    this.stage.vars.endingX.push(240);
    for (let i = 0; i < 7; i++) {
      this.stage.vars.unlocked.push(0);
      this.stage.vars.lockedPlatformFrame.push(0);
      this.stage.vars.notInvis.push(0);
    }
    this.stage.vars.inGamePlayers.push(1);
    this.stage.vars.inGamePlayers.push(2);
    this.stage.vars.inGamePlayers.push(3);
    this.stage.vars.playerSelected = 1;
    this.stage.vars.lastPlayerSelected = 2;
    this.stage.vars.soundTimes.push(6);
    this.stage.vars.soundOptions.push("Jump");
    this.stage.vars.soundTimer.push(0);
    this.stage.vars.soundsPitch.push(45);
    this.stage.vars.soundTimes.push(7);
    this.stage.vars.soundOptions.push("Beep");
    this.stage.vars.soundTimer.push(0);
    this.stage.vars.soundsPitch.push(5);
    this.stage.vars.soundTimes.push(17);
    this.stage.vars.soundOptions.push("Portal");
    this.stage.vars.soundTimer.push(0);
    this.stage.vars.soundsPitch.push(-5);
    this.stage.vars.soundTimes.push(5);
    this.stage.vars.soundOptions.push("Unlock");
    this.stage.vars.soundTimer.push(0);
    this.stage.vars.soundsPitch.push(0);
    this.stage.vars.soundTimes.push(10);
    this.stage.vars.soundOptions.push("Pressure");
    this.stage.vars.soundTimer.push(0);
    this.stage.vars.soundsPitch.push(10);
    this.stage.vars.soundTimes.push(0);
    this.stage.vars.soundOptions.push("Step");
    this.stage.vars.soundTimer.push(0);
    this.stage.vars.soundsPitch.push(0);
    this.stage.vars.soundTimes.push(10);
    this.stage.vars.soundOptions.push("Whoosh");
    this.stage.vars.soundTimer.push(0);
    this.stage.vars.soundsPitch.push(-5);
    this.stage.vars.soundTimes.push(12);
    this.stage.vars.soundOptions.push("Bounce");
    this.stage.vars.soundTimer.push(0);
    this.stage.vars.soundsPitch.push(-20);
  }

  *platforming(player) {
    if (
      !this.stringIncludes(
        this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
        "9"
      )
    ) {
      if (this.arrayIncludes(this.stage.vars.inGamePlayers, player)) {
        this.stage.vars.playerY.splice(
          player - 1,
          1,
          this.toNumber(this.itemOf(this.stage.vars.playerY, player - 1)) -
            1 *
              this.toNumber(this.itemOf(this.stage.vars.playerYDir, player - 1))
        );
        this.warp(this.testCollide)(player);
        this.stage.vars.playerY.splice(
          player - 1,
          1,
          this.toNumber(this.itemOf(this.stage.vars.playerY, player - 1)) -
            -1 *
              this.toNumber(this.itemOf(this.stage.vars.playerYDir, player - 1))
        );
        if (
          this.stringIncludes(
            this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
            "5"
          )
        ) {
          if (!this.arrayIncludes(this.stage.vars.soundsPlayed, 8)) {
            this.stage.vars.soundsPlayed.push(8);
          }
          this.stage.vars.playerSy.splice(player - 1, 1, 23);
          this.stage.vars.i13 = 0;
          for (let i = 0; i < this.stage.vars.trampPos.length; i++) {
            this.stage.vars.i13++;
            this.stage.vars.increasingTramp.splice(
              this.itemOf(this.stage.vars.trampPos, this.stage.vars.i13 - 1) -
                1,
              1,
              1
            );
            this.stage.vars.trampBounce.splice(
              this.itemOf(this.stage.vars.trampPos, this.stage.vars.i13 - 1) -
                1,
              1,
              this.toNumber(
                this.itemOf(
                  this.stage.vars.trampBounce,
                  this.stage.vars.i13 - 1
                )
              ) + 2
            );
          }
        } else {
          null;
        }
        if (this.keyPressed("up arrow") || this.keyPressed("w")) {
          if (this.compare(this.stage.vars.playerSelected, player) === 0) {
            if (
              this.compare(this.itemOf(this.stage.vars.inAir, player - 1), 3) <
                0 &&
              this.toNumber(
                this.itemOf(this.stage.vars.jumpKey, player - 1)
              ) === 0
            ) {
              if (
                !(
                  this.toNumber(
                    this.itemOf(this.stage.vars.lastCollided, player - 1)
                  ) === 5
                )
              ) {
                this.stage.vars.playerSy.splice(player - 1, 1, 12);
                if (!this.arrayIncludes(this.stage.vars.soundsPlayed, 1)) {
                  this.stage.vars.soundsPlayed.push(1);
                }
              }
              this.stage.vars.jumpKey.splice(player - 1, 1, 1);
            }
          }
        } else {
          this.stage.vars.jumpKey.splice(player - 1, 1, 0);
        }
        if (
          (this.keyPressed("right arrow") || this.keyPressed("d")) &&
          this.compare(this.stage.vars.playerSelected, player) === 0
        ) {
          this.stage.vars.playerSx.splice(
            player - 1,
            1,
            this.toNumber(this.itemOf(this.stage.vars.playerSx, player - 1)) + 2
          );
          this.stage.vars.playerDirection.splice(player - 1, 1, 1);
        }
        if (
          (this.keyPressed("left arrow") || this.keyPressed("a")) &&
          this.compare(this.stage.vars.playerSelected, player) === 0
        ) {
          this.stage.vars.playerSx.splice(
            player - 1,
            1,
            this.toNumber(this.itemOf(this.stage.vars.playerSx, player - 1)) +
              -2
          );
          this.stage.vars.playerDirection.splice(player - 1, 1, -1);
        }
        this.stage.vars.playerSx.splice(
          player - 1,
          1,
          this.toNumber(this.itemOf(this.stage.vars.playerSx, player - 1)) * 0.7
        );
      }
      if (
        this.compare(
          Math.abs(
            this.toNumber(this.itemOf(this.stage.vars.playerSx, player - 1))
          ),
          0.5
        ) > 0
      ) {
        this.warp(this.moveX)(
          Math.round(
            this.toNumber(this.itemOf(this.stage.vars.playerSx, player - 1))
          ),
          player
        );
      } else {
        this.stage.vars.playerWalkFrame.splice(player - 1, 1, 0);
        this.stage.vars.playerStandFrame.splice(
          player - 1,
          1,
          this.toNumber(
            this.itemOf(this.stage.vars.playerStandFrame, player - 1)
          ) + 0.125
        );
      }
      if (
        this.compare(this.itemOf(this.stage.vars.playerSy, player - 1), 4) <
          0 ||
        ((this.keyPressed("up arrow") || this.keyPressed("w")) &&
          !(
            this.toNumber(
              this.itemOf(this.stage.vars.lastCollided, player - 1)
            ) === 5
          ) &&
          this.compare(this.stage.vars.playerSelected, player) === 0)
      ) {
        this.stage.vars.playerSy.splice(
          player - 1,
          1,
          this.toNumber(this.itemOf(this.stage.vars.playerSy, player - 1)) - 1
        );
      } else {
        this.stage.vars.playerSy.splice(
          player - 1,
          1,
          this.toNumber(this.itemOf(this.stage.vars.playerSy, player - 1)) - 2
        );
      }
      if (
        this.compare(this.itemOf(this.stage.vars.playerSy, player - 1), -20) < 0
      ) {
        this.stage.vars.playerSy.splice(player - 1, 1, -20);
      }
      this.warp(this.moveY)(
        Math.round(
          this.toNumber(this.itemOf(this.stage.vars.playerSy, player - 1))
        ),
        player
      );
      this.warp(this.testCollide)(player);
      if (
        this.stringIncludes(
          this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
          "6"
        )
      ) {
        if (
          this.toNumber(this.itemOf(this.stage.vars.playerYDir, player - 1)) ===
          1
        ) {
          if (!this.arrayIncludes(this.stage.vars.soundsPlayed, 7)) {
            this.stage.vars.soundsPlayed.push(7);
          }
        }
        if (
          !(
            this.toNumber(this.itemOf(this.stage.vars.playerSy, player - 1)) ===
            0
          ) &&
          this.toNumber(this.itemOf(this.stage.vars.playerYDir, player - 1)) ===
            1
        ) {
          this.stage.vars.playerSy.splice(
            player - 1,
            1,
            0 - this.toNumber(this.itemOf(this.stage.vars.playerSy, player - 1))
          );
        }
        this.stage.vars.playerYDir.splice(player - 1, 1, -1);
      }
      if (
        this.stringIncludes(
          this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
          "7"
        )
      ) {
        if (
          this.toNumber(this.itemOf(this.stage.vars.playerYDir, player - 1)) ===
          -1
        ) {
          if (!this.arrayIncludes(this.stage.vars.soundsPlayed, 7)) {
            this.stage.vars.soundsPlayed.push(7);
          }
        }
        if (
          !(
            this.toNumber(this.itemOf(this.stage.vars.playerSy, player - 1)) ===
            0
          ) &&
          this.toNumber(this.itemOf(this.stage.vars.playerYDir, player - 1)) ===
            -1
        ) {
          this.stage.vars.playerSy.splice(
            player - 1,
            1,
            0 - this.toNumber(this.itemOf(this.stage.vars.playerSy, player - 1))
          );
        }
        this.stage.vars.playerYDir.splice(player - 1, 1, 1);
      }
      if (
        this.stringIncludes(
          this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
          "2"
        )
      ) {
        if (!this.arrayIncludes(this.stage.vars.soundsPlayed, 4)) {
          this.stage.vars.soundsPlayed.push(4);
        }
        this.stage.vars.unlocked.splice(this.stage.vars.keyColor - 1, 1, 1);
        this.broadcast("lock animation");
      }
      if (
        this.stringIncludes(
          this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
          "9"
        )
      ) {
        if (!this.arrayIncludes(this.stage.vars.soundsPlayed, 3)) {
          this.stage.vars.soundsPlayed.push(3);
        }
        this.broadcast(this.toString(player) + "win");
      }
      if (
        this.stringIncludes(
          this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
          "4"
        )
      ) {
        if (
          !(
            this.toNumber(
              this.itemOf(
                this.stage.vars.notInvis,
                this.stage.vars.invisColor - 1
              )
            ) === 1
          )
        ) {
          if (!this.arrayIncludes(this.stage.vars.soundsPlayed, 5)) {
            this.stage.vars.soundsPlayed.push(5);
          }
          this.stage.vars.notInvis.splice(this.stage.vars.invisColor - 1, 1, 1);
        }
      }
      this.stage.vars.playerX.splice(
        player - 1,
        1,
        Math.round(
          this.toNumber(this.itemOf(this.stage.vars.playerX, player - 1))
        )
      );
      this.stage.vars.playerY.splice(
        player - 1,
        1,
        Math.round(
          this.toNumber(this.itemOf(this.stage.vars.playerY, player - 1))
        )
      );
    }
  }

  *moveX(sx, player) {
    this.stage.vars.playerX.splice(
      player - 1,
      1,
      this.toNumber(this.itemOf(this.stage.vars.playerX, player - 1)) +
        this.toNumber(sx)
    );
    this.warp(this.testCollide)(player);
    if (
      this.stringIncludes(
        this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
        "1"
      ) ||
      null
    ) {
      while (
        !!(
          this.stringIncludes(
            this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
            "1"
          ) || null
        )
      ) {
        this.warp(this.testCollide)(player);
        if (this.compare(sx, 0) > 0) {
          this.stage.vars.playerX.splice(
            player - 1,
            1,
            this.toNumber(this.itemOf(this.stage.vars.playerX, player - 1)) +
              -0.3
          );
        } else {
          this.stage.vars.playerX.splice(
            player - 1,
            1,
            this.toNumber(this.itemOf(this.stage.vars.playerX, player - 1)) +
              0.3
          );
        }
      }
    }
    this.stage.vars.playerWalkFrame.splice(
      player - 1,
      1,
      this.toNumber(this.itemOf(this.stage.vars.playerWalkFrame, player - 1)) +
        0.25
    );
  }

  *moveY(sy, player) {
    this.stage.vars.playerY.splice(
      player - 1,
      1,
      this.toNumber(this.itemOf(this.stage.vars.playerY, player - 1)) +
        this.toNumber(sy) *
          this.toNumber(this.itemOf(this.stage.vars.playerYDir, player - 1))
    );
    this.stage.vars.inAir.splice(
      player - 1,
      1,
      this.toNumber(this.itemOf(this.stage.vars.inAir, player - 1)) + 1
    );
    this.warp(this.testCollide)(player);
    if (
      this.stringIncludes(
        this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
        "1"
      ) ||
      (this.stringIncludes(
        this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
        "3"
      ) &&
        !(this.compare(sy, 0) > 0))
    ) {
      while (
        !!(
          this.stringIncludes(
            this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
            "1"
          ) ||
          (this.stringIncludes(
            this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
            "3"
          ) &&
            !(this.compare(sy, 0) > 0))
        )
      ) {
        this.warp(this.testCollide)(player);
        if (
          this.stringIncludes(
            this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
            "1"
          ) ||
          (this.stringIncludes(
            this.toString(this.itemOf(this.stage.vars.collision, player - 1)),
            "3"
          ) &&
            !(this.compare(sy, 0) > 0))
        ) {
          if (this.compare(sy, 0) > 0) {
            if (
              this.stringIncludes(
                this.toString(
                  this.itemOf(this.stage.vars.collision, player - 1)
                ),
                "1"
              )
            ) {
              this.stage.vars.playerY.splice(
                player - 1,
                1,
                this.toNumber(
                  this.itemOf(this.stage.vars.playerY, player - 1)
                ) +
                  -1 *
                    this.toNumber(
                      this.itemOf(this.stage.vars.playerYDir, player - 1)
                    )
              );
            } else {
              this.stage.vars.playerY.splice(
                player - 1,
                1,
                this.toNumber(
                  this.itemOf(this.stage.vars.playerY, player - 1)
                ) +
                  -0.1 *
                    this.toNumber(
                      this.itemOf(this.stage.vars.playerYDir, player - 1)
                    )
              );
            }
          } else {
            this.stage.vars.playerY.splice(
              player - 1,
              1,
              this.toNumber(this.itemOf(this.stage.vars.playerY, player - 1)) +
                1 *
                  this.toNumber(
                    this.itemOf(this.stage.vars.playerYDir, player - 1)
                  )
            );
            this.stage.vars.inAir.splice(player - 1, 1, 0);
          }
          this.stage.vars.playerSy.splice(player - 1, 1, 0);
        }
      }
    }
  }

  *testCollide(player) {
    this.stage.vars.trampPos = [];
    this.stage.vars.collision.splice(player - 1, 1, "");
    this.stage.vars.i2 = 0;
    for (let i = 0; i < this.stage.vars.platformType.length; i++) {
      this.stage.vars.i2++;
      if (
        this.compare(
          this.itemOf(this.stage.vars.playerX, player - 1),
          this.toNumber(
            this.itemOf(this.stage.vars.platformX, this.stage.vars.i2 - 1)
          ) +
            this.toNumber(
              this.itemOf(
                this.stage.vars.platformLength,
                this.stage.vars.i2 - 1
              )
            ) +
            9.25
        ) < 0
      ) {
        if (
          this.compare(
            this.itemOf(this.stage.vars.playerX, player - 1),
            this.toNumber(
              this.itemOf(this.stage.vars.platformX, this.stage.vars.i2 - 1)
            ) - 9.25
          ) > 0
        ) {
          if (
            this.compare(
              this.itemOf(this.stage.vars.playerY, player - 1),
              this.toNumber(
                this.itemOf(this.stage.vars.platformY, this.stage.vars.i2 - 1)
              ) + 9.5
            ) < 0
          ) {
            if (
              this.compare(
                this.itemOf(this.stage.vars.playerY, player - 1),
                this.toNumber(
                  this.itemOf(this.stage.vars.platformY, this.stage.vars.i2 - 1)
                ) -
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars.platformHeight,
                      this.stage.vars.i2 - 1
                    )
                  ) -
                  9.5
              ) > 0
            ) {
              if (
                this.toNumber(
                  this.itemOf(
                    this.stage.vars.platformColor,
                    this.stage.vars.i2 - 1
                  )
                ) === 0
              ) {
                if (
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars.platformType,
                      this.stage.vars.i2 - 1
                    )
                  ) === 0
                ) {
                  this.stage.vars.collision.splice(
                    player - 1,
                    1,
                    this.toString(
                      this.itemOf(this.stage.vars.collision, player - 1)
                    ) + "1"
                  );
                  this.stage.vars.lastCollided.splice(player - 1, 1, 1);
                } else {
                  this.stage.vars.collision.splice(
                    player - 1,
                    1,
                    this.toString(
                      this.itemOf(this.stage.vars.collision, player - 1)
                    ) +
                      this.toString(
                        this.itemOf(
                          this.stage.vars.platformType,
                          this.stage.vars.i2 - 1
                        )
                      )
                  );
                  this.stage.vars.lastCollided.splice(
                    player - 1,
                    1,
                    this.itemOf(
                      this.stage.vars.platformType,
                      this.stage.vars.i2 - 1
                    )
                  );
                }
              } else {
                if (this.toNumber(player) === 1) {
                  if (
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars.platformColor,
                        this.stage.vars.i2 - 1
                      )
                    ) === 1 ||
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars.platformColor,
                        this.stage.vars.i2 - 1
                      )
                    ) === 4 ||
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.platformColor,
                          this.stage.vars.i2 - 1
                        )
                      ) === 6
                  ) {
                    this.stage.vars.collision.splice(
                      0,
                      1,
                      this.toString(this.itemOf(this.stage.vars.collision, 0)) +
                        this.toString(
                          this.itemOf(
                            this.stage.vars.platformType,
                            this.stage.vars.i2 - 1
                          )
                        )
                    );
                    this.stage.vars.lastCollided.splice(
                      0,
                      1,
                      this.itemOf(
                        this.stage.vars.platformType,
                        this.stage.vars.i2 - 1
                      )
                    );
                    if (
                      this.stringIncludes(
                        this.toString(
                          this.itemOf(this.stage.vars.collision, player - 1)
                        ),
                        "2"
                      )
                    ) {
                      this.stage.vars.keyColor =
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars.platformColor,
                            this.stage.vars.i2 - 1
                          )
                        ) + 1;
                    }
                    if (
                      this.stringIncludes(
                        this.toString(
                          this.itemOf(this.stage.vars.collision, player - 1)
                        ),
                        "4"
                      )
                    ) {
                      this.stage.vars.invisColor =
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars.platformColor,
                            this.stage.vars.i2 - 1
                          )
                        ) + 1;
                    }
                  }
                } else {
                  if (this.toNumber(player) === 2) {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.platformColor,
                          this.stage.vars.i2 - 1
                        )
                      ) === 2 ||
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.platformColor,
                          this.stage.vars.i2 - 1
                        )
                      ) === 4 ||
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars.platformColor,
                            this.stage.vars.i2 - 1
                          )
                        ) === 5
                    ) {
                      this.stage.vars.collision.splice(
                        1,
                        1,
                        this.toString(
                          this.itemOf(this.stage.vars.collision, 1)
                        ) +
                          this.toString(
                            this.itemOf(
                              this.stage.vars.platformType,
                              this.stage.vars.i2 - 1
                            )
                          )
                      );
                      this.stage.vars.lastCollided.splice(
                        1,
                        1,
                        this.itemOf(
                          this.stage.vars.platformType,
                          this.stage.vars.i2 - 1
                        )
                      );
                      if (
                        this.stringIncludes(
                          this.toString(
                            this.itemOf(this.stage.vars.collision, player - 1)
                          ),
                          "2"
                        )
                      ) {
                        this.stage.vars.keyColor =
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars.platformColor,
                              this.stage.vars.i2 - 1
                            )
                          ) + 1;
                      }
                      if (
                        this.stringIncludes(
                          this.toString(
                            this.itemOf(this.stage.vars.collision, player - 1)
                          ),
                          "4"
                        )
                      ) {
                        this.stage.vars.invisColor =
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars.platformColor,
                              this.stage.vars.i2 - 1
                            )
                          ) + 1;
                      }
                    }
                  } else {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.platformColor,
                          this.stage.vars.i2 - 1
                        )
                      ) === 3 ||
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.platformColor,
                          this.stage.vars.i2 - 1
                        )
                      ) === 5 ||
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars.platformColor,
                            this.stage.vars.i2 - 1
                          )
                        ) === 6
                    ) {
                      this.stage.vars.collision.splice(
                        2,
                        1,
                        this.toString(
                          this.itemOf(this.stage.vars.collision, 2)
                        ) +
                          this.toString(
                            this.itemOf(
                              this.stage.vars.platformType,
                              this.stage.vars.i2 - 1
                            )
                          )
                      );
                      this.stage.vars.lastCollided.splice(
                        2,
                        1,
                        this.itemOf(
                          this.stage.vars.platformType,
                          this.stage.vars.i2 - 1
                        )
                      );
                      if (
                        this.stringIncludes(
                          this.toString(
                            this.itemOf(this.stage.vars.collision, player - 1)
                          ),
                          "2"
                        )
                      ) {
                        this.stage.vars.keyColor =
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars.platformColor,
                              this.stage.vars.i2 - 1
                            )
                          ) + 1;
                      }
                      if (
                        this.stringIncludes(
                          this.toString(
                            this.itemOf(this.stage.vars.collision, player - 1)
                          ),
                          "4"
                        )
                      ) {
                        this.stage.vars.invisColor =
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars.platformColor,
                              this.stage.vars.i2 - 1
                            )
                          ) + 1;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    this.stage.vars.i2 = 0;
    for (let i = 0; i < this.stage.vars.trampX.length; i++) {
      this.stage.vars.i2++;
      if (
        this.compare(
          this.itemOf(this.stage.vars.playerX, player - 1),
          this.toNumber(
            this.itemOf(this.stage.vars.trampX, this.stage.vars.i2 - 1)
          ) +
            20 +
            8
        ) < 0
      ) {
        if (
          this.compare(
            this.itemOf(this.stage.vars.playerX, player - 1),
            this.toNumber(
              this.itemOf(this.stage.vars.trampX, this.stage.vars.i2 - 1)
            ) - 8
          ) > 0
        ) {
          if (
            this.compare(
              this.itemOf(this.stage.vars.playerY, player - 1),
              this.toNumber(
                this.itemOf(this.stage.vars.trampY, this.stage.vars.i2 - 1)
              ) + 9.5
            ) < 0
          ) {
            if (
              this.compare(
                this.itemOf(this.stage.vars.playerY, player - 1),
                this.toNumber(
                  this.itemOf(this.stage.vars.trampY, this.stage.vars.i2 - 1)
                ) - 9.5
              ) > 0
            ) {
              if (
                this.toNumber(
                  this.itemOf(
                    this.stage.vars.trampColor,
                    this.stage.vars.i2 - 1
                  )
                ) === 0
              ) {
                this.stage.vars.collision.splice(
                  player - 1,
                  1,
                  this.toString(
                    this.itemOf(this.stage.vars.collision, player - 1)
                  ) + "5"
                );
                this.stage.vars.lastCollided.splice(player - 1, 1, 5);
                this.stage.vars.trampPos.push(this.stage.vars.i2);
              } else {
                if (this.toNumber(player) === 1) {
                  if (
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars.trampColor,
                        this.stage.vars.i2 - 1
                      )
                    ) === 1 ||
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars.trampColor,
                        this.stage.vars.i2 - 1
                      )
                    ) === 4 ||
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.trampColor,
                          this.stage.vars.i2 - 1
                        )
                      ) === 6
                  ) {
                    this.stage.vars.lastCollided.splice(0, 1, 5);
                    this.stage.vars.collision.splice(
                      0,
                      1,
                      this.toString(this.itemOf(this.stage.vars.collision, 0)) +
                        "5"
                    );
                    this.stage.vars.trampPos.push(this.stage.vars.i2);
                  }
                } else {
                  if (this.toNumber(player) === 2) {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.trampColor,
                          this.stage.vars.i2 - 1
                        )
                      ) === 2 ||
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.trampColor,
                          this.stage.vars.i2 - 1
                        )
                      ) === 4 ||
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars.trampColor,
                            this.stage.vars.i2 - 1
                          )
                        ) === 5
                    ) {
                      this.stage.vars.lastCollided.splice(1, 1, 5);
                      this.stage.vars.collision.splice(
                        1,
                        1,
                        this.toString(
                          this.itemOf(this.stage.vars.collision, 1)
                        ) + "5"
                      );
                      this.stage.vars.trampPos.push(this.stage.vars.i2);
                    }
                  } else {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.trampColor,
                          this.stage.vars.i2 - 1
                        )
                      ) === 3 ||
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.trampColor,
                          this.stage.vars.i2 - 1
                        )
                      ) === 5 ||
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars.trampColor,
                            this.stage.vars.i2 - 1
                          )
                        ) === 6
                    ) {
                      this.stage.vars.lastCollided.splice(2, 1, 5);
                      this.stage.vars.collision.splice(
                        2,
                        1,
                        this.toString(
                          this.itemOf(this.stage.vars.collision, 2)
                        ) + "5"
                      );
                      this.stage.vars.trampPos.push(this.stage.vars.i2);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *drawPlatform(x, y, length, height, color) {
    if (this.toNumber(color) === 0) {
      this.stage.vars.platformType.push(0);
    } else {
      this.stage.vars.platformType.push(1);
    }
    this.stage.vars.platformX.push(this.toNumber(x) * 20 - 1);
    this.stage.vars.platformY.push(this.toNumber(y) * 20);
    this.stage.vars.platformLength.push(this.toNumber(length) * 20);
    this.stage.vars.platformHeight.push(this.toNumber(height) * 20);
    this.stage.vars.platformColor.push(color);
    if (this.toNumber(color) === 0) {
      this.penColor = Color.rgb(107, 107, 107);
      this.warp(this.drawRect)(
        this.toNumber(x) * 20 - 1,
        this.toNumber(y) * 20,
        this.toNumber(length) * 20,
        this.toNumber(height) * 20,
        10
      );
    } else {
      this.stage.vars.i7 = 0;
      for (let i = 0; i < this.toNumber(length); i++) {
        this.stage.vars.i8 = 0;
        for (let i = 0; i < this.toNumber(height); i++) {
          if (this.toNumber(color) === 1) {
            this.penColor = Color.rgb(107, 27, 27);
          } else {
            if (this.toNumber(color) === 2) {
              this.penColor = Color.rgb(27, 107, 33);
            } else {
              if (this.toNumber(color) === 3) {
                this.penColor = Color.rgb(32, 27, 107);
              } else {
                if (this.toNumber(color) === 4) {
                  this.penColor = Color.rgb(107, 100, 27);
                } else {
                  if (this.toNumber(color) === 5) {
                    this.penColor = Color.rgb(27, 107, 107);
                  } else {
                    this.penColor = Color.rgb(107, 27, 104);
                  }
                }
              }
            }
          }
          this.warp(this.drawRect)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 - 1,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20,
            20,
            20,
            10
          );
          this.penColor.v = 78;
          this.warp(this.drawRect)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 1,
            18,
            18,
            10
          );
          this.stage.vars.i8++;
        }
        this.stage.vars.i7++;
      }
    }
  }

  *resetPlatformData() {
    this.stage.vars.platformColor = [];
    this.stage.vars.platformHeight = [];
    this.stage.vars.platformLength = [];
    this.stage.vars.platformType = [];
    this.stage.vars.platformX = [];
    this.stage.vars.platformY = [];
    this.stage.vars.trampX = [];
    this.stage.vars.trampY = [];
    this.stage.vars.trampColor = [];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.stage.vars.fps = Math.round(1 / this.timer);
      this.restartTimer();
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (
        this.keyPressed("down arrow") ||
        this.keyPressed("space") || this.keyPressed("s")
      ) {
        if (this.toNumber(this.stage.vars.menu) === 0) {
          if (this.toNumber(this.stage.vars.downArrowTimer) === 0) {
            if (
              this.compare(this.stage.vars.inGamePlayers.length, 1) > 0 ||
              (this.stage.vars.inGamePlayers.length === 1 &&
                !(
                  this.compare(
                    this.itemOf(this.stage.vars.inGamePlayers, 0),
                    this.stage.vars.playerSelected
                  ) === 0
                ))
            ) {
              if (!this.arrayIncludes(this.stage.vars.soundsPlayed, 2)) {
                this.stage.vars.soundsPlayed.push(2);
              }
              this.stage.vars.lastPlayerSelected = this.stage.vars.playerSelected;
              this.stage.vars.playerSelected =
                (this.toNumber(this.stage.vars.playerSelected) % 3) + 1;
              if (
                !this.arrayIncludes(
                  this.stage.vars.inGamePlayers,
                  this.stage.vars.playerSelected
                )
              ) {
                this.stage.vars.playerSelected =
                  (this.toNumber(this.stage.vars.playerSelected) % 3) + 1;
              }
            }
            if (this.compare(this.stage.vars.inGamePlayers.length, 1) > 0) {
              this.stage.vars.arrowGhost.splice(0, 1, 100);
              this.stage.vars.arrowGhost.splice(1, 1, 100);
              this.stage.vars.arrowGhost.splice(2, 1, 100);
              this.stage.vars.arrowGhost.splice(
                this.stage.vars.playerSelected - 1,
                1,
                0
              );
            }
          }
          this.stage.vars.downArrowTimer++;
        }
      } else {
        this.stage.vars.downArrowTimer = 0;
      }
      yield;
    }
  }

  *renderPlayers() {
    if (
      this.toNumber(this.stage.vars.playerSelected) === 1 &&
      this.toNumber(this.stage.vars.lastPlayerSelected) === 2
    ) {
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 2),
        this.itemOf(this.stage.vars.playerY, 2),
        3
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 1),
        this.itemOf(this.stage.vars.playerY, 1),
        2
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 0),
        this.itemOf(this.stage.vars.playerY, 0),
        1
      );
    }
    if (
      this.toNumber(this.stage.vars.playerSelected) === 1 &&
      this.toNumber(this.stage.vars.lastPlayerSelected) === 3
    ) {
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 1),
        this.itemOf(this.stage.vars.playerY, 1),
        2
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 2),
        this.itemOf(this.stage.vars.playerY, 2),
        3
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 0),
        this.itemOf(this.stage.vars.playerY, 0),
        1
      );
    }
    if (
      this.toNumber(this.stage.vars.playerSelected) === 2 &&
      this.toNumber(this.stage.vars.lastPlayerSelected) === 1
    ) {
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 2),
        this.itemOf(this.stage.vars.playerY, 2),
        3
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 0),
        this.itemOf(this.stage.vars.playerY, 0),
        1
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 1),
        this.itemOf(this.stage.vars.playerY, 1),
        2
      );
    }
    if (
      this.toNumber(this.stage.vars.playerSelected) === 2 &&
      this.toNumber(this.stage.vars.lastPlayerSelected) === 3
    ) {
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 0),
        this.itemOf(this.stage.vars.playerY, 0),
        1
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 2),
        this.itemOf(this.stage.vars.playerY, 2),
        3
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 1),
        this.itemOf(this.stage.vars.playerY, 1),
        2
      );
    }
    if (
      this.toNumber(this.stage.vars.playerSelected) === 3 &&
      this.toNumber(this.stage.vars.lastPlayerSelected) === 1
    ) {
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 1),
        this.itemOf(this.stage.vars.playerY, 1),
        2
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 0),
        this.itemOf(this.stage.vars.playerY, 0),
        1
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 2),
        this.itemOf(this.stage.vars.playerY, 2),
        3
      );
    }
    if (
      this.toNumber(this.stage.vars.playerSelected) === 3 &&
      this.toNumber(this.stage.vars.lastPlayerSelected) === 2
    ) {
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 0),
        this.itemOf(this.stage.vars.playerY, 0),
        1
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 1),
        this.itemOf(this.stage.vars.playerY, 1),
        2
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.playerX, 2),
        this.itemOf(this.stage.vars.playerY, 2),
        3
      );
    }
  }

  *drawRestBackground() {
    this.stage.vars.i4 = 0;
    for (let i = 0; i < this.stage.vars.platformType.length; i++) {
      this.stage.vars.i4++;
      if (
        this.toNumber(
          this.itemOf(this.stage.vars.platformType, this.stage.vars.i4 - 1)
        ) === 0
      ) {
        this.penColor = Color.rgb(199, 199, 199);
        this.warp(this.drawRect)(
          this.toNumber(
            this.itemOf(this.stage.vars.platformX, this.stage.vars.i4 - 1)
          ) + 1,
          this.toNumber(
            this.itemOf(this.stage.vars.platformY, this.stage.vars.i4 - 1)
          ) - 1,
          this.toNumber(
            this.itemOf(this.stage.vars.platformLength, this.stage.vars.i4 - 1)
          ) - 2,
          this.toNumber(
            this.itemOf(this.stage.vars.platformHeight, this.stage.vars.i4 - 1)
          ) - 2,
          10
        );
      }
    }
  }

  *drawPlatforms() {
    this.stage.vars.i12 = 0;
    if (this.toNumber(this.stage.vars.level) === 1) {
      this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
      this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
      this.warp(this.drawPlatform)(-11, 5, 22, 1, 0);
      this.warp(this.drawPlatform)(-11, 5, 1, 12.5, 0);
      this.warp(this.drawPlatform)(10, 5, 1, 12.5, 0);
      this.warp(this.drawPlatform)(-11, 1, 18, 1, 0);
      this.warp(this.drawPlatform)(-11, -3, 18, 1, 0);
      this.warp(this.drawPlatform)(-7, 2, 1, 1, 1);
      this.warp(this.drawPlatform)(-5, 4, 1, 3, 2);
      this.warp(this.drawPlatform)(-3, 4, 1, 3, 3);
      this.warp(this.drawPlatform)(-1, 4, 1, 3, 5);
      this.warp(this.drawPlatform)(1, 2, 1, 1, 6);
      this.warp(this.drawPlatform)(3, 4, 1, 2, 4);
      this.warp(this.drawPlatform)(-7, 0, 1, 3, 1);
      this.warp(this.drawPlatform)(-5, -2, 1, 1, 2);
      this.warp(this.drawPlatform)(-3, 0, 1, 3, 3);
      this.warp(this.drawPlatform)(-1, -2, 1, 1, 5);
      this.warp(this.drawPlatform)(1, 0, 1, 3, 6);
      this.warp(this.drawPlatform)(3, -2, 1, 1, 4);
      this.warp(this.drawPlatform)(-7, -4, 1, 3, 1);
      this.warp(this.drawPlatform)(-5, -4, 1, 3, 2);
      this.warp(this.drawPlatform)(-3, -6, 1, 1, 3);
      this.warp(this.drawPlatform)(-1, -4, 1, 2, 5);
      this.warp(this.drawPlatform)(1, -6, 1, 1, 6);
      this.warp(this.drawPlatform)(3, -4, 1, 3, 4);
      this.warp(this.drawPortal)(9, -6);
    } else {
      if (this.toNumber(this.stage.vars.level) === 2) {
        this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
        this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
        this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
        this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
        this.warp(this.drawPlatform)(-11.25, 7.25, 3.25, 1.25, 0);
        this.warp(this.drawPlatform)(-11.25, 6.25, 2.25, 1.25, 0);
        this.warp(this.drawPlatform)(-11.25, 5.25, 1.25, 1.25, 0);
        this.warp(this.drawPlatform)(8.25, 7.25, 3.25, 1.25, 0);
        this.warp(this.drawPlatform)(9.25, 6.25, 2.25, 1.25, 0);
        this.warp(this.drawPlatform)(10.25, 5.25, 1.25, 1.25, 0);
        this.warp(this.drawPlatform)(-8, -4, 3, 1, 1);
        this.warp(this.drawPlatform)(-2, -4, 3, 1, 2);
        this.warp(this.drawPlatform)(4, -4, 3, 1, 3);
        this.warp(this.drawPlatform)(-5, -1, 3, 1, 4);
        this.warp(this.drawPlatform)(1, -1, 3, 1, 5);
        this.warp(this.drawPlatform)(-2, 2, 3, 1, 0);
        this.warp(this.drawPortal)(-0.5, 3);
      } else {
        if (this.toNumber(this.stage.vars.level) === 3) {
          this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
          this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
          this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
          this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
          this.warp(this.drawPlatform)(-11.25, -4, 2.25, 1, 0);
          this.warp(this.drawPlatform)(-11.25, -1, 8.25, 1, 0);
          this.warp(this.drawPlatform)(-4, -1, 1, 4, 0);
          this.warp(this.drawPlatform)(-4, -4, 3, 1, 0);
          this.warp(this.drawPlatform)(-8, 2, 2, 1, 0);
          this.warp(this.drawPlatform)(7, 2, 4.25, 1, 0);
          this.warp(this.drawPlatform)(4, 4, 1, 9, 0);
          this.warp(this.drawPlatform)(4, -1, 3, 1, 0);
          this.warp(this.drawPlatform)(9, -4, 2.25, 1, 0);
          this.warp(this.drawLockedPlatform)(-4, -5, 1, 2, 1);
          this.warp(this.drawLockedPlatform)(4, -5, 1, 2, 2);
          this.warp(this.drawLockedPlatform)(5, 2, 2, 1, 3);
          this.warp(this.drawKeyAt)(-11, -3, 1);
          this.warp(this.drawKeyAt)(-8, 3, 2);
          this.warp(this.drawKeyAt)(-11, -6, 3);
          this.warp(this.drawPortal)(10, 3);
        } else {
          if (this.toNumber(this.stage.vars.level) === 4) {
            this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
            this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
            this.warp(this.drawPlatform)(-12.2, 4, 1.2, 11.25, 0);
            this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
            this.warp(this.drawPlatform)(-12.25, 4, 11.25, 1, 0);
            this.warp(this.drawPlatform)(-2, 7.25, 1, 4.25, 0);
            this.warp(this.drawPlatform)(-10.5, 5.25, 1, 1, 4);
            this.warp(this.drawPlatform)(-7.5, 5.25, 1, 1, 6);
            this.warp(this.drawPlatform)(-4.5, 5.25, 1, 1, 5);
            this.warp(this.drawPlatform)(-11, 6.75, 1, 1, 1);
            this.warp(this.drawPlatform)(-10, 6.75, 1, 1, 2);
            this.warp(this.drawPlatform)(-8, 6.75, 1, 1, 1);
            this.warp(this.drawPlatform)(-7, 6.75, 1, 1, 3);
            this.warp(this.drawPlatform)(-5, 6.75, 1, 1, 2);
            this.warp(this.drawPlatform)(-4, 6.75, 1, 1, 3);
            this.warp(this.drawPlatform)(-9, -4, 1, 1, 1);
            this.warp(this.drawPlatform)(-8, -4, 1, 1, 2);
            this.warp(this.drawPlatform)(-7, -4, 1, 1, 3);
            this.warp(this.drawPlatform)(-5, -2, 2, 1, 5);
            this.warp(this.drawPlatform)(-3, -2, 2, 1, 6);
            this.warp(this.drawPlatform)(0, -1, 2, 1, 5);
            this.warp(this.drawPlatform)(2, -1, 2, 1, 4);
            this.warp(this.drawPlatform)(5, 0, 2, 1, 6);
            this.warp(this.drawPlatform)(7, 0, 2, 1, 4);
            this.warp(this.drawPlatform)(9, 3, 2.25, 1, 0);
            this.warp(this.drawPortal)(10, 4);
          } else {
            if (this.toNumber(this.stage.vars.level) === 5) {
              this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
              this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
              this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
              this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
              this.warp(this.drawPlatform)(-12.2, -5, 4.2, 1, 0);
              this.warp(this.drawPlatform)(-12.2, -2, 2.2, 1, 0);
              this.warp(this.drawPlatform)(-6, -1, 4, 1, 0);
              this.warp(this.drawPlatform)(-6, -1, 1, 4, 0);
              this.warp(this.drawPlatform)(-6, -4, 4, 1, 0);
              this.warp(this.drawPlatform)(-3, -3, 1, 2, 0);
              this.warp(this.drawPlatform)(-3, -3, 5, 1, 0);
              this.warp(this.drawPlatform)(1, -3, 1, 2, 0);
              this.warp(this.drawPlatform)(2, 3, 2, 1, 0);
              this.warp(this.drawPlatform)(-11, 1, 2, 1, 1);
              this.warp(this.drawPlatform)(-7, 4, 2, 1, 1);
              this.warp(this.drawPlatform)(-3, 3, 2, 1, 1);
              this.warp(this.drawPlatform)(-1, 1, 2, 1, 2);
              this.warp(this.drawPlatform)(5, -3, 2, 1, 3);
              this.warp(this.drawPlatform)(5, 1, 2, 1, 3);
              this.warp(this.drawPlatform)(9, -1, 2, 1, 3);
              this.warp(this.drawLockedPlatform)(-3, -5, 1, 2, 4);
              this.warp(this.drawLockedPlatform)(1, -5, 1, 2, 4);
              this.warp(this.drawLockedPlatform)(7, -4, 1, 3, 6);
              this.warp(this.drawLockedPlatform)(8, -4, 3, 1, 6);
              this.warp(this.drawKeyAt)(-5, -3, 4);
              this.warp(this.drawKeyAt)(-7, 5, 6);
              this.warp(this.drawPortal)(3, 4);
            } else {
              if (this.toNumber(this.stage.vars.level) === 6) {
                this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
                this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
                this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
                this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
                this.warp(this.drawPlatform)(-12.2, 5, 3.2, 1, 0);
                this.warp(this.drawPlatform)(-12.2, 3, 6.2, 1, 0);
                this.warp(this.drawPlatform)(-5, -2, 1, 5.25, 0);
                this.warp(this.drawPlatform)(-5, -2, 13, 1, 0);
                this.warp(this.drawPlatform)(-1, -5, 4, 1, 0);
                this.warp(this.drawPlatform)(4, 7.25, 1, 7.25, 0);
                this.warp(this.drawPlatform)(4, 1, 2, 1, 0);
                this.warp(this.drawPlatform)(9, 5, 2.25, 1, 0);
                this.warp(this.drawPlatform)(9, 5, 1, 3, 0);
                this.warp(this.drawPlatform)(8, 3, 1, 1, 6);
                this.warp(this.drawLockedPlatform)(-7, -4, 2, 1, 1);
                this.warp(this.drawLockedPlatform)(-4, 3, 2, 1, 2);
                this.warp(this.drawLockedPlatform)(0, 3, 2, 1, 2);
                this.warp(this.drawLockedPlatform)(5, 0, 1, 2, 2);
                this.warp(this.drawLockedPlatform)(10, -4, 1, 1, 3);
                this.warp(this.drawLockedPlatform)(4, 0, 1, 2, 4);
                this.warp(this.drawLockedPlatform)(8, -2, 3, 1, 5);
                this.warp(this.drawLockedPlatform)(7, 3, 1, 1, 5);
                this.warp(this.drawKeyAt)(-7, -6, 1);
                this.warp(this.drawKeyAt)(-11, 6, 2);
                this.warp(this.drawKeyAt)(0, -6, 3);
                this.warp(this.drawKeyAt)(0, 4, 4);
                this.warp(this.drawKeyAt)(9, -6, 5);
                this.warp(this.drawPortal)(10, 6);
              } else {
                if (this.toNumber(this.stage.vars.level) === 7) {
                  this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
                  this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
                  this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
                  this.warp(this.drawPlatform)(11, 7.25, 1.2, 9.25, 0);
                  this.warp(this.drawPlatform)(7, -1, 4.5, 1, 0);
                  this.warp(this.drawPlatform)(7, -1, 1, 6.25, 0);
                  this.warp(this.drawPlatform)(-11.25, -5, 2.25, 2.25, 0);
                  this.warp(this.drawPlatform)(-5, -5, 1, 2.25, 0);
                  this.warp(this.drawPlatform)(-1, 5, 2, 1, 0);
                  this.warp(this.drawFragileBlocks)(-9, -5, 4, 1, 1);
                  this.warp(this.drawFragileBlocks)(-2, -3, 5, 1, 1);
                  this.warp(this.drawFragileBlocks)(4, 1, 3, 1, 2);
                  this.warp(this.drawFragileBlocks)(-2, 1, 4, 1, 2);
                  this.warp(this.drawFragileBlocks)(-5, 3, 2, 1, 2);
                  this.warp(this.drawFragileBlocks)(-7, 3, 2, 1, 3);
                  this.warp(this.drawFragileBlocks)(-3, 3, 2, 1, 3);
                  this.warp(this.drawFragileBlocks)(-9, 1, 2, 1, 3);
                  this.warp(this.drawPlatform)(9, 2, 2, 1, 1);
                  this.warp(this.drawPlatform)(5, 4, 2, 1, 1);
                  this.warp(this.drawPlatform)(1, 5, 2, 1, 1);
                  this.warp(this.drawPlatform)(-11, -2, 1, 1, 3);
                  this.warp(this.drawPortal)(0, 6);
                } else {
                  if (this.toNumber(this.stage.vars.level) === 8) {
                    this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
                    this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
                    this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 9.25, 0);
                    this.warp(this.drawPlatform)(-12.25, -1, 4.25, 1, 0);
                    this.warp(this.drawPlatform)(-9, -1, 1, 6.25, 0);
                    this.warp(this.drawPlatform)(11, 7.25, 1.2, 9.25, 0);
                    this.warp(this.drawPlatform)(8, -1, 3.5, 1, 0);
                    this.warp(this.drawPlatform)(8, -1, 1, 6.25, 0);
                    this.warp(this.drawPlatform)(-1, 4, 2, 1, 0);
                    this.warp(this.drawFragileBlocks)(-8, -1, 16, 1, 4);
                    this.warp(this.drawPlatform)(10, 2, 1, 1, 1);
                    this.warp(this.drawPlatform)(1, 4, 2, 1, 1);
                    this.warp(this.drawPlatform)(-11, 2, 1, 1, 2);
                    this.warp(this.drawPlatform)(-3, 4, 2, 1, 2);
                    this.warp(this.drawFragileBlocks)(5, 4, 3, 1, 1);
                    this.warp(this.drawFragileBlocks)(-8, 4, 3, 1, 2);
                    this.warp(this.drawFragileBlocks)(-2, -5, 2, 1, 3);
                    this.warp(this.drawFragileBlocks)(-6, -3, 2, 1, 3);
                    this.warp(this.drawFragileBlocks)(-6, 2, 2, 1, 3);
                    this.warp(this.drawPortal)(0, 5);
                  } else {
                    if (this.toNumber(this.stage.vars.level) === 9) {
                      this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
                      this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
                      this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
                      this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
                      this.warp(this.drawPlatform)(-9, -4, 1, 3.25, 0);
                      this.warp(this.drawPlatform)(8, -4, 1, 3.25, 0);
                      this.warp(this.drawPlatform)(-3, -4, 6, 1, 0);
                      this.warp(this.drawPlatform)(0, 0, 3, 1, 0);
                      this.warp(this.drawPlatform)(4, 3, 3, 1, 0);
                      this.warp(this.drawPlatform)(4, 7.25, 1, 2.25, 0);
                      this.warp(this.drawPlatform)(7, 7.25, 1, 3.25, 0);
                      this.warp(this.drawPlatform)(7, 5, 3, 1, 0);
                      this.warp(this.drawFragileBlocks)(7, 3, 4, 1, 1);
                      this.warp(this.drawFragileBlocks)(-6, 1, 1, 1, 5);
                      this.warp(this.drawFragileBlocks)(-6, 0, 1, 1, 5);
                      this.warp(this.drawPlatform)(9, -4, 2, 1, 2);
                      this.warp(this.drawPlatform)(-11, -4, 2, 1, 3);
                      this.warp(this.drawPlatform)(2, -5, 1, 2, 5);
                      this.warp(this.drawPlatform)(-11, 0, 2, 1, 5);
                      this.warp(this.drawLockedPlatform)(-11, -5, 2, 1, 1);
                      this.warp(this.drawLockedPlatform)(1, -5, 1, 2, 1);
                      this.warp(this.drawLockedPlatform)(9, -5, 2, 1, 3);
                      this.warp(this.drawLockedPlatform)(4, 5, 1, 2, 4);
                      this.warp(this.drawLockedPlatform)(-3, -5, 1, 1, 5);
                      this.warp(this.drawLockedPlatform)(-3, -5, 1, 2, 5);
                      this.warp(this.drawLockedPlatform)(-2, -5, 1, 2, 6);
                      this.warp(this.drawKeyAt)(8, 6, 1);
                      this.warp(this.drawKeyAt)(5, 7, 3);
                      this.warp(this.drawKeyAt)(-11, 1, 4);
                      this.warp(this.drawKeyAt)(9, -6, 5);
                      this.warp(this.drawKeyAt)(-11, -6, 6);
                      this.warp(this.drawPortal)(0, -6);
                    } else {
                      if (this.toNumber(this.stage.vars.level) === 10) {
                        this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
                        this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
                        this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
                        this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
                        this.warp(this.drawPlatform)(-4, 4, 2, 1, 0);
                        this.warp(this.drawPlatform)(0, 4, 4, 1, 0);
                        this.warp(this.drawPlatform)(-7, -4, 1, 3, 1);
                        this.warp(this.drawPlatform)(-3, -4, 1, 3, 4);
                        this.warp(this.drawPlatform)(1, -4, 1, 3, 5);
                        this.warp(this.drawPlatform)(5, -4, 1, 3, 3);
                        this.warp(this.drawPlatform)(-11, -1, 2, 1, 1);
                        this.warp(this.drawPlatform)(9, -1, 2, 1, 3);
                        this.warp(this.drawPlatform)(4, 4, 3, 1, 3);
                        this.warp(this.drawPlatform)(0, 7, 1, 1, 4);
                        this.warp(this.drawPlatform)(1, 7, 1, 1, 5);
                        this.warp(this.drawLockedPlatform)(-10, 0, 1, 1, 1);
                        this.warp(this.drawLockedPlatform)(9, 0, 1, 1, 3);
                        this.warp(this.drawLockedPlatform)(0, 6, 1, 2, 4);
                        this.warp(this.drawLockedPlatform)(1, 6, 1, 2, 5);
                        this.warp(this.drawKeyAt)(-11, -6, 4);
                        this.warp(this.drawKeyAt)(-9, -6, 3);
                        this.warp(this.drawKeyAt)(6, -6, 1);
                        this.warp(this.drawKeyAt)(8, -6, 5);
                        this.warp(this.drawThroughBlocks)(-6, -4, 3, 1);
                        this.warp(this.drawThroughBlocks)(-2, -4, 3, 2);
                        this.warp(this.drawThroughBlocks)(2, -4, 3, 3);
                        this.warp(this.drawThroughBlocks)(-11, 2, 1, 1);
                        this.warp(this.drawThroughBlocks)(-8, 4, 2, 1);
                        this.warp(this.drawThroughBlocks)(10, 2, 1, 3);
                        this.warp(this.drawThroughBlocks)(-1, -2, 2, 2);
                        this.warp(this.drawThroughBlocks)(-2, 0, 2, 2);
                        this.warp(this.drawThroughBlocks)(-1, 2, 2, 2);
                        this.warp(this.drawThroughBlocks)(-2, 4, 2, 2);
                        this.warp(this.drawPortal)(3, 5);
                      } else {
                        if (this.toNumber(this.stage.vars.level) === 11) {
                          this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
                          this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
                          this.warp(this.drawPlatform)(
                            -12.2,
                            7.25,
                            1.2,
                            14.5,
                            0
                          );
                          this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
                          this.warp(this.drawPlatform)(-12.25, -1, 6.25, 1, 0);
                          this.warp(this.drawPlatform)(-7, -1, 1, 4, 0);
                          this.warp(this.drawPlatform)(6, -1, 6.25, 1, 0);
                          this.warp(this.drawPlatform)(6, -1, 1, 4, 0);
                          this.warp(this.drawFragileBlocks)(-6, -4, 12, 1, 6);
                          this.warp(this.drawPlatform)(-7, 3, 1, 1, 1);
                          this.warp(this.drawPlatform)(-4, 3, 2, 1, 1);
                          this.warp(this.drawPlatform)(7, -3, 2, 1, 1);
                          this.warp(this.drawPlatform)(6, 3, 1, 1, 3);
                          this.warp(this.drawPlatform)(2, 3, 2, 1, 3);
                          this.warp(this.drawPlatform)(-9, -3, 2, 1, 3);
                          this.warp(this.drawPlatform)(-2, -5, 1, 1, 2);
                          this.warp(this.drawPlatform)(-3, -3, 1, 1, 2);
                          this.warp(this.drawPlatform)(1, -5, 1, 1, 2);
                          this.warp(this.drawPlatform)(2, -3, 1, 1, 2);
                          this.warp(this.drawPlatform)(-4, -1, 1, 1, 2);
                          this.warp(this.drawPlatform)(3, -1, 1, 1, 2);
                          this.warp(this.drawPlatform)(-5, 1, 1, 1, 2);
                          this.warp(this.drawPlatform)(4, 1, 1, 1, 2);
                          this.warp(this.drawThroughBlocks)(-5, 4, 10, 2);
                          this.warp(this.drawLockedPlatform)(-7, 0, 1, 1, 1);
                          this.warp(this.drawLockedPlatform)(6, 0, 1, 1, 3);
                          this.warp(this.drawLockedPlatform)(-11, 2, 1, 1, 4);
                          this.warp(this.drawLockedPlatform)(10, 2, 1, 1, 5);
                          this.warp(this.drawLockedPlatform)(-2, 7, 1, 3, 4);
                          this.warp(this.drawLockedPlatform)(-1, 5, 1, 1, 4);
                          this.warp(this.drawLockedPlatform)(1, 7, 1, 3, 5);
                          this.warp(this.drawLockedPlatform)(0, 5, 1, 1, 5);
                          this.warp(this.drawKeyAt)(9, 0, 1);
                          this.warp(this.drawKeyAt)(-11, 0, 3);
                          this.warp(this.drawKeyAt)(-9, -2, 4);
                          this.warp(this.drawKeyAt)(7, -2, 5);
                          this.warp(this.drawPortal)(0, 6);
                        } else {
                          if (this.toNumber(this.stage.vars.level) === 12) {
                            this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
                            this.warp(this.drawPlatform)(
                              -12.2,
                              9.1,
                              25,
                              2.1,
                              0
                            );
                            this.warp(this.drawPlatform)(
                              -12.2,
                              7.25,
                              1.2,
                              14.5,
                              0
                            );
                            this.warp(this.drawPlatform)(
                              11,
                              7.25,
                              1.2,
                              14.5,
                              0
                            );
                            this.warp(this.drawThroughBlocks)(-11, -4, 2, 1);
                            this.warp(this.drawThroughBlocks)(-11, -1, 2, 1);
                            this.warp(this.drawThroughBlocks)(-11, 2, 2, 1);
                            this.warp(this.drawThroughBlocks)(9, -4, 2, 3);
                            this.warp(this.drawThroughBlocks)(9, -1, 2, 3);
                            this.warp(this.drawPlatform)(10, 3, 1.25, 1, 0);
                            this.warp(this.drawPlatform)(5, -4, 1, 3, 2);
                            this.warp(this.drawPlatform)(-1, -2, 1, 1, 2);
                            this.warp(this.drawPlatform)(-5, 0, 2, 1, 2);
                            this.warp(this.drawInvisPlatform)(1, -5, 1, 2, 2);
                            this.warp(this.drawInvisActivator)(4, -6, 2);
                            this.warp(this.drawLockedPlatform)(2, -4, 3, 1, 2);
                            this.warp(this.drawLockedPlatform)(5, 0, 2, 1, 3);
                            this.warp(this.drawKeyAt)(-5, 1, 2);
                            this.warp(this.drawKeyAt)(6, -6, 3);
                            this.warp(this.drawInvisPlatform)(-5, 3, 4, 1, 1);
                            this.warp(this.drawInvisPlatform)(-1, 3, 2, 1, 2);
                            this.warp(this.drawInvisPlatform)(1, 3, 2, 1, 3);
                            this.warp(this.drawInvisActivator)(-3, -6, 1);
                            this.warp(this.drawInvisActivator)(10, 4, 3);
                            this.warp(this.drawPortal)(0, 6);
                          } else {
                            if (this.toNumber(this.stage.vars.level) === 13) {
                              this.warp(this.drawPlatform)(
                                -12.2,
                                -7,
                                25,
                                2.1,
                                0
                              );
                              this.warp(this.drawPlatform)(
                                -12.2,
                                9.1,
                                25,
                                2.1,
                                0
                              );
                              this.warp(this.drawPlatform)(
                                -12.2,
                                7.25,
                                1.2,
                                14.5,
                                0
                              );
                              this.warp(this.drawPlatform)(
                                11,
                                7.25,
                                1.2,
                                14.5,
                                0
                              );
                              this.warp(this.drawPlatform)(
                                -12.25,
                                -4,
                                3.25,
                                1,
                                0
                              );
                              this.warp(this.drawPlatform)(-11, -2, 3, 1, 3);
                              this.warp(this.drawPlatform)(-8, -2, 1, 2, 3);
                              this.warp(this.drawPlatform)(-8, -4, 3, 1, 3);
                              this.warp(this.drawPlatform)(-6, -5, 1, 2, 3);
                              this.warp(this.drawPlatform)(-2, -4, 1, 3, 1);
                              this.warp(this.drawPlatform)(-4, 0, 3, 1, 1);
                              this.warp(this.drawPlatform)(-1, 0, 2, 1, 0);
                              this.warp(this.drawPlatform)(-2, 5, 1, 5, 3);
                              this.warp(this.drawPlatform)(-8, 5, 6, 1, 3);
                              this.warp(this.drawPlatform)(1, -3, 1, 4, 2);
                              this.warp(this.drawPlatform)(1, 0, 3, 1, 2);
                              this.warp(this.drawThroughBlocks)(-11, 2, 1, 3);
                              this.warp(this.drawThroughBlocks)(-11, 5, 3, 3);
                              this.warp(this.drawPlatform)(9, -4, 1, 1, 2);
                              this.warp(this.drawThroughBlocks)(9, -1, 1, 2);
                              this.warp(this.drawThroughBlocks)(10, -1, 1, 1);
                              this.warp(this.drawThroughBlocks)(10, 2, 1, 1);
                              this.warp(this.drawThroughBlocks)(4, 5, 7, 1);
                              this.warp(this.drawInvisPlatform)(
                                10,
                                -4,
                                1,
                                1,
                                1
                              );
                              this.warp(this.drawInvisPlatform)(0, -4, 1, 1, 2);
                              this.warp(this.drawInvisPlatform)(
                                -11,
                                0,
                                1,
                                1,
                                3
                              );
                              this.warp(this.drawInvisActivator)(0, -6, 1);
                              this.warp(this.drawInvisActivator)(10, -6, 2);
                              this.warp(this.drawInvisActivator)(9, -6, 3);
                              this.warp(this.drawLockedPlatform)(
                                -2,
                                -3,
                                1,
                                1,
                                1
                              );
                              this.warp(this.drawLockedPlatform)(
                                -9,
                                -4,
                                1,
                                3,
                                2
                              );
                              this.warp(this.drawLockedPlatform)(
                                -4,
                                7,
                                1,
                                2,
                                5
                              );
                              this.warp(this.drawLockedPlatform)(
                                -6,
                                7,
                                1,
                                2,
                                6
                              );
                              this.warp(this.drawKeyAt)(9, 6, 1);
                              this.warp(this.drawKeyAt)(-1, -5, 2);
                              this.warp(this.drawKeyAt)(-11, -6, 5);
                              this.warp(this.drawKeyAt)(-11, -3, 6);
                              this.warp(this.drawPortal)(0, 1);
                            } else {
                              if (this.toNumber(this.stage.vars.level) === 14) {
                                this.warp(this.drawPlatform)(
                                  -12.2,
                                  -7,
                                  25,
                                  2.1,
                                  0
                                );
                                this.warp(this.drawPlatform)(
                                  -12.2,
                                  9.1,
                                  25,
                                  2.1,
                                  0
                                );
                                this.warp(this.drawPlatform)(
                                  -12.2,
                                  7.25,
                                  1.2,
                                  14.5,
                                  0
                                );
                                this.warp(this.drawPlatform)(
                                  11,
                                  7.25,
                                  1.2,
                                  14.5,
                                  0
                                );
                                this.warp(this.drawPlatform)(
                                  10,
                                  -4,
                                  1.25,
                                  1,
                                  0
                                );
                                this.warp(this.drawPlatform)(8, 0, 3.25, 1, 0);
                                this.warp(this.drawPlatform)(
                                  -11.25,
                                  0,
                                  4.25,
                                  1,
                                  0
                                );
                                this.warp(this.drawPlatform)(-4, 5, 4, 1, 0);
                                this.warp(this.drawPlatform)(-5, 5, 1, 1, 1);
                                this.warp(this.drawPlatform)(0, 5, 1, 1, 2);
                                this.warp(this.drawPlatform)(-9, -3, 1, 3, 3);
                                this.warp(this.drawPlatform)(-7, -5, 1, 2, 3);
                                this.warp(this.drawPlatform)(-1, -4, 1, 3, 3);
                                this.warp(this.drawPlatform)(1, -4, 1, 3, 3);
                                this.warp(this.drawFragileBlocks)(
                                  -4,
                                  0,
                                  1,
                                  1,
                                  1
                                );
                                this.warp(this.drawFragileBlocks)(
                                  0,
                                  0,
                                  1,
                                  1,
                                  1
                                );
                                this.warp(this.drawFragileBlocks)(
                                  4,
                                  0,
                                  1,
                                  1,
                                  1
                                );
                                this.warp(this.drawFragileBlocks)(
                                  -6,
                                  -1,
                                  1,
                                  1,
                                  2
                                );
                                this.warp(this.drawFragileBlocks)(
                                  -2,
                                  -1,
                                  1,
                                  1,
                                  2
                                );
                                this.warp(this.drawFragileBlocks)(
                                  2,
                                  -1,
                                  1,
                                  1,
                                  2
                                );
                                this.warp(this.drawFragileBlocks)(
                                  6,
                                  -1,
                                  1,
                                  1,
                                  2
                                );
                                this.warp(this.drawInvisPlatform)(
                                  -6,
                                  0,
                                  1,
                                  1,
                                  1
                                );
                                this.warp(this.drawInvisPlatform)(
                                  -2,
                                  0,
                                  1,
                                  1,
                                  1
                                );
                                this.warp(this.drawInvisPlatform)(
                                  2,
                                  0,
                                  1,
                                  1,
                                  1
                                );
                                this.warp(this.drawInvisPlatform)(
                                  6,
                                  0,
                                  1,
                                  1,
                                  1
                                );
                                this.warp(this.drawInvisPlatform)(
                                  -4,
                                  -1,
                                  1,
                                  1,
                                  2
                                );
                                this.warp(this.drawInvisPlatform)(
                                  0,
                                  -1,
                                  1,
                                  1,
                                  2
                                );
                                this.warp(this.drawInvisPlatform)(
                                  4,
                                  -1,
                                  1,
                                  1,
                                  2
                                );
                                this.warp(this.drawInvisPlatform)(
                                  1,
                                  -1,
                                  1,
                                  1,
                                  3
                                );
                                this.warp(this.drawInvisPlatform)(
                                  0,
                                  2,
                                  1,
                                  1,
                                  3
                                );
                                this.warp(this.drawInvisPlatform)(
                                  -11,
                                  3,
                                  1,
                                  1,
                                  1
                                );
                                this.warp(this.drawInvisPlatform)(
                                  10,
                                  3,
                                  1,
                                  1,
                                  2
                                );
                                this.warp(this.drawInvisPlatform)(
                                  6,
                                  4,
                                  1,
                                  1,
                                  2
                                );
                                this.warp(this.drawThroughBlocks)(0, -4, 1, 3);
                                this.warp(this.drawInvisActivator)(10, 1, 1);
                                this.warp(this.drawInvisActivator)(-11, 1, 2);
                                this.warp(this.drawInvisActivator)(10, -3, 3);
                                this.warp(this.drawLockedPlatform)(
                                  8,
                                  -5,
                                  3,
                                  1,
                                  3
                                );
                                this.warp(this.drawLockedPlatform)(
                                  8,
                                  -6,
                                  1,
                                  1,
                                  3
                                );
                                this.warp(this.drawLockedPlatform)(
                                  9,
                                  -1,
                                  1,
                                  3,
                                  5
                                );
                                this.warp(this.drawLockedPlatform)(
                                  1,
                                  5,
                                  3,
                                  1,
                                  5
                                );
                                this.warp(this.drawLockedPlatform)(
                                  -1,
                                  7,
                                  1,
                                  2,
                                  5
                                );
                                this.warp(this.drawLockedPlatform)(
                                  -9,
                                  -6,
                                  1,
                                  1,
                                  6
                                );
                                this.warp(this.drawLockedPlatform)(
                                  -8,
                                  5,
                                  3,
                                  1,
                                  6
                                );
                                this.warp(this.drawLockedPlatform)(
                                  -4,
                                  7,
                                  1,
                                  2,
                                  6
                                );
                                this.warp(this.drawKeyAt)(-10, -1, 3);
                                this.warp(this.drawKeyAt)(-11, -6, 5);
                                this.warp(this.drawKeyAt)(9, -6, 6);
                                this.warp(this.drawPortal)(-2, 6);
                              } else {
                                if (
                                  this.toNumber(this.stage.vars.level) === 15
                                ) {
                                  this.warp(this.drawPlatform)(
                                    -12.2,
                                    -7,
                                    25,
                                    2.1,
                                    0
                                  );
                                  this.warp(this.drawPlatform)(
                                    -12.2,
                                    9.1,
                                    25,
                                    2.1,
                                    0
                                  );
                                  this.warp(this.drawPlatform)(
                                    -10,
                                    6,
                                    1,
                                    12,
                                    0
                                  );
                                  this.warp(this.drawPlatform)(9, 6, 1, 12, 0);
                                  this.warp(this.drawPlatform)(
                                    -10,
                                    6,
                                    20,
                                    1,
                                    0
                                  );
                                  this.warp(this.drawPlatform)(
                                    -10,
                                    -5,
                                    20,
                                    1,
                                    0
                                  );
                                  this.warp(this.drawPlatform)(-9, 5, 1, 2, 1);
                                  this.warp(this.drawPlatform)(-8, 5, 1, 1, 6);
                                  this.warp(this.drawPlatform)(-7, 5, 1, 1, 3);
                                  this.warp(this.drawPlatform)(-6, 5, 1, 1, 6);
                                  this.warp(this.drawPlatform)(-5, 5, 2, 1, 2);
                                  this.warp(this.drawPlatform)(-3, 5, 1, 1, 1);
                                  this.warp(this.drawPlatform)(-2, 5, 2, 1, 3);
                                  this.warp(this.drawPlatform)(0, 5, 1, 1, 1);
                                  this.warp(this.drawPlatform)(1, 5, 1, 1, 6);
                                  this.warp(this.drawPlatform)(2, 5, 1, 2, 2);
                                  this.warp(this.drawPlatform)(3, 5, 1, 1, 6);
                                  this.warp(this.drawPlatform)(4, 5, 1, 1, 3);
                                  this.warp(this.drawPlatform)(5, 5, 1, 1, 1);
                                  this.warp(this.drawPlatform)(6, 5, 3, 1, 2);
                                  this.warp(this.drawPlatform)(-7, 4, 1, 2, 2);
                                  this.warp(this.drawPlatform)(-8, 3, 1, 2, 2);
                                  this.warp(this.drawPlatform)(-8, 4, 1, 1, 4);
                                  this.warp(this.drawPlatform)(-6, 4, 1, 1, 3);
                                  this.warp(this.drawPlatform)(-5, 4, 1, 1, 4);
                                  this.warp(this.drawPlatform)(-4, 4, 1, 1, 2);
                                  this.warp(this.drawPlatform)(-3, 4, 1, 1, 6);
                                  this.warp(this.drawPlatform)(-2, 4, 1, 2, 4);
                                  this.warp(this.drawPlatform)(-1, 4, 2, 1, 2);
                                  this.warp(this.drawPlatform)(1, 4, 1, 1, 1);
                                  this.warp(this.drawPlatform)(3, 4, 1, 2, 4);
                                  this.warp(this.drawPlatform)(4, 4, 1, 1, 1);
                                  this.warp(this.drawPlatform)(6, 4, 1, 1, 1);
                                  this.warp(this.drawPlatform)(7, 4, 1, 1, 3);
                                  this.warp(this.drawPlatform)(8, 4, 1, 1, 1);
                                  this.warp(this.drawPlatform)(-9, 3, 1, 1, 3);
                                  this.warp(this.drawPlatform)(-6, 3, 1, 1, 6);
                                  this.warp(this.drawPlatform)(-5, 3, 1, 1, 3);
                                  this.warp(this.drawPlatform)(-4, 3, 1, 1, 1);
                                  this.warp(this.drawPlatform)(-3, 3, 1, 1, 3);
                                  this.warp(this.drawPlatform)(-1, 3, 1, 1, 3);
                                  this.warp(this.drawPlatform)(0, 3, 1, 1, 5);
                                  this.warp(this.drawPlatform)(1, 3, 2, 1, 6);
                                  this.warp(this.drawPlatform)(4, 3, 1, 1, 3);
                                  this.warp(this.drawPlatform)(5, 3, 1, 1, 5);
                                  this.warp(this.drawPlatform)(6, 3, 2, 1, 2);
                                  this.warp(this.drawPlatform)(8, 3, 1, 2, 3);
                                  this.warp(this.drawPlatform)(-9, 2, 1, 1, 6);
                                  this.warp(this.drawPlatform)(-7, 2, 1, 1, 4);
                                  this.warp(this.drawPlatform)(-6, 2, 1, 1, 5);
                                  this.warp(this.drawPlatform)(-5, 2, 2, 1, 4);
                                  this.warp(this.drawPlatform)(-3, 2, 1, 1, 2);
                                  this.warp(this.drawPlatform)(-2, 2, 1, 1, 1);
                                  this.warp(this.drawPlatform)(-1, 2, 1, 1, 6);
                                  this.warp(this.drawPlatform)(0, 2, 1, 1, 3);
                                  this.warp(this.drawPlatform)(1, 2, 1, 1, 2);
                                  this.warp(this.drawPlatform)(2, 2, 1, 1, 3);
                                  this.warp(this.drawPlatform)(3, 2, 1, 1, 2);
                                  this.warp(this.drawPlatform)(4, 2, 1, 1, 4);
                                  this.warp(this.drawPlatform)(5, 2, 1, 2, 1);
                                  this.warp(this.drawPlatform)(6, 2, 1, 1, 5);
                                  this.warp(this.drawPlatform)(7, 2, 1, 1, 2);
                                  this.warp(this.drawPlatform)(-9, 1, 1, 1, 1);
                                  this.warp(this.drawPlatform)(-8, 1, 2, 1, 3);
                                  this.warp(this.drawPlatform)(-6, 1, 1, 1, 6);
                                  this.warp(this.drawPlatform)(-5, 1, 1, 1, 1);
                                  this.warp(this.drawPlatform)(-4, 1, 1, 1, 6);
                                  this.warp(this.drawPlatform)(-3, 1, 1, 1, 5);
                                  this.warp(this.drawPlatform)(-2, 1, 1, 1, 6);
                                  this.warp(this.drawPlatform)(1, 1, 1, 2, 4);
                                  this.warp(this.drawPlatform)(2, 1, 1, 1, 6);
                                  this.warp(this.drawPlatform)(3, 1, 1, 1, 3);
                                  this.warp(this.drawPlatform)(4, 1, 1, 1, 6);
                                  this.warp(this.drawPlatform)(6, 1, 1, 1, 6);
                                  this.warp(this.drawPlatform)(7, 1, 1, 1, 3);
                                  this.warp(this.drawPlatform)(8, 1, 1, 1, 1);
                                  this.warp(this.drawPlatform)(-9, 0, 4, 1, 4);
                                  this.warp(this.drawPlatform)(-5, 0, 1, 1, 2);
                                  this.warp(this.drawPlatform)(-4, 0, 1, 1, 1);
                                  this.warp(this.drawPlatform)(-3, 0, 1, 1, 4);
                                  this.warp(this.drawPlatform)(-2, 0, 1, 1, 1);
                                  this.warp(this.drawPlatform)(2, 0, 1, 1, 4);
                                  this.warp(this.drawPlatform)(3, 0, 1, 1, 2);
                                  this.warp(this.drawPlatform)(4, 0, 1, 1, 3);
                                  this.warp(this.drawPlatform)(5, 0, 1, 1, 2);
                                  this.warp(this.drawPlatform)(6, 0, 1, 1, 4);
                                  this.warp(this.drawPlatform)(7, 0, 1, 1, 2);
                                  this.warp(this.drawPlatform)(8, 0, 1, 1, 4);
                                  this.warp(this.drawPlatform)(-9, -1, 1, 1, 3);
                                  this.warp(this.drawPlatform)(-8, -1, 1, 1, 5);
                                  this.warp(this.drawPlatform)(-7, -1, 1, 1, 2);
                                  this.warp(this.drawPlatform)(-5, -1, 1, 1, 0);
                                  this.warp(this.drawPlatform)(-4, -1, 1, 1, 6);
                                  this.warp(this.drawPlatform)(-3, -1, 2, 1, 0);
                                  this.warp(this.drawPlatform)(-1, -1, 1, 1, 6);
                                  this.warp(this.drawPlatform)(0, -1, 1, 1, 2);
                                  this.warp(this.drawPlatform)(1, -1, 1, 1, 3);
                                  this.warp(this.drawPlatform)(2, -1, 2, 1, 1);
                                  this.warp(this.drawPlatform)(4, -1, 2, 1, 5);
                                  this.warp(this.drawPlatform)(5, -1, 1, 1, 6);
                                  this.warp(this.drawPlatform)(6, -1, 1, 1, 3);
                                  this.warp(this.drawPlatform)(7, -1, 1, 1, 2);
                                  this.warp(this.drawPlatform)(8, -1, 2, 1, 3);
                                  this.warp(this.drawPlatform)(-9, -2, 2, 1, 2);
                                  this.warp(this.drawPlatform)(-8, -2, 1, 1, 4);
                                  this.warp(this.drawPlatform)(-7, -2, 1, 1, 1);
                                  this.warp(this.drawPlatform)(-6, -2, 1, 1, 6);
                                  this.warp(this.drawPlatform)(-5, -2, 1, 2, 4);
                                  this.warp(this.drawPlatform)(-4, -2, 4, 1, 3);
                                  this.warp(this.drawPlatform)(0, -2, 1, 1, 4);
                                  this.warp(this.drawPlatform)(1, -2, 1, 2, 1);
                                  this.warp(this.drawPlatform)(2, -2, 1, 1, 5);
                                  this.warp(this.drawPlatform)(3, -2, 1, 1, 3);
                                  this.warp(this.drawPlatform)(4, -2, 1, 1, 2);
                                  this.warp(this.drawPlatform)(5, -2, 1, 1, 1);
                                  this.warp(this.drawPlatform)(6, -2, 1, 1, 6);
                                  this.warp(this.drawPlatform)(7, -2, 1, 1, 4);
                                  this.warp(this.drawPlatform)(8, -2, 1, 1, 1);
                                  this.warp(this.drawPlatform)(-9, -3, 1, 1, 5);
                                  this.warp(this.drawPlatform)(-8, -3, 1, 1, 1);
                                  this.warp(this.drawPlatform)(-7, -3, 1, 1, 4);
                                  this.warp(this.drawPlatform)(-6, -3, 1, 1, 1);
                                  this.warp(this.drawPlatform)(-5, -3, 1, 1, 4);
                                  this.warp(this.drawPlatform)(-4, -3, 1, 1, 2);
                                  this.warp(this.drawPlatform)(-3, -3, 2, 1, 4);
                                  this.warp(this.drawPlatform)(-1, -3, 1, 1, 5);
                                  this.warp(this.drawPlatform)(0, -3, 1, 1, 1);
                                  this.warp(this.drawPlatform)(2, -3, 1, 1, 3);
                                  this.warp(this.drawPlatform)(3, -3, 2, 1, 1);
                                  this.warp(this.drawPlatform)(5, -3, 1, 1, 6);
                                  this.warp(this.drawPlatform)(6, -3, 1, 1, 5);
                                  this.warp(this.drawPlatform)(7, -3, 1, 1, 3);
                                  this.warp(this.drawPlatform)(8, -3, 1, 1, 4);
                                  this.warp(this.drawPlatform)(-9, -4, 1, 1, 3);
                                  this.warp(this.drawPlatform)(-8, -4, 1, 1, 5);
                                  this.warp(this.drawPlatform)(-7, -4, 1, 1, 2);
                                  this.warp(this.drawPlatform)(-6, -4, 1, 1, 5);
                                  this.warp(this.drawPlatform)(-5, -4, 2, 1, 3);
                                  this.warp(this.drawPlatform)(-3, -4, 2, 1, 1);
                                  this.warp(this.drawPlatform)(-1, -4, 1, 1, 3);
                                  this.warp(this.drawPlatform)(0, -4, 2, 1, 2);
                                  this.warp(this.drawPlatform)(2, -4, 1, 1, 5);
                                  this.warp(this.drawPlatform)(3, -4, 1, 1, 1);
                                  this.warp(this.drawPlatform)(4, -4, 2, 1, 4);
                                  this.warp(this.drawPlatform)(5, -4, 1, 1, 2);
                                  this.warp(this.drawPlatform)(7, -4, 2, 1, 1);
                                  this.warp(this.drawPlatform)(8, -4, 1, 1, 2);
                                  this.warp(this.drawPortal)(0, 0);
                                } else {
                                  this.warp(this.drawLevels1624)();
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    this.warp(this.drawRestBackground)();
  }

  *whenIReceive1win() {
    this.stage.vars.initX = this.itemOf(this.stage.vars.playerX, 0);
    this.stage.vars.initY = this.itemOf(this.stage.vars.playerY, 0);
    for (let i = 0; i < 10; i++) {
      this.stage.vars.playerX.splice(
        0,
        1,
        this.toNumber(this.itemOf(this.stage.vars.playerX, 0)) +
          (this.toNumber(this.stage.vars.portalX) -
            this.toNumber(this.stage.vars.initX)) /
            10
      );
      this.stage.vars.playerY.splice(
        0,
        1,
        this.toNumber(this.itemOf(this.stage.vars.playerY, 0)) +
          (this.toNumber(this.stage.vars.portalY) -
            this.toNumber(this.stage.vars.initY)) /
            10
      );
      yield;
    }
    this.stage.vars.playerX.splice(0, 1, this.stage.vars.portalX);
    this.stage.vars.playerY.splice(0, 1, this.stage.vars.portalY);
    for (let i = 0; i < 10; i++) {
      this.stage.vars.playerGhost.splice(
        0,
        1,
        this.toNumber(this.itemOf(this.stage.vars.playerGhost, 0)) + 10
      );
      yield;
    }
    this.broadcast("continue1");
  }

  *whenIReceiveContinue1() {
    if (
      this.compare(
        this.itemOf(
          this.stage.vars.inGamePlayers,
          this.indexInArray(this.stage.vars.inGamePlayers, 1)
        ),
        this.stage.vars.playerSelected
      ) === 0
    ) {
      this.stage.vars.lastPlayerSelected = this.stage.vars.playerSelected;
      this.stage.vars.inGamePlayers.splice(
        this.indexInArray(this.stage.vars.inGamePlayers, 1),
        1
      );
      this.stage.vars.playerSelected =
        (this.toNumber(this.stage.vars.playerSelected) % 3) + 1;
      if (
        !this.arrayIncludes(
          this.stage.vars.inGamePlayers,
          this.stage.vars.playerSelected
        )
      ) {
        this.stage.vars.playerSelected =
          (this.toNumber(this.stage.vars.playerSelected) % 3) + 1;
      }
      if (this.compare(this.stage.vars.inGamePlayers.length, 0) > 0) {
        if (!this.arrayIncludes(this.stage.vars.soundsPlayed, 2)) {
          this.stage.vars.soundsPlayed.push(2);
        }
        this.stage.vars.arrowGhost.splice(0, 1, 100);
        this.stage.vars.arrowGhost.splice(1, 1, 100);
        this.stage.vars.arrowGhost.splice(2, 1, 100);
        this.stage.vars.arrowGhost.splice(
          this.stage.vars.playerSelected - 1,
          1,
          0
        );
      }
    } else {
      this.stage.vars.inGamePlayers.splice(
        this.indexInArray(this.stage.vars.inGamePlayers, 1),
        1
      );
    }
  }

  *whenIReceive2win() {
    this.stage.vars.initX = this.itemOf(this.stage.vars.playerX, 1);
    this.stage.vars.initY = this.itemOf(this.stage.vars.playerY, 1);
    for (let i = 0; i < 10; i++) {
      this.stage.vars.playerX.splice(
        1,
        1,
        this.toNumber(this.itemOf(this.stage.vars.playerX, 1)) +
          (this.toNumber(this.stage.vars.portalX) -
            this.toNumber(this.stage.vars.initX)) /
            10
      );
      this.stage.vars.playerY.splice(
        1,
        1,
        this.toNumber(this.itemOf(this.stage.vars.playerY, 1)) +
          (this.toNumber(this.stage.vars.portalY) -
            this.toNumber(this.stage.vars.initY)) /
            10
      );
      yield;
    }
    this.stage.vars.playerX.splice(1, 1, this.stage.vars.portalX);
    this.stage.vars.playerY.splice(1, 1, this.stage.vars.portalY);
    for (let i = 0; i < 10; i++) {
      this.stage.vars.playerGhost.splice(
        1,
        1,
        this.toNumber(this.itemOf(this.stage.vars.playerGhost, 1)) + 10
      );
      yield;
    }
    this.broadcast("continue2");
  }

  *whenIReceiveContinue2() {
    if (
      this.compare(
        this.itemOf(
          this.stage.vars.inGamePlayers,
          this.indexInArray(this.stage.vars.inGamePlayers, 2)
        ),
        this.stage.vars.playerSelected
      ) === 0
    ) {
      this.stage.vars.lastPlayerSelected = this.stage.vars.playerSelected;
      this.stage.vars.inGamePlayers.splice(
        this.indexInArray(this.stage.vars.inGamePlayers, 2),
        1
      );
      this.stage.vars.playerSelected =
        (this.toNumber(this.stage.vars.playerSelected) % 3) + 1;
      if (
        !this.arrayIncludes(
          this.stage.vars.inGamePlayers,
          this.stage.vars.playerSelected
        )
      ) {
        this.stage.vars.playerSelected =
          (this.toNumber(this.stage.vars.playerSelected) % 3) + 1;
      }
      if (this.compare(this.stage.vars.inGamePlayers.length, 0) > 0) {
        if (!this.arrayIncludes(this.stage.vars.soundsPlayed, 2)) {
          this.stage.vars.soundsPlayed.push(2);
        }
        this.stage.vars.arrowGhost.splice(0, 1, 100);
        this.stage.vars.arrowGhost.splice(1, 1, 100);
        this.stage.vars.arrowGhost.splice(2, 1, 100);
        this.stage.vars.arrowGhost.splice(
          this.stage.vars.playerSelected - 1,
          1,
          0
        );
      }
    } else {
      this.stage.vars.inGamePlayers.splice(
        this.indexInArray(this.stage.vars.inGamePlayers, 2),
        1
      );
    }
  }

  *whenIReceive3win() {
    this.stage.vars.initX = this.itemOf(this.stage.vars.playerX, 2);
    this.stage.vars.initY = this.itemOf(this.stage.vars.playerY, 2);
    for (let i = 0; i < 10; i++) {
      this.stage.vars.playerX.splice(
        2,
        1,
        this.toNumber(this.itemOf(this.stage.vars.playerX, 2)) +
          (this.toNumber(this.stage.vars.portalX) -
            this.toNumber(this.stage.vars.initX)) /
            10
      );
      this.stage.vars.playerY.splice(
        2,
        1,
        this.toNumber(this.itemOf(this.stage.vars.playerY, 2)) +
          (this.toNumber(this.stage.vars.portalY) -
            this.toNumber(this.stage.vars.initY)) /
            10
      );
      yield;
    }
    this.stage.vars.playerX.splice(2, 1, this.stage.vars.portalX);
    this.stage.vars.playerY.splice(2, 1, this.stage.vars.portalY);
    for (let i = 0; i < 10; i++) {
      this.stage.vars.playerGhost.splice(
        2,
        1,
        this.toNumber(this.itemOf(this.stage.vars.playerGhost, 2)) + 10
      );
      yield;
    }
    this.broadcast("continue3");
  }

  *whenIReceiveContinue3() {
    if (
      this.compare(
        this.itemOf(
          this.stage.vars.inGamePlayers,
          this.indexInArray(this.stage.vars.inGamePlayers, 3)
        ),
        this.stage.vars.playerSelected
      ) === 0
    ) {
      this.stage.vars.lastPlayerSelected = this.stage.vars.playerSelected;
      this.stage.vars.inGamePlayers.splice(
        this.indexInArray(this.stage.vars.inGamePlayers, 3),
        1
      );
      this.stage.vars.playerSelected =
        (this.toNumber(this.stage.vars.playerSelected) % 3) + 1;
      if (
        !this.arrayIncludes(
          this.stage.vars.inGamePlayers,
          this.stage.vars.playerSelected
        )
      ) {
        this.stage.vars.playerSelected =
          (this.toNumber(this.stage.vars.playerSelected) % 3) + 1;
      }
      if (this.compare(this.stage.vars.inGamePlayers.length, 0) > 0) {
        if (!this.arrayIncludes(this.stage.vars.soundsPlayed, 2)) {
          this.stage.vars.soundsPlayed.push(2);
        }
        this.stage.vars.arrowGhost.splice(0, 1, 100);
        this.stage.vars.arrowGhost.splice(1, 1, 100);
        this.stage.vars.arrowGhost.splice(2, 1, 100);
        this.stage.vars.arrowGhost.splice(
          this.stage.vars.playerSelected - 1,
          1,
          0
        );
      }
    } else {
      this.stage.vars.inGamePlayers.splice(
        this.indexInArray(this.stage.vars.inGamePlayers, 3),
        1
      );
    }
  }

  *addToP1StartX() {
    this.stage.vars.p1StartX.push(-9);
    this.stage.vars.p1StartX.push(-2);
    this.stage.vars.p1StartX.push(-6);
    this.stage.vars.p1StartX.push(-8.1);
    this.stage.vars.p1StartX.push(0);
    this.stage.vars.p1StartX.push(-9);
    this.stage.vars.p1StartX.push(-10);
    this.stage.vars.p1StartX.push(-9);
    this.stage.vars.p1StartX.push(0.9);
    this.stage.vars.p1StartX.push(-4);
    this.stage.vars.p1StartX.push(-4);
    this.stage.vars.p1StartX.push(-9);
    this.stage.vars.p1StartX.push(-3);
    this.stage.vars.p1StartX.push(-9);
    this.stage.vars.p1StartX.push(-5.1);
    this.stage.vars.p1StartX.push(-8.1);
    this.stage.vars.p1StartX.push(-4);
    this.stage.vars.p1StartX.push(-7);
    this.stage.vars.p1StartX.push(-8);
    this.stage.vars.p1StartX.push(-8);
    this.stage.vars.p1StartX.push(10.9);
    this.stage.vars.p1StartX.push(-4);
    this.stage.vars.p1StartX.push(-0.6);
    this.stage.vars.p1StartX.push(-6);
  }

  *addToP1StartY() {
    this.stage.vars.p1StartY.push(1);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-5);
    this.stage.vars.p1StartY.push(-1);
    this.stage.vars.p1StartY.push(0);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(0);
    this.stage.vars.p1StartY.push(0);
    this.stage.vars.p1StartY.push(-4.5);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-1);
    this.stage.vars.p1StartY.push(-1);
    this.stage.vars.p1StartY.push(-7);
    this.stage.vars.p1StartY.push(-7);
  }

  *addToP2StartX() {
    this.stage.vars.p2StartX.push(-9);
    this.stage.vars.p2StartX.push(0);
    this.stage.vars.p2StartX.push(2);
    this.stage.vars.p2StartX.push(-7);
    this.stage.vars.p2StartX.push(-9);
    this.stage.vars.p2StartX.push(-9);
    this.stage.vars.p2StartX.push(10);
    this.stage.vars.p2StartX.push(10);
    this.stage.vars.p2StartX.push(2);
    this.stage.vars.p2StartX.push(0);
    this.stage.vars.p2StartX.push(0.5);
    this.stage.vars.p2StartX.push(0);
    this.stage.vars.p2StartX.push(4);
    this.stage.vars.p2StartX.push(10);
    this.stage.vars.p2StartX.push(6);
    this.stage.vars.p2StartX.push(-7);
    this.stage.vars.p2StartX.push(1);
    this.stage.vars.p2StartX.push(-5);
    this.stage.vars.p2StartX.push(0.5);
    this.stage.vars.p2StartX.push(6);
    this.stage.vars.p2StartX.push(6);
    this.stage.vars.p2StartX.push(-10);
    this.stage.vars.p2StartX.push(0.5);
    this.stage.vars.p2StartX.push(5);
  }

  *addToP2StartY() {
    this.stage.vars.p2StartY.push(-3);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(3);
    this.stage.vars.p2StartY.push(-1);
    this.stage.vars.p2StartY.push(-1);
    this.stage.vars.p2StartY.push(0);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(0);
    this.stage.vars.p2StartY.push(0);
    this.stage.vars.p2StartY.push(3);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(-4);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(-7);
    this.stage.vars.p2StartY.push(-7);
  }

  *addToP3StartX() {
    this.stage.vars.p3StartX.push(-9);
    this.stage.vars.p3StartX.push(2);
    this.stage.vars.p3StartX.push(-2);
    this.stage.vars.p3StartX.push(-5.9);
    this.stage.vars.p3StartX.push(10);
    this.stage.vars.p3StartX.push(-2);
    this.stage.vars.p3StartX.push(1);
    this.stage.vars.p3StartX.push(5);
    this.stage.vars.p3StartX.push(3.1);
    this.stage.vars.p3StartX.push(4);
    this.stage.vars.p3StartX.push(4);
    this.stage.vars.p3StartX.push(10);
    this.stage.vars.p3StartX.push(0);
    this.stage.vars.p3StartX.push(0.95);
    this.stage.vars.p3StartX.push(7);
    this.stage.vars.p3StartX.push(-5.9);
    this.stage.vars.p3StartX.push(5);
    this.stage.vars.p3StartX.push(-3);
    this.stage.vars.p3StartX.push(9);
    this.stage.vars.p3StartX.push(-3);
    this.stage.vars.p3StartX.push(-2);
    this.stage.vars.p3StartX.push(-8);
    this.stage.vars.p3StartX.push(1.6);
    this.stage.vars.p3StartX.push(8);
  }

  *addToP3StartY() {
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-4);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(0);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-5);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-1);
    this.stage.vars.p3StartY.push(-7);
    this.stage.vars.p3StartY.push(-7);
  }

  *drawTransition() {
    if (
      this.compare(
        Math.floor(this.toNumber(this.stage.vars.transitionVal)),
        0
      ) > 0
    ) {
      this.penColor = Color.rgb(47, 47, 47);
      this.stage.vars.i9 = 0;
      for (let i = 0; i < 9; i++) {
        this.warp(this.drawRect)(
          -240,
          180 - 20 * this.toNumber(this.stage.vars.i9),
          this.stage.vars.transitionVal,
          20,
          0
        );
        this.stage.vars.i9 += 2;
      }
      this.stage.vars.i9 = 1;
      for (let i = 0; i < 9; i++) {
        this.warp(this.drawRect)(
          240 - this.toNumber(this.stage.vars.transitionVal),
          180 - 20 * this.toNumber(this.stage.vars.i9),
          this.stage.vars.transitionVal,
          20,
          0
        );
        this.stage.vars.i9 += 2;
      }
    }
  }

  *whenIReceiveTransition() {
    while (
      !!(
        this.compare(
          Math.round(this.toNumber(this.stage.vars.transitionVal)),
          480
        ) < 0
      )
    ) {
      this.stage.vars.transitionVal +=
        (480 - this.toNumber(this.stage.vars.transitionVal)) / 5;
      yield;
    }
    yield* this.wait(0.05);
    this.stage.vars.level++;
    if (
      this.compare(this.stage.vars.level, this.stage.vars.levelsUnlocked) > 0
    ) {
      this.stage.vars.levelsUnlocked = this.stage.vars.level;
    }
    yield* this.reset();
    yield* this.wait(0.05);
    this.stage.vars.arrowGhost.splice(0, 1, 0);
    while (!!(this.compare(this.stage.vars.transitionVal, 0) > 0)) {
      this.stage.vars.transitionVal += Math.floor(
        (0 - this.toNumber(this.stage.vars.transitionVal)) / 5
      );
      yield;
    }
    this.stage.vars.transitionVal = 0;
  }

  *drawTriangle(x, y, len, hei, xDir, yDir, size) {
    this.stage.vars.i10 = 0;
    for (let i = 0; i < this.toNumber(len); i++) {
      this.warp(this.drawLine)(
        this.toNumber(x) +
          this.toNumber(this.stage.vars.i10) * this.toNumber(xDir),
        this.toNumber(y) +
          this.toNumber(hei) * this.toNumber(yDir) -
          (this.toNumber(hei) / this.toNumber(len)) *
            this.toNumber(this.stage.vars.i10) *
            this.toNumber(yDir),
        this.toNumber(x) +
          this.toNumber(this.stage.vars.i10) * this.toNumber(xDir),
        y,
        size
      );
      this.stage.vars.i10++;
    }
    this.warp(this.drawLine)(
      this.toNumber(x) + this.toNumber(len) * this.toNumber(xDir),
      y,
      x,
      this.toNumber(y) + this.toNumber(hei) * this.toNumber(yDir),
      size
    );
  }

  *drawLockedPlatform(x, y, length, height, color) {
    if (
      this.toNumber(
        this.itemOf(this.stage.vars.unlocked, this.toNumber(color))
      ) === 0
    ) {
      this.stage.vars.platformType.push(1);
      this.stage.vars.platformX.push(this.toNumber(x) * 20 - 1);
      this.stage.vars.platformY.push(this.toNumber(y) * 20);
      this.stage.vars.platformLength.push(this.toNumber(length) * 20);
      this.stage.vars.platformHeight.push(this.toNumber(height) * 20);
      this.stage.vars.platformColor.push(color);
    }
    this.stage.vars.i7 = 0;
    for (let i = 0; i < this.toNumber(length); i++) {
      this.stage.vars.i8 = 0;
      for (let i = 0; i < this.toNumber(height); i++) {
        if (this.toNumber(color) === 0) {
          this.penColor = Color.rgb(107, 107, 107);
        } else {
          if (this.toNumber(color) === 1) {
            this.penColor = Color.rgb(107, 27, 27);
          } else {
            if (this.toNumber(color) === 2) {
              this.penColor = Color.rgb(27, 107, 33);
            } else {
              if (this.toNumber(color) === 3) {
                this.penColor = Color.rgb(32, 27, 107);
              } else {
                if (this.toNumber(color) === 4) {
                  this.penColor = Color.rgb(107, 100, 27);
                } else {
                  if (this.toNumber(color) === 5) {
                    this.penColor = Color.rgb(27, 107, 107);
                  } else {
                    this.penColor = Color.rgb(107, 27, 104);
                  }
                }
              }
            }
          }
        }
        if (
          !(
            this.toNumber(
              this.itemOf(
                this.stage.vars.lockedPlatformFrame,
                this.toNumber(color)
              )
            ) === 10
          )
        ) {
          yield* this.drawRect(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 -
              1 +
              this.toNumber(
                this.itemOf(
                  this.stage.vars.lockedPlatformFrame,
                  this.toNumber(color)
                )
              ),
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 -
              this.toNumber(
                this.itemOf(
                  this.stage.vars.lockedPlatformFrame,
                  this.toNumber(color)
                )
              ),
            20 -
              2 *
                this.toNumber(
                  this.itemOf(
                    this.stage.vars.lockedPlatformFrame,
                    this.toNumber(color)
                  )
                ),
            20 -
              2 *
                this.toNumber(
                  this.itemOf(
                    this.stage.vars.lockedPlatformFrame,
                    this.toNumber(color)
                  )
                ),
            10 -
              this.toNumber(
                this.itemOf(
                  this.stage.vars.lockedPlatformFrame,
                  this.toNumber(color)
                )
              )
          );
          this.penColor.v = 78;
          yield* this.drawRect(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 +
              this.toNumber(
                this.itemOf(
                  this.stage.vars.lockedPlatformFrame,
                  this.toNumber(color)
                )
              ),
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 -
              1 -
              this.toNumber(
                this.itemOf(
                  this.stage.vars.lockedPlatformFrame,
                  this.toNumber(color)
                )
              ),
            (18 -
              2 *
                this.toNumber(
                  this.itemOf(
                    this.stage.vars.lockedPlatformFrame,
                    this.toNumber(color)
                  )
                )) *
              this.toNumber(
                this.compare(
                  this.itemOf(
                    this.stage.vars.lockedPlatformFrame,
                    this.toNumber(color)
                  ),
                  10
                ) < 0
              ),
            (18 -
              2 *
                this.toNumber(
                  this.itemOf(
                    this.stage.vars.lockedPlatformFrame,
                    this.toNumber(color)
                  )
                )) *
              this.toNumber(
                this.compare(
                  this.itemOf(
                    this.stage.vars.lockedPlatformFrame,
                    this.toNumber(color)
                  ),
                  10
                ) < 0
              ),
            10 -
              this.toNumber(
                this.itemOf(
                  this.stage.vars.lockedPlatformFrame,
                  this.toNumber(color)
                )
              )
          );
        }
        if (
          this.toNumber(
            this.itemOf(this.stage.vars.unlocked, this.toNumber(color))
          ) === 0
        ) {
          this.penColor.v = 41;
          yield* this.drawLine(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 9,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 6,
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 9,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 8,
            8
          );
          this.penColor.v = 78;
          yield* this.drawLine(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 9,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 6,
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 9,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 8,
            4
          );
          this.penColor.v = 41;
          yield* this.drawRect(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 4,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 8,
            10,
            9,
            4
          );
          this.penColor.v = 78;
          yield* this.drawCircle(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 9,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 11.5,
            3.5
          );
          yield* this.drawLine(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 9,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 12,
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 9,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 14,
            2
          );
        }
        this.stage.vars.i8++;
        yield;
      }
      this.stage.vars.i7++;
      yield;
    }
  }

  *drawOval(x, y, a, b, initDeg, finDeg, filled) {
    this.penDown = false;
    this.stage.vars.i11 = initDeg;
    for (
      let i = 0;
      i < (this.toNumber(finDeg) - this.toNumber(initDeg)) / 15 + 1;
      i++
    ) {
      if (this.toNumber(filled) === 1) {
        this.goto(this.toNumber(x), this.toNumber(y));
        this.penDown = true;
        this.goto(
          this.toNumber(x) +
            Math.cos(this.degToRad(this.toNumber(this.stage.vars.i11))) *
              this.toNumber(a),
          this.toNumber(y) +
            Math.sin(this.degToRad(this.toNumber(this.stage.vars.i11))) *
              this.toNumber(b)
        );
      } else {
        this.goto(
          this.toNumber(x) +
            Math.cos(this.degToRad(this.toNumber(this.stage.vars.i11))) *
              this.toNumber(a),
          this.toNumber(y) +
            Math.sin(this.degToRad(this.toNumber(this.stage.vars.i11))) *
              this.toNumber(b)
        );
        this.penDown = true;
      }
      this.stage.vars.i11 += 15;
    }
    this.penDown = false;
  }

  *drawKeyAt(x, y, color) {
    if (
      this.toNumber(
        this.itemOf(this.stage.vars.unlocked, this.toNumber(color))
      ) === 0
    ) {
      this.stage.vars.platformType.push(2);
      this.stage.vars.platformX.push(this.toNumber(x) * 20);
      this.stage.vars.platformY.push(this.toNumber(y) * 20);
      this.stage.vars.platformLength.push(40);
      this.stage.vars.platformHeight.push(20);
      this.stage.vars.platformColor.push(color);
      if (this.toNumber(color) === 0) {
        this.penColor = Color.rgb(107, 107, 107);
      } else {
        if (this.toNumber(color) === 1) {
          this.penColor = Color.rgb(107, 27, 27);
        } else {
          if (this.toNumber(color) === 2) {
            this.penColor = Color.rgb(27, 107, 33);
          } else {
            if (this.toNumber(color) === 3) {
              this.penColor = Color.rgb(32, 27, 107);
            } else {
              if (this.toNumber(color) === 4) {
                this.penColor = Color.rgb(107, 100, 27);
              } else {
                if (this.toNumber(color) === 5) {
                  this.penColor = Color.rgb(27, 107, 107);
                } else {
                  this.penColor = Color.rgb(107, 27, 104);
                }
              }
            }
          }
        }
      }
      this.penColor.v = 78;
      this.penSize = 2;
      this.warp(this.drawOval)(
        this.toNumber(x) * 20 + 8,
        this.toNumber(y) * 20 - 9.5,
        6,
        7.5,
        0,
        360,
        0
      );
      this.warp(this.drawLine)(
        this.toNumber(x) * 20 + 14,
        this.toNumber(y) * 20 - 10,
        this.toNumber(x) * 20 + 36,
        this.toNumber(y) * 20 - 10,
        3
      );
      this.warp(this.drawLine)(
        this.toNumber(x) * 20 + 21,
        this.toNumber(y) * 20 - 10,
        this.toNumber(x) * 20 + 21,
        this.toNumber(y) * 20 - 15,
        3
      );
      this.warp(this.drawLine)(
        this.toNumber(x) * 20 + 25,
        this.toNumber(y) * 20 - 10,
        this.toNumber(x) * 20 + 25,
        this.toNumber(y) * 20 - 12,
        3
      );
      this.warp(this.drawLine)(
        this.toNumber(x) * 20 + 29,
        this.toNumber(y) * 20 - 10,
        this.toNumber(x) * 20 + 29,
        this.toNumber(y) * 20 - 15,
        3
      );
      this.warp(this.drawLine)(
        this.toNumber(x) * 20 + 33,
        this.toNumber(y) * 20 - 10,
        this.toNumber(x) * 20 + 33,
        this.toNumber(y) * 20 - 12,
        3
      );
    }
  }

  *whenKeyLPressed() {
    if (/* no username */ "" === "haxroyale_l12") {
      yield* this.askAndWait("Level?");
      this.stage.vars.level = this.answer;
      this.stage.vars.levelsUnlocked = this.answer;
      yield* this.reset();
    }
  }

  *whenIReceiveLockAnimation() {
    for (let i = 0; i < 5; i++) {
      this.stage.vars.lockedPlatformFrame.splice(
        this.stage.vars.keyColor - 1,
        1,
        this.toNumber(
          this.itemOf(
            this.stage.vars.lockedPlatformFrame,
            this.stage.vars.keyColor - 1
          )
        ) + 2
      );
      yield;
    }
  }

  *drawFragileBlocks(x, y, length, height, color) {
    this.stage.vars.i7 = 0;
    for (let i = 0; i < this.toNumber(length); i++) {
      this.stage.vars.i8 = 0;
      for (let i = 0; i < this.toNumber(height); i++) {
        this.stage.vars.i12++;
        if (
          !(
            this.toNumber(
              this.itemOf(
                this.stage.vars.collideBoxData,
                this.stage.vars.i12 - 1
              )
            ) === 10
          )
        ) {
          this.stage.vars.platformType.push(1);
          this.stage.vars.platformX.push(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20
          );
          this.stage.vars.platformY.push(
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20
          );
          this.stage.vars.platformLength.push(20);
          this.stage.vars.platformHeight.push(20);
          this.stage.vars.platformColor.push(color);
          if (
            this.compare(
              this.stage.vars.collideBoxData.length,
              this.stage.vars.i12
            ) < 0
          ) {
            this.stage.vars.collideBoxData.push(0);
          }
          if (this.toNumber(color) === 0) {
            this.warp(this.boxCollide)(x, y, 1);
            this.warp(this.boxCollide)(x, y, 2);
            this.warp(this.boxCollide)(x, y, 3);
            this.penColor = Color.rgb(107, 107, 107);
          } else {
            if (this.toNumber(color) === 1) {
              this.warp(this.boxCollide)(x, y, 1);
              this.penColor = Color.rgb(107, 27, 27);
            } else {
              if (this.toNumber(color) === 2) {
                this.warp(this.boxCollide)(x, y, 2);
                this.penColor = Color.rgb(27, 107, 33);
              } else {
                if (this.toNumber(color) === 3) {
                  this.warp(this.boxCollide)(x, y, 3);
                  this.penColor = Color.rgb(32, 27, 107);
                } else {
                  if (this.toNumber(color) === 4) {
                    if (this.toNumber(this.stage.vars.playerSelected) === 1) {
                      this.warp(this.boxCollide)(x, y, 1);
                    }
                    if (this.toNumber(this.stage.vars.playerSelected) === 2) {
                      this.warp(this.boxCollide)(x, y, 2);
                    }
                    this.penColor = Color.rgb(107, 100, 27);
                  } else {
                    if (this.toNumber(color) === 5) {
                      if (this.toNumber(this.stage.vars.playerSelected) === 2) {
                        this.warp(this.boxCollide)(x, y, 2);
                      }
                      if (this.toNumber(this.stage.vars.playerSelected) === 3) {
                        this.warp(this.boxCollide)(x, y, 3);
                      }
                      this.penColor = Color.rgb(27, 107, 107);
                    } else {
                      if (this.toNumber(this.stage.vars.playerSelected) === 1) {
                        this.warp(this.boxCollide)(x, y, 1);
                      }
                      if (this.toNumber(this.stage.vars.playerSelected) === 3) {
                        this.warp(this.boxCollide)(x, y, 3);
                      }
                      this.penColor = Color.rgb(107, 27, 104);
                    }
                  }
                }
              }
            }
          }
          this.warp(this.drawRect)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 - 1,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20,
            20,
            20,
            10
          );
          this.penColor.v = 78;
          this.warp(this.drawRect)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 1,
            18,
            18,
            10
          );
          this.penColor.v = 41;
          this.warp(this.drawCircle)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 9,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 10,
            12
          );
          this.penColor = Color.rgb(23, 23, 23);
          this.warp(this.drawCircle)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 9,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 10,
            9
          );
          this.stage.vars.i8++;
        }
      }
      this.stage.vars.i7++;
    }
  }

  *rectCollision(x1, y1, x2, y2, x3, y3, x4, y4) {
    this.stage.vars.collision2 = 0;
    if (this.compare(x1, x4) < 0) {
      if (this.compare(x3, x2) < 0) {
        if (this.compare(y4, y1) < 0) {
          if (this.compare(y2, y3) < 0) {
            this.stage.vars.collision2 = 1;
          }
        }
      }
    }
  }

  *boxCollide(x, y, color) {
    this.warp(this.rectCollision)(
      (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 - 0,
      (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 + 1,
      (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 20 - 0,
      (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 20 + -1,
      this.toNumber(this.itemOf(this.stage.vars.playerX, color - 1)) - 9,
      this.toNumber(this.itemOf(this.stage.vars.playerY, color - 1)) + 9.5,
      this.toNumber(this.itemOf(this.stage.vars.playerX, color - 1)) - -9,
      this.toNumber(this.itemOf(this.stage.vars.playerY, color - 1)) + -9.5
    );
    if (this.toNumber(this.stage.vars.collision2) === 0) {
      if (this.compare(this.itemOf(this.stage.vars.inAir, color - 1), 3) > 0) {
        if (
          this.compare(this.itemOf(this.stage.vars.playerSy, color - 1), 0) > 0
        ) {
          if (
            this.compare(
              Math.abs(
                this.toNumber(this.itemOf(this.stage.vars.playerSx, color - 1))
              ),
              0
            ) > 0
          ) {
            this.warp(this.rectCollision)(
              (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 - 1.5,
              (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 + 0,
              (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 +
                20 -
                -1.5,
              (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 -
                20 +
                0,
              this.toNumber(this.itemOf(this.stage.vars.playerX, color - 1)) -
                9,
              this.toNumber(this.itemOf(this.stage.vars.playerY, color - 1)) +
                9.5,
              this.toNumber(this.itemOf(this.stage.vars.playerX, color - 1)) -
                -9,
              this.toNumber(this.itemOf(this.stage.vars.playerY, color - 1)) +
                -9.5
            );
          }
        }
      }
    } else {
      null;
    }
    if (this.toNumber(this.stage.vars.collision2) === 1) {
      this.stage.vars.collideBoxData.splice(
        this.stage.vars.i12 - 1,
        1,
        this.letterOf(
          this.itemOf(this.stage.vars.collideBoxData, this.stage.vars.i12 - 1),
          1
        ) + "1"
      );
    } else {
      this.stage.vars.collideBoxData.splice(
        this.stage.vars.i12 - 1,
        1,
        this.letterOf(
          this.itemOf(this.stage.vars.collideBoxData, this.stage.vars.i12 - 1),
          1
        ) + "0"
      );
    }
    if (
      this.toNumber(
        this.itemOf(this.stage.vars.collideBoxData, this.stage.vars.i12 - 1)
      ) === 10
    ) {
      if (!this.arrayIncludes(this.stage.vars.soundsPlayed, 6)) {
        this.stage.vars.soundsPlayed.push(6);
      }
    }
  }

  *drawThroughBlocks(x, y, length, color) {
    this.stage.vars.platformType.push(3);
    this.stage.vars.platformX.push(this.toNumber(x) * 20 - -0.5);
    this.stage.vars.platformY.push(this.toNumber(y) * 20);
    this.stage.vars.platformLength.push(this.toNumber(length) * 20 - 1);
    this.stage.vars.platformHeight.push(-7);
    this.stage.vars.platformColor.push(color);
    this.stage.vars.i7 = 0;
    for (let i = 0; i < this.toNumber(length); i++) {
      if (this.toNumber(color) === 0) {
        this.penColor = Color.rgb(107, 107, 107);
      } else {
        if (this.toNumber(color) === 1) {
          this.penColor = Color.rgb(107, 27, 27);
        } else {
          if (this.toNumber(color) === 2) {
            this.penColor = Color.rgb(27, 107, 33);
          } else {
            if (this.toNumber(color) === 3) {
              this.penColor = Color.rgb(32, 27, 107);
            } else {
              if (this.toNumber(color) === 4) {
                this.penColor = Color.rgb(107, 100, 27);
              } else {
                if (this.toNumber(color) === 5) {
                  this.penColor = Color.rgb(27, 107, 107);
                } else {
                  this.penColor = Color.rgb(107, 27, 104);
                }
              }
            }
          }
        }
        this.warp(this.drawRect)(
          (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 - 1,
          this.toNumber(y) * 20,
          20,
          8,
          8
        );
        this.penColor.v = 78;
        this.warp(this.drawRect)(
          (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20,
          this.toNumber(y) * 20 - 1,
          18,
          6,
          6
        );
      }
      this.stage.vars.i7++;
    }
  }

  *drawOutlinedCircle(x, y, r, deg1, deg2) {
    this.stage.vars.i11 = deg1;
    for (
      let i = 0;
      i < (this.toNumber(deg2) - this.toNumber(deg1)) / 15 + 1;
      i++
    ) {
      this.penDown = false;
      this.goto(
        this.toNumber(x) +
          Math.cos(this.degToRad(this.toNumber(this.stage.vars.i11))) *
            this.toNumber(r),
        this.toNumber(y) +
          Math.sin(this.degToRad(this.toNumber(this.stage.vars.i11))) *
            this.toNumber(r)
      );
      this.penDown = true;
      this.penDown = false;
      this.stage.vars.i11 += 15;
    }
  }

  *drawInvisPlatform(x, y, length, height, color) {
    if (
      this.toNumber(
        this.itemOf(this.stage.vars.notInvis, this.toNumber(color))
      ) === 1
    ) {
      this.stage.vars.platformType.push(1);
      this.stage.vars.platformX.push(this.toNumber(x) * 20 - 1);
      this.stage.vars.platformY.push(this.toNumber(y) * 20);
      this.stage.vars.platformLength.push(this.toNumber(length) * 20);
      this.stage.vars.platformHeight.push(this.toNumber(height) * 20);
      this.stage.vars.platformColor.push(color);
    }
    this.stage.vars.i7 = 0;
    for (let i = 0; i < this.toNumber(length); i++) {
      this.stage.vars.i8 = 0;
      for (let i = 0; i < this.toNumber(height); i++) {
        if (this.toNumber(color) === 0) {
          this.penColor = Color.rgb(107, 107, 107);
        } else {
          if (this.toNumber(color) === 1) {
            this.penColor = Color.rgb(107, 27, 27);
          } else {
            if (this.toNumber(color) === 2) {
              this.penColor = Color.rgb(27, 107, 33);
            } else {
              if (this.toNumber(color) === 3) {
                this.penColor = Color.rgb(32, 27, 107);
              } else {
                if (this.toNumber(color) === 4) {
                  this.penColor = Color.rgb(107, 100, 27);
                } else {
                  if (this.toNumber(color) === 5) {
                    this.penColor = Color.rgb(27, 107, 107);
                  } else {
                    this.penColor = Color.rgb(107, 27, 104);
                  }
                }
              }
            }
          }
        }
        if (
          this.toNumber(
            this.itemOf(this.stage.vars.notInvis, this.toNumber(color))
          ) === 0
        ) {
          this.penColor.v = 78;
          this.penSize = 2;
          this.warp(this.drawOutlinedCircle)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 3,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 4,
            3,
            90,
            180
          );
          this.warp(this.drawLine)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 7,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 1,
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 11,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 1,
            2
          );
          this.warp(this.drawOutlinedCircle)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 15,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 4,
            3,
            0,
            90
          );
          this.warp(this.drawLine)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 18,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 8,
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 18,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 12,
            2
          );
          this.warp(this.drawOutlinedCircle)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 15,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 16,
            3,
            270,
            360
          );
          this.warp(this.drawLine)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 7,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 19,
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 11,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 19,
            2
          );
          this.warp(this.drawOutlinedCircle)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 3,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 16,
            3,
            180,
            270
          );
          this.warp(this.drawLine)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 0,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 8,
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 + 0,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 12,
            2
          );
        } else {
          this.warp(this.drawRect)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20 - 1,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20,
            20,
            20,
            10
          );
          this.penColor.v = 78;
          this.warp(this.drawRect)(
            (this.toNumber(x) + this.toNumber(this.stage.vars.i7)) * 20,
            (this.toNumber(y) - this.toNumber(this.stage.vars.i8)) * 20 - 1,
            18,
            18,
            10
          );
        }
        this.stage.vars.i8++;
      }
      this.stage.vars.i7++;
    }
  }

  *drawInvisActivator(x, y, color) {
    this.stage.vars.platformType.push(4);
    this.stage.vars.platformX.push(this.toNumber(x) * 20);
    this.stage.vars.platformY.push(this.toNumber(y) * 20 - 10);
    this.stage.vars.platformLength.push(20);
    this.stage.vars.platformHeight.push(10);
    this.stage.vars.platformColor.push(color);
    if (this.toNumber(color) === 0) {
      this.penColor = Color.rgb(107, 107, 107);
    } else {
      if (this.toNumber(color) === 1) {
        this.penColor = Color.rgb(107, 27, 27);
      } else {
        if (this.toNumber(color) === 2) {
          this.penColor = Color.rgb(27, 107, 33);
        } else {
          if (this.toNumber(color) === 3) {
            this.penColor = Color.rgb(32, 27, 107);
          } else {
            if (this.toNumber(color) === 4) {
              this.penColor = Color.rgb(107, 100, 27);
            } else {
              if (this.toNumber(color) === 5) {
                this.penColor = Color.rgb(27, 107, 107);
              } else {
                this.penColor = Color.rgb(107, 27, 104);
              }
            }
          }
        }
      }
    }
    this.penColor.v = 78;
    this.penSize = 3;
    if (
      this.toNumber(
        this.itemOf(this.stage.vars.notInvis, this.toNumber(color))
      ) === 0
    ) {
      this.warp(this.drawOval)(
        this.toNumber(x) * 20 + 9,
        this.toNumber(y) * 20 - 19,
        8,
        5,
        0,
        180,
        1
      );
    } else {
      this.warp(this.drawOval)(
        this.toNumber(x) * 20 + 9,
        this.toNumber(y) * 20 - 19,
        8,
        2,
        0,
        180,
        1
      );
    }
    this.penColor.v = 41;
    this.warp(this.drawLine)(
      this.toNumber(x) * 20,
      this.toNumber(y) * 20 - 19,
      this.toNumber(x) * 20 + 19,
      this.toNumber(y) * 20 - 19,
      2
    );
  }

  *drawTramp(x, y, color) {
    this.stage.vars.i12++;
    this.stage.vars.platformType.push(1);
    this.stage.vars.platformX.push(this.toNumber(x) * 20 - 1);
    this.stage.vars.trampX.push(this.toNumber(x) * 20);
    this.stage.vars.platformY.push(this.toNumber(y) * 20);
    this.stage.vars.trampY.push(this.toNumber(y) * 20);
    this.stage.vars.platformLength.push(20);
    this.stage.vars.platformHeight.push(20);
    this.stage.vars.trampColor.push(color);
    this.stage.vars.platformColor.push(color);
    if (
      this.compare(this.stage.vars.trampBounce.length, this.stage.vars.i12) < 0
    ) {
      this.stage.vars.increasingTramp.push(0);
      this.stage.vars.trampBounce.push(0);
    }
    if (this.toNumber(color) === 0) {
      this.penColor = Color.rgb(107, 107, 107);
    } else {
      if (this.toNumber(color) === 1) {
        this.penColor = Color.rgb(107, 27, 27);
      } else {
        if (this.toNumber(color) === 2) {
          this.penColor = Color.rgb(27, 107, 33);
        } else {
          if (this.toNumber(color) === 3) {
            this.penColor = Color.rgb(32, 27, 107);
          } else {
            if (this.toNumber(color) === 4) {
              this.penColor = Color.rgb(107, 100, 27);
            } else {
              if (this.toNumber(color) === 5) {
                this.penColor = Color.rgb(27, 107, 107);
              } else {
                this.penColor = Color.rgb(107, 27, 104);
              }
            }
          }
        }
      }
    }
    if (
      this.toNumber(
        this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
      ) === 0
    ) {
      if (!(this.toNumber(color) === 0)) {
        this.penColor.s = 74;
      }
      this.stage.vars.brit = 0;
    } else {
      if (!(this.toNumber(color) === 0)) {
        this.penColor.s = 50;
      }
      this.stage.vars.brit = 20;
    }
    this.warp(this.drawRect)(
      this.toNumber(x) * 20 - 1,
      this.toNumber(y) * 20 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ),
      20,
      20 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ),
      10
    );
    this.penColor.v = 78 + this.toNumber(this.stage.vars.brit);
    this.warp(this.drawRect)(
      this.toNumber(x) * 20,
      this.toNumber(y) * 20 -
        1 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ),
      18,
      18 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ),
      10
    );
    this.penColor.v = 41 + this.toNumber(this.stage.vars.brit);
    this.warp(this.drawRect)(
      this.toNumber(x) * 20 + 6,
      this.toNumber(y) * 20 -
        6 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ),
      6,
      11 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ),
      2
    );
    this.warp(this.drawTriangle)(
      this.toNumber(x) * 20 + 9,
      this.toNumber(y) * 20 -
        10 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ) /
          2,
      6,
      5 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ) /
          2,
      1,
      1,
      0
    );
    this.warp(this.drawTriangle)(
      this.toNumber(x) * 20 + 8,
      this.toNumber(y) * 20 -
        10 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ) /
          2,
      6,
      5 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ) /
          2,
      -1,
      1,
      0
    );
    this.warp(this.drawLine)(
      this.toNumber(x) * 20 + 9,
      this.toNumber(y) * 20 -
        4 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ),
      this.toNumber(x) * 20 + 15,
      this.toNumber(y) * 20 -
        10 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ) /
          2,
      1
    );
    this.warp(this.drawLine)(
      this.toNumber(x) * 20 + 8,
      this.toNumber(y) * 20 -
        4 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ),
      this.toNumber(x) * 20 + 2,
      this.toNumber(y) * 20 -
        10 -
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i12 - 1)
        ) /
          2,
      1
    );
  }

  *drawLevels1624() {
    if (this.toNumber(this.stage.vars.level) === 16) {
      this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
      this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
      this.warp(this.drawPlatform)(-12.2, 5, 1.2, 14.5, 0);
      this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
      this.warp(this.drawPlatform)(-12, 5, 12, 1, 0);
      this.warp(this.drawPlatform)(-1, 7.25, 1, 3, 0);
      this.warp(this.drawTramp)(-9, -4, 1);
      this.warp(this.drawTramp)(-8, -4, 2);
      this.warp(this.drawTramp)(-7, -4, 3);
      this.warp(this.drawTramp)(-5, -3, 5);
      this.warp(this.drawTramp)(-2, -3, 6);
      this.warp(this.drawTramp)(1, -3, 4);
      this.warp(this.drawPlatform)(5, 2, 2, 1, 1);
      this.warp(this.drawPlatform)(5, 0, 2, 1, 2);
      this.warp(this.drawPlatform)(5, -2, 2, 1, 3);
      this.warp(this.drawPlatform)(8, 0, 1, 1, 3);
      this.warp(this.drawPlatform)(8, 2, 1, 1, 2);
      this.warp(this.drawPlatform)(10, 2, 1, 1, 3);
      this.warp(this.drawThroughBlocks)(10, 4, 1, 3);
      this.warp(this.drawThroughBlocks)(2, 5, 3, 2);
      this.warp(this.drawThroughBlocks)(2, 6, 9, 3);
      this.warp(this.drawPortal)(1, 6);
    } else {
      if (this.toNumber(this.stage.vars.level) === 17) {
        this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
        this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
        this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
        this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
        this.warp(this.drawPlatform)(-2, 7.25, 1, 5.25, 0);
        this.warp(this.drawPlatform)(1, 7.25, 1, 5.25, 0);
        this.warp(this.drawPlatform)(-3, -4, 1, 1, 0);
        this.warp(this.drawPlatform)(2, -4, 1, 1, 0);
        this.warp(this.drawTramp)(-1, -1, 0);
        this.warp(this.drawTramp)(0, -1, 0);
        this.warp(this.drawPlatform)(-11, -4, 1, 1, 1);
        this.warp(this.drawPlatform)(-10, -1, 1, 1, 1);
        this.warp(this.drawPlatform)(-9, 2, 1, 1, 1);
        this.warp(this.drawPlatform)(-8, 5, 2, 1, 1);
        this.warp(this.drawPlatform)(-5, 7, 1, 1, 1);
        this.warp(this.drawPlatform)(-5, -1, 1, 1, 2);
        this.warp(this.drawPlatform)(4, -1, 1, 1, 2);
        this.warp(this.drawPlatform)(-3, 2, 1, 1, 2);
        this.warp(this.drawPlatform)(2, 2, 1, 1, 2);
        this.warp(this.drawPlatform)(7, -6, 1, 1, 3);
        this.warp(this.drawPlatform)(10, -2, 1, 1, 3);
        this.warp(this.drawPlatform)(8, 1, 1, 1, 3);
        this.warp(this.drawPlatform)(10, 4, 1, 1, 3);
        this.warp(this.drawLockedPlatform)(8, -6, 1, 1, 1);
        this.warp(this.drawLockedPlatform)(-4, 6, 2, 1, 2);
        this.warp(this.drawLockedPlatform)(7, 4, 3, 1, 3);
        this.warp(this.drawLockedPlatform)(-1, 5, 2, 1, 4);
        this.warp(this.drawLockedPlatform)(-1, 4, 2, 1, 5);
        this.warp(this.drawLockedPlatform)(-1, 3, 2, 1, 6);
        this.warp(this.drawLockedPlatform)(7, -5, 4, 1, 6);
        this.warp(this.drawLockedPlatform)(10, 5, 1, 1, 6);
        this.warp(this.drawKeyAt)(-8, 6, 1);
        this.warp(this.drawKeyAt)(2, 7, 2);
        this.warp(this.drawKeyAt)(-11, -6, 3);
        this.warp(this.drawKeyAt)(-4, 7, 4);
        this.warp(this.drawKeyAt)(9, 7, 5);
        this.warp(this.drawKeyAt)(9, -6, 6);
        this.warp(this.drawThroughBlocks)(9, 6, 2, 3);
        this.warp(this.drawPortal)(0, 6);
      } else {
        if (this.toNumber(this.stage.vars.level) === 18) {
          this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
          this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
          this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
          this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
          this.warp(this.drawPlatform)(-11, -6, 1, 1, 1);
          this.warp(this.drawPlatform)(-11, -5, 1, 1, 5);
          this.warp(this.drawTramp)(-9, -3, 1);
          this.warp(this.drawTramp)(-3, -3, 1);
          this.warp(this.drawTramp)(3, -3, 1);
          this.warp(this.drawTramp)(-9, -2, 5);
          this.warp(this.drawTramp)(-3, -2, 5);
          this.warp(this.drawTramp)(3, -2, 5);
          this.warp(this.drawPlatform)(10, 0, 1, 1, 1);
          this.warp(this.drawPlatform)(10, 1, 1, 1, 5);
          this.warp(this.drawPlatform)(8, -2, 2, 1, 3);
          this.warp(this.drawLockedPlatform)(8, -3, 2, 1, 4);
          this.warp(this.drawPlatform)(8, 2, 1, 1, 2);
          this.warp(this.drawPlatform)(8, 3, 1, 1, 4);
          this.warp(this.drawPlatform)(9, 3, 1, 1, 1);
          this.warp(this.drawPlatform)(8, 4, 2, 1, 5);
          this.warp(this.drawPlatform)(8, 6, 1, 2, 2);
          this.warp(this.drawPlatform)(5, 4, 1, 1, 1);
          this.warp(this.drawThroughBlocks)(8, 0, 2, 2);
          this.warp(this.drawThroughBlocks)(-9, 6, 17, 2);
          this.warp(this.drawKeyAt)(9, 2, 4);
          this.warp(this.drawFragileBlocks)(-10, 5, 18, 1, 5);
          this.warp(this.drawFragileBlocks)(-11, 4, 16, 1, 1);
          this.warp(this.drawPortal)(-10, 6);
        } else {
          if (this.toNumber(this.stage.vars.level) === 19) {
            this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
            this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
            this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
            this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
            this.warp(this.drawPlatform)(-1, -4, 2, 1, 0);
            this.warp(this.drawPlatform)(2, -3, 1, 4, 1);
            this.warp(this.drawPlatform)(-3, -3, 1, 4, 3);
            this.warp(this.drawPlatform)(1, -3, 1, 2, 6);
            this.warp(this.drawPlatform)(-2, -3, 1, 2, 6);
            this.warp(this.drawPlatform)(7, 4, 4, 1, 4);
            this.warp(this.drawPlatform)(-11, 4, 4, 1, 5);
            this.warp(this.drawPlatform)(8, 5, 1, 1, 1);
            this.warp(this.drawPlatform)(-9, 5, 1, 1, 3);
            this.warp(this.drawLockedPlatform)(-2, -5, 1, 2, 1);
            this.warp(this.drawLockedPlatform)(1, -5, 1, 2, 3);
            this.warp(this.drawLockedPlatform)(8, 7, 1, 2, 4);
            this.warp(this.drawLockedPlatform)(-9, 7, 1, 2, 5);
            this.warp(this.drawLockedPlatform)(5, 4, 2, 1, 4);
            this.warp(this.drawLockedPlatform)(-7, 4, 2, 1, 5);
            this.warp(this.drawKeyAt)(9, 5, 1);
            this.warp(this.drawKeyAt)(-11, 5, 3);
            this.warp(this.drawKeyAt)(9, 7, 4);
            this.warp(this.drawKeyAt)(-11, 7, 5);
            this.warp(this.drawTramp)(-6, -6, 1);
            this.warp(this.drawTramp)(5, -6, 3);
            this.warp(this.drawTramp)(-2, -2, 4);
            this.warp(this.drawTramp)(1, -2, 5);
            this.warp(this.drawTramp)(1, 2, 1);
            this.warp(this.drawTramp)(2, 2, 2);
            this.warp(this.drawTramp)(-2, 2, 3);
            this.warp(this.drawTramp)(-3, 2, 2);
            this.warp(this.drawPortal)(0, -6);
          } else {
            if (this.toNumber(this.stage.vars.level) === 20) {
              this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
              this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
              this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
              this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
              this.warp(this.drawPlatform)(-7, 5, 1, 12.25, 0);
              this.warp(this.drawPlatform)(-7, -1, 2, 1, 0);
              this.warp(this.drawPlatform)(1, 5, 1, 3, 0);
              this.warp(this.drawPlatform)(1, 3, 4, 1, 0);
              this.warp(this.drawPlatform)(4, 5, 1, 3, 0);
              this.warp(this.drawUpGravityArrow)(-11, -6, 1);
              this.warp(this.drawUpGravityArrow)(10, 3, 2);
              this.warp(this.drawUpGravityArrow)(2, -6, 3);
              this.warp(this.drawPlatform)(-4, -3, 1, 1, 2);
              this.warp(this.drawPlatform)(-2, -5, 1, 1, 2);
              this.warp(this.drawPlatform)(9, -4, 1, 1, 3);
              this.warp(this.drawPlatform)(8, -1, 1, 1, 2);
              this.warp(this.drawPlatform)(10, 2, 1, 1, 2);
              this.warp(this.drawInvisPlatform)(10, -4, 1, 1, 2);
              this.warp(this.drawInvisActivator)(-6, 0, 2);
              this.warp(this.drawLockedPlatform)(-7, 7, 1, 2, 6);
              this.warp(this.drawLockedPlatform)(2, 6, 2, 1, 5);
              this.warp(this.drawLockedPlatform)(1, -6, 1, 1, 3);
              this.warp(this.drawLockedPlatform)(3, -6, 1, 1, 3);
              this.warp(this.drawLockedPlatform)(2, -5, 1, 1, 3);
              this.warp(this.drawThroughBlocks)(9, -1, 2, 3);
              this.warp(this.drawKeyAt)(9, 0, 3);
              this.warp(this.drawKeyAt)(-11, 7, 5);
              this.warp(this.drawKeyAt)(9, 7, 6);
              this.warp(this.drawPortal)(3, 4);
            } else {
              if (this.toNumber(this.stage.vars.level) === 21) {
                this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
                this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
                this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
                this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
                this.warp(this.drawPlatform)(-11, 4, 4, 1, 3);
                this.warp(this.drawPlatform)(-10, 2, 4, 1, 3);
                this.warp(this.drawPlatform)(-9, 1, 1, 3, 3);
                this.warp(this.drawPlatform)(-11, -1, 2, 1, 3);
                this.warp(this.drawPlatform)(-5, 0, 1, 7, 1);
                this.warp(this.drawPlatform)(-5, 7, 1, 7, 2);
                this.warp(this.drawPlatform)(-1, -6, 1, 1, 1);
                this.warp(this.drawPlatform)(-1, 7, 1, 1, 2);
                this.warp(this.drawPlatform)(-1, -3, 1, 3, 4);
                this.warp(this.drawPlatform)(-1, 6, 1, 3, 4);
                this.warp(this.drawPlatform)(3, -3, 1, 3, 2);
                this.warp(this.drawPlatform)(7, -3, 1, 3, 2);
                this.warp(this.drawPlatform)(3, 6, 1, 3, 1);
                this.warp(this.drawPlatform)(7, 6, 1, 3, 1);
                this.warp(this.drawPlatform)(7, 2, 4, 1, 2);
                this.warp(this.drawPlatform)(7, -1, 4, 1, 1);
                this.warp(this.drawUpGravityArrow)(7, 0, 1);
                this.warp(this.drawUpGravityArrow)(10, -6, 2);
                this.warp(this.drawUpGravityArrow)(-1, -2, 2);
                this.warp(this.drawUpGravityArrow)(-11, -6, 3);
                this.warp(this.drawDownGravityArrow)(10, 7, 1);
                this.warp(this.drawDownGravityArrow)(-1, 3, 1);
                this.warp(this.drawDownGravityArrow)(7, 1, 2);
                this.warp(this.drawDownGravityArrow)(-11, 7, 3);
                this.warp(this.drawPortal)(-10, 0);
              } else {
                if (this.toNumber(this.stage.vars.level) === 22) {
                  this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
                  this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
                  this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
                  this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
                  this.warp(this.drawPlatform)(-12.25, -1, 17.25, 1, 0);
                  this.warp(this.drawPlatform)(4, -1, 1, 5, 0);
                  this.warp(this.drawPlatform)(4, -3, 3, 1, 0);
                  this.warp(this.drawPlatform)(9, -5, 2.25, 1, 0);
                  this.warp(this.drawPlatform)(-4, 7.25, 1, 3.25, 0);
                  this.warp(this.drawPlatform)(-4, 5, 5, 1, 0);
                  this.warp(this.drawPlatform)(0, 5, 1, 2, 0);
                  this.warp(this.drawPlatform)(8, 2, 1, 1, 0);
                  this.warp(this.drawUpGravityArrow)(-7, -6, 2);
                  this.warp(this.drawUpGravityArrow)(-3, -6, 2);
                  this.warp(this.drawUpGravityArrow)(1, -6, 2);
                  this.warp(this.drawDownGravityArrow)(-11, -2, 2);
                  this.warp(this.drawUpGravityArrow)(8, 3, 4);
                  this.warp(this.drawUpGravityArrow)(5, -4, 3);
                  this.warp(this.drawLockedPlatform)(-1, 7, 1, 2, 1);
                  this.warp(this.drawLockedPlatform)(0, 7, 1, 2, 5);
                  this.warp(this.drawLockedPlatform)(-7, 2, 5, 1, 4);
                  this.warp(this.drawLockedPlatform)(-7, 1, 1, 2, 4);
                  this.warp(this.drawLockedPlatform)(-3, 1, 1, 2, 4);
                  this.warp(this.drawLockedPlatform)(6, -4, 1, 2, 3);
                  this.warp(this.drawLockedPlatform)(5, -5, 1, 1, 3);
                  this.warp(this.drawKeyAt)(2, -2, 1);
                  this.warp(this.drawKeyAt)(9, 7, 3);
                  this.warp(this.drawKeyAt)(9, -6, 4);
                  this.warp(this.drawKeyAt)(-11, 6, 5);
                  this.warp(this.drawPortal)(-2, 6);
                } else {
                  if (this.toNumber(this.stage.vars.level) === 23) {
                    this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
                    this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
                    this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
                    this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
                    this.warp(this.drawPlatform)(-3, 6, 1, 7, 0);
                    this.warp(this.drawPlatform)(-3, 0, 2, 2, 0);
                    this.warp(this.drawPlatform)(1, 0, 2, 2, 0);
                    this.warp(this.drawPlatform)(2, 6, 1, 7, 0);
                    this.warp(this.drawPlatform)(-5, 5, 2, 1, 2);
                    this.warp(this.drawPlatform)(3, 5, 2, 1, 2);
                    this.warp(this.drawPlatform)(-6, 6, 1, 2, 4);
                    this.warp(this.drawPlatform)(5, 6, 1, 2, 5);
                    this.warp(this.drawPlatform)(-7, 5, 1, 4, 2);
                    this.warp(this.drawPlatform)(6, 5, 1, 4, 2);
                    this.warp(this.drawPlatform)(-7, 0, 1, 1, 1);
                    this.warp(this.drawPlatform)(6, 0, 1, 1, 3);
                    this.warp(this.drawPlatform)(-9, -1, 1, 1, 2);
                    this.warp(this.drawPlatform)(8, -1, 1, 1, 2);
                    this.warp(this.drawPlatform)(-11, -2, 1, 1, 1);
                    this.warp(this.drawPlatform)(10, -2, 1, 1, 3);
                    this.warp(this.drawPlatform)(-5, -3, 1, 1, 2);
                    this.warp(this.drawPlatform)(4, -3, 1, 1, 2);
                    this.warp(this.drawPlatform)(-9, -5, 1, 1, 4);
                    this.warp(this.drawPlatform)(8, -5, 1, 1, 5);
                    this.warp(this.drawInvisPlatform)(-11, 2, 1, 1, 1);
                    this.warp(this.drawInvisPlatform)(10, 2, 1, 1, 3);
                    this.warp(this.drawInvisPlatform)(-6, 4, 1, 3, 1);
                    this.warp(this.drawInvisPlatform)(5, 4, 1, 3, 3);
                    this.warp(this.drawInvisPlatform)(-5, 4, 2, 1, 1);
                    this.warp(this.drawInvisPlatform)(-5, 2, 2, 1, 1);
                    this.warp(this.drawInvisPlatform)(3, 4, 2, 1, 3);
                    this.warp(this.drawInvisPlatform)(3, 2, 2, 1, 3);
                    this.warp(this.drawInvisActivator)(10, -6, 1);
                    this.warp(this.drawInvisActivator)(-11, -6, 3);
                    this.warp(this.drawUpGravityArrow)(7, -6, 1);
                    this.warp(this.drawUpGravityArrow)(-8, -6, 3);
                    this.warp(this.drawUpGravityArrow)(-11, 3, 2);
                    this.warp(this.drawUpGravityArrow)(10, 3, 2);
                    this.warp(this.drawDownGravityArrow)(-1.5, 7, 1);
                    this.warp(this.drawDownGravityArrow)(-0.5, 7, 2);
                    this.warp(this.drawDownGravityArrow)(0.5, 7, 3);
                    this.warp(this.drawLockedPlatform)(6, -6, 1, 1, 1);
                    this.warp(this.drawLockedPlatform)(7, -5, 1, 1, 1);
                    this.warp(this.drawLockedPlatform)(8, -6, 1, 1, 1);
                    this.warp(this.drawLockedPlatform)(-7, -6, 1, 1, 3);
                    this.warp(this.drawLockedPlatform)(-8, -5, 1, 1, 3);
                    this.warp(this.drawLockedPlatform)(-9, -6, 1, 1, 3);
                    this.warp(this.drawLockedPlatform)(-3, 7, 1, 1, 4);
                    this.warp(this.drawLockedPlatform)(2, 7, 1, 1, 5);
                    this.warp(this.drawKeyAt)(-11, 6, 1);
                    this.warp(this.drawKeyAt)(9, 6, 3);
                    this.warp(this.drawKeyAt)(-5, 3, 4);
                    this.warp(this.drawKeyAt)(3, 3, 5);
                    this.warp(this.drawPortal)(0, -1);
                  } else {
                    if (this.toNumber(this.stage.vars.level) === 24) {
                      this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
                      this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
                      this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
                      this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
                      this.warp(this.drawPlatform)(-6, 7.25, 1, 4.25, 0);
                      this.warp(this.drawPlatform)(-2, 7.25, 1, 4.25, 0);
                      this.warp(this.drawPlatform)(-8, 3, 1, 2, 0);
                      this.warp(this.drawPlatform)(-8, 2, 8, 1, 0);
                      this.warp(this.drawPlatform)(8, 0, 3.25, 1, 0);
                      this.warp(this.drawPlatform)(9, -2, 2.25, 1, 0);
                      this.warp(this.drawPlatform)(-3, 5, 1, 1, 5);
                      this.warp(this.drawPlatform)(-5, 5, 1, 1, 6);
                      this.warp(this.drawPlatform)(8, 2, 3, 1, 3);
                      this.warp(this.drawPlatform)(8, 1, 1, 1, 3);
                      this.warp(this.drawLockedPlatform)(-11, 2, 3, 1, 6);
                      this.warp(this.drawLockedPlatform)(-8, 1, 1, 2, 5);
                      this.warp(this.drawLockedPlatform)(-7, 0, 2, 1, 5);
                      this.warp(this.drawLockedPlatform)(-5, 1, 1, 2, 5);
                      this.warp(this.drawLockedPlatform)(10, 6, 1, 1, 4);
                      this.warp(this.drawLockedPlatform)(9, 7, 1, 2, 4);
                      this.warp(this.drawLockedPlatform)(-4, -4, 1, 3, 2);
                      this.warp(this.drawLockedPlatform)(-3, -4, 2, 1, 2);
                      this.warp(this.drawLockedPlatform)(-1, -4, 1, 3, 2);
                      this.warp(this.drawInvisPlatform)(-1, 1, 1, 1, 2);
                      this.warp(this.drawInvisPlatform)(3, 2, 1, 1, 1);
                      this.warp(this.drawInvisPlatform)(6, 7, 1, 4, 2);
                      this.warp(this.drawUpGravityArrow)(-10, -6, 4);
                      this.warp(this.drawUpGravityArrow)(2, -6, 3);
                      this.warp(this.drawDownGravityArrow)(-10, 3, 4);
                      this.warp(this.drawDownGravityArrow)(10, 7, 2);
                      this.warp(this.drawDownGravityArrow)(2, 2, 3);
                      this.warp(this.drawInvisActivator)(-3, 6, 2);
                      this.warp(this.drawInvisActivator)(-5, 6, 1);
                      this.warp(this.drawKeyAt)(-7, 1, 2);
                      this.warp(this.drawKeyAt)(9, -1, 4);
                      this.warp(this.drawKeyAt)(9, 1, 5);
                      this.warp(this.drawKeyAt)(-11, 7, 6);
                      this.warp(this.drawPortal)(-2, -6);
                    } else {
                      if (this.toNumber(this.stage.vars.level) === 25) {
                        this.warp(this.drawPlatform)(-12, 3, 1, 1, 1);
                        this.warp(this.drawPlatform)(-11, 3, 2, 1, 0);
                        this.warp(this.drawPlatform)(-9, 3, 1, 1, 4);
                        this.warp(this.drawPlatform)(-8, 3, 2, 1, 0);
                        this.warp(this.drawPlatform)(-6, 3, 1, 1, 1);
                        this.warp(this.drawPlatform)(-5, 3, 2, 1, 0);
                        this.warp(this.drawPlatform)(-3, 3, 1, 1, 4);
                        this.warp(this.drawPlatform)(-2, 3, 2, 1, 0);
                        this.warp(this.drawPlatform)(0, 3, 1, 1, 1);
                        this.warp(this.drawPlatform)(1, 3, 2, 1, 0);
                        this.warp(this.drawPlatform)(3, 3, 1, 1, 4);
                        this.warp(this.drawPlatform)(4, 3, 2, 1, 0);
                        this.warp(this.drawPlatform)(6, 3, 1, 1, 1);
                        this.warp(this.drawPlatform)(7, 3, 2, 1, 0);
                        this.warp(this.drawPlatform)(9, 3, 1, 1, 4);
                        this.warp(this.drawPlatform)(10, 3, 2.25, 1, 0);
                        this.warp(this.drawPlatform)(-12, -1, 1, 1, 2);
                        this.warp(this.drawPlatform)(-11, -1, 2, 1, 0);
                        this.warp(this.drawPlatform)(-9, -1, 1, 1, 5);
                        this.warp(this.drawPlatform)(-8, -1, 2, 1, 0);
                        this.warp(this.drawPlatform)(-6, -1, 1, 1, 2);
                        this.warp(this.drawPlatform)(-5, -1, 2, 1, 0);
                        this.warp(this.drawPlatform)(-3, -1, 1, 1, 5);
                        this.warp(this.drawPlatform)(-2, -1, 2, 1, 0);
                        this.warp(this.drawPlatform)(0, -1, 1, 1, 2);
                        this.warp(this.drawPlatform)(1, -1, 2, 1, 0);
                        this.warp(this.drawPlatform)(3, -1, 1, 1, 5);
                        this.warp(this.drawPlatform)(4, -1, 2, 1, 0);
                        this.warp(this.drawPlatform)(6, -1, 1, 1, 2);
                        this.warp(this.drawPlatform)(7, -1, 2, 1, 0);
                        this.warp(this.drawPlatform)(9, -1, 1, 1, 5);
                        this.warp(this.drawPlatform)(10, -1, 2.25, 1, 0);
                        this.warp(this.drawPlatform)(-12, -5, 1, 1, 3);
                        this.warp(this.drawPlatform)(-11, -5, 2, 1, 0);
                        this.warp(this.drawPlatform)(-9, -5, 1, 1, 6);
                        this.warp(this.drawPlatform)(-8, -5, 2, 1, 0);
                        this.warp(this.drawPlatform)(-6, -5, 1, 1, 3);
                        this.warp(this.drawPlatform)(-5, -5, 2, 1, 0);
                        this.warp(this.drawPlatform)(-3, -5, 1, 1, 6);
                        this.warp(this.drawPlatform)(-2, -5, 2, 1, 0);
                        this.warp(this.drawPlatform)(0, -5, 1, 1, 3);
                        this.warp(this.drawPlatform)(1, -5, 2, 1, 0);
                        this.warp(this.drawPlatform)(3, -5, 1, 1, 6);
                        this.warp(this.drawPlatform)(4, -5, 2, 1, 0);
                        this.warp(this.drawPlatform)(6, -5, 1, 1, 3);
                        this.warp(this.drawPlatform)(7, -5, 2, 1, 0);
                        this.warp(this.drawPlatform)(9, -5, 1, 1, 6);
                        this.warp(this.drawPlatform)(10, -5, 2.25, 1, 0);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *trampRegul() {
    this.stage.vars.i13 = 0;
    for (let i = 0; i < this.stage.vars.trampBounce.length; i++) {
      this.stage.vars.i13++;
      if (
        this.compare(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i13 - 1),
          0
        ) > 0 &&
        !(
          this.toNumber(
            this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i13 - 1)
          ) === 6
        )
      ) {
        if (
          this.toNumber(
            this.itemOf(
              this.stage.vars.increasingTramp,
              this.stage.vars.i13 - 1
            )
          ) === 1
        ) {
          this.stage.vars.trampBounce.splice(
            this.stage.vars.i13 - 1,
            1,
            this.toNumber(
              this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i13 - 1)
            ) + 2
          );
        } else {
          this.stage.vars.trampBounce.splice(
            this.stage.vars.i13 - 1,
            1,
            this.toNumber(
              this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i13 - 1)
            ) + -2
          );
        }
      } else {
        if (
          this.toNumber(
            this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i13 - 1)
          ) === 6
        ) {
          this.stage.vars.increasingTramp.splice(
            this.stage.vars.i13 - 1,
            1,
            -1
          );
          this.stage.vars.trampBounce.splice(
            this.stage.vars.i13 - 1,
            1,
            this.toNumber(
              this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i13 - 1)
            ) + -2
          );
        }
      }
      if (
        this.toNumber(
          this.itemOf(this.stage.vars.trampBounce, this.stage.vars.i13 - 1)
        ) === 0
      ) {
        this.stage.vars.increasingTramp.splice(this.stage.vars.i13 - 1, 1, 0);
      }
    }
  }

  *whenKeyRPressed() {
    if (!(this.toNumber(this.stage.vars.level) === 25)) {
      for (let i = 0; i < 16; i++) {
        this.stage.vars.backFade -= 6.25;
        yield;
      }
      yield* this.wait(0.1);
      yield* this.reset();
      this.stage.vars.arrowGhost.splice(0, 1, 0);
      for (let i = 0; i < 16; i++) {
        this.stage.vars.backFade += 6.25;
        yield;
      }
      this.stage.vars.backFade = 100;
    }
  }

  *drawUpGravityArrow(x, y, color) {
    this.stage.vars.platformType.push(6);
    this.stage.vars.platformX.push(this.toNumber(x) * 20 + 3);
    this.stage.vars.platformY.push(this.toNumber(y) * 20 - 3);
    this.stage.vars.platformLength.push(14);
    this.stage.vars.platformHeight.push(14);
    this.stage.vars.platformColor.push(color);
    if (this.toNumber(color) === 0) {
      this.penColor = Color.rgb(107, 107, 107);
    } else {
      if (this.toNumber(color) === 1) {
        this.penColor = Color.rgb(107, 27, 27);
      } else {
        if (this.toNumber(color) === 2) {
          this.penColor = Color.rgb(27, 107, 33);
        } else {
          if (this.toNumber(color) === 3) {
            this.penColor = Color.rgb(32, 27, 107);
          } else {
            if (this.toNumber(color) === 4) {
              this.penColor = Color.rgb(107, 100, 27);
            } else {
              if (this.toNumber(color) === 5) {
                this.penColor = Color.rgb(27, 107, 107);
              } else {
                this.penColor = Color.rgb(107, 27, 104);
              }
            }
          }
        }
      }
    }
    this.penColor.v = 78;
    this.warp(this.drawRect)(
      this.toNumber(x) * 20 + 7,
      this.toNumber(y) * 20 - 8,
      4,
      9,
      1
    );
    this.warp(this.drawTriangle)(
      this.toNumber(x) * 20 + 9,
      this.toNumber(y) * 20 - 10,
      7,
      7,
      -1,
      1,
      1
    );
    this.warp(this.drawTriangle)(
      this.toNumber(x) * 20 + 9,
      this.toNumber(y) * 20 - 10,
      7,
      7,
      1,
      1,
      1
    );
  }

  *drawDownGravityArrow(x, y, color) {
    this.stage.vars.platformType.push(7);
    this.stage.vars.platformX.push(this.toNumber(x) * 20 + 3);
    this.stage.vars.platformY.push(this.toNumber(y) * 20 - 3);
    this.stage.vars.platformLength.push(14);
    this.stage.vars.platformHeight.push(14);
    this.stage.vars.platformColor.push(color);
    if (this.toNumber(color) === 0) {
      this.penColor = Color.rgb(107, 107, 107);
    } else {
      if (this.toNumber(color) === 1) {
        this.penColor = Color.rgb(107, 27, 27);
      } else {
        if (this.toNumber(color) === 2) {
          this.penColor = Color.rgb(27, 107, 33);
        } else {
          if (this.toNumber(color) === 3) {
            this.penColor = Color.rgb(32, 27, 107);
          } else {
            if (this.toNumber(color) === 4) {
              this.penColor = Color.rgb(107, 100, 27);
            } else {
              if (this.toNumber(color) === 5) {
                this.penColor = Color.rgb(27, 107, 107);
              } else {
                this.penColor = Color.rgb(107, 27, 104);
              }
            }
          }
        }
      }
    }
    this.penColor.v = 78;
    this.warp(this.drawRect)(
      this.toNumber(x) * 20 + 7,
      this.toNumber(y) * 20 - 3,
      4,
      9,
      1
    );
    this.warp(this.drawTriangle)(
      this.toNumber(x) * 20 + 9,
      this.toNumber(y) * 20 - 10,
      7,
      7,
      -1,
      -1,
      1
    );
    this.warp(this.drawTriangle)(
      this.toNumber(x) * 20 + 9,
      this.toNumber(y) * 20 - 10,
      7,
      7,
      1,
      -1,
      1
    );
  }

  *drawArrows() {
    this.stage.vars.j = 0;
    for (let i = 0; i < 3; i++) {
      this.stage.vars.j++;
      this.penColor = Color.rgb(255, 255, 255);
      this.penColor.a =
        1 -
        this.itemOf(this.stage.vars.arrowGhost, this.stage.vars.j - 1) / 100;
      if (
        this.compare(
          this.itemOf(this.stage.vars.arrowGhost, this.stage.vars.j - 1),
          100
        ) < 0
      ) {
        this.warp(this.drawLine)(
          this.itemOf(this.stage.vars.playerX, this.stage.vars.j - 1),
          this.toNumber(
            this.itemOf(this.stage.vars.playerY, this.stage.vars.j - 1)
          ) + 15,
          this.toNumber(
            this.itemOf(this.stage.vars.playerX, this.stage.vars.j - 1)
          ) - 7,
          this.toNumber(
            this.itemOf(this.stage.vars.playerY, this.stage.vars.j - 1)
          ) + 27,
          2
        );
        this.warp(this.drawLine)(
          this.itemOf(this.stage.vars.playerX, this.stage.vars.j - 1),
          this.toNumber(
            this.itemOf(this.stage.vars.playerY, this.stage.vars.j - 1)
          ) + 15,
          this.toNumber(
            this.itemOf(this.stage.vars.playerX, this.stage.vars.j - 1)
          ) - -7,
          this.toNumber(
            this.itemOf(this.stage.vars.playerY, this.stage.vars.j - 1)
          ) + 27,
          2
        );
        this.warp(this.drawLine)(
          this.toNumber(
            this.itemOf(this.stage.vars.playerX, this.stage.vars.j - 1)
          ) - -7,
          this.toNumber(
            this.itemOf(this.stage.vars.playerY, this.stage.vars.j - 1)
          ) + 27,
          this.toNumber(
            this.itemOf(this.stage.vars.playerX, this.stage.vars.j - 1)
          ) - 7,
          this.toNumber(
            this.itemOf(this.stage.vars.playerY, this.stage.vars.j - 1)
          ) + 27,
          2
        );
      }
      this.penColor = Color.rgb(0, 0, 0);
      this.penColor.a =
        1 -
        (this.toNumber(
          this.itemOf(this.stage.vars.arrowGhost, this.stage.vars.j - 1)
        ) +
          15) /
          100;
      if (
        this.compare(
          this.itemOf(this.stage.vars.arrowGhost, this.stage.vars.j - 1),
          100
        ) < 0
      ) {
        this.warp(this.drawTriangle)(
          this.toNumber(
            this.itemOf(this.stage.vars.playerX, this.stage.vars.j - 1)
          ) + 0,
          this.toNumber(
            this.itemOf(this.stage.vars.playerY, this.stage.vars.j - 1)
          ) + 26,
          5,
          9,
          1,
          -1,
          2
        );
        this.warp(this.drawTriangle)(
          this.toNumber(
            this.itemOf(this.stage.vars.playerX, this.stage.vars.j - 1)
          ) + 0,
          this.toNumber(
            this.itemOf(this.stage.vars.playerY, this.stage.vars.j - 1)
          ) + 26,
          5,
          9,
          -1,
          -1,
          2
        );
        this.stage.vars.arrowGhost.splice(
          this.stage.vars.j - 1,
          1,
          this.toNumber(
            this.itemOf(this.stage.vars.arrowGhost, this.stage.vars.j - 1)
          ) + 6.25
        );
      }
      if (
        this.compare(
          this.itemOf(this.stage.vars.arrowGhost, this.stage.vars.j - 1),
          100
        ) > 0
      ) {
        this.stage.vars.arrowGhost.splice(this.stage.vars.j - 1, 1, 100);
      }
    }
  }

  *drawEnding() {
    this.stage.vars.j2 = 0;
    for (let i = 0; i < 6; i++) {
      this.stage.vars.j2++;
      this.stage.vars.endingX.splice(
        this.stage.vars.j2 - 1,
        1,
        this.toNumber(
          this.itemOf(this.stage.vars.endingX, this.stage.vars.j2 - 1)
        ) + 5
      );
    }
    if (!(this.compare(this.itemOf(this.stage.vars.endingX, 5), 300) < 0)) {
      this.stage.vars.endingX.splice(5, 1);
      this.stage.vars.endingX.splice(
        0,
        0,
        this.toNumber(this.itemOf(this.stage.vars.endingX, 0)) - 120
      );
    }
    this.stage.vars.j2 = 0;
    for (let i = 0; i < 6; i++) {
      this.stage.vars.j2++;
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.endingX, this.stage.vars.j2 - 1),
        70,
        1
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.endingX, this.stage.vars.j2 - 1),
        -10,
        2
      );
      this.warp(this.drawPlayer)(
        this.itemOf(this.stage.vars.endingX, this.stage.vars.j2 - 1),
        -90,
        3
      );
    }
    this.stage.vars.playerWalkFrame.splice(
      0,
      1,
      this.toNumber(this.itemOf(this.stage.vars.playerWalkFrame, 0)) + 0.25
    );
    this.stage.vars.playerWalkFrame.splice(
      1,
      1,
      this.toNumber(this.itemOf(this.stage.vars.playerWalkFrame, 1)) + 0.25
    );
    this.stage.vars.playerWalkFrame.splice(
      2,
      1,
      this.toNumber(this.itemOf(this.stage.vars.playerWalkFrame, 2)) + 0.25
    );
  }

  *drawMenu() {
    this.warp(this.drawPlatform)(-12.2, -7, 25, 2.1, 0);
    this.warp(this.drawPlatform)(-12.2, 9.1, 25, 2.1, 0);
    this.warp(this.drawPlatform)(-12.2, 7.25, 1.2, 14.5, 0);
    this.warp(this.drawPlatform)(11, 7.25, 1.2, 14.5, 0);
    this.stage.vars.J3 = 0;
    this.stage.vars.J5 = 0;
    for (let i = 0; i < 4; i++) {
      this.stage.vars.J4 = 0;
      for (let i = 0; i < 6; i++) {
        this.stage.vars.J5++;
        if (
          this.compare(this.stage.vars.levelsUnlocked, this.stage.vars.J5) > 0
        ) {
          this.penColor = Color.rgb(34, 128, 33);
        } else {
          if (
            this.compare(this.stage.vars.levelsUnlocked, this.stage.vars.J5) ===
            0
          ) {
            this.penColor = Color.rgb(121, 128, 33);
          } else {
            this.penColor = Color.rgb(128, 33, 33);
          }
        }
        this.warp(this.drawRect)(
          -175 + 60 * this.toNumber(this.stage.vars.J4),
          100 - 60 * this.toNumber(this.stage.vars.J3),
          50,
          50,
          20
        );
        this.penColor.v = 78;
        this.warp(this.drawRect)(
          -172 + 60 * this.toNumber(this.stage.vars.J4),
          97 - 60 * this.toNumber(this.stage.vars.J3),
          44,
          44,
          20
        );
        if (
          this.compare(this.stage.vars.levelsUnlocked, this.stage.vars.J5) < 0
        ) {
          this.penColor.v = 50;
          this.warp(this.drawLine)(
            -175 + 60 * this.toNumber(this.stage.vars.J4) + 25,
            100 - 60 * this.toNumber(this.stage.vars.J3) - 15,
            -175 + 60 * this.toNumber(this.stage.vars.J4) + 25,
            100 - 60 * this.toNumber(this.stage.vars.J3) - 20,
            20
          );
          this.penColor.v = 78;
          this.warp(this.drawLine)(
            -175 + 60 * this.toNumber(this.stage.vars.J4) + 25,
            100 - 60 * this.toNumber(this.stage.vars.J3) - 15,
            -175 + 60 * this.toNumber(this.stage.vars.J4) + 25,
            100 - 60 * this.toNumber(this.stage.vars.J3) - 20,
            10
          );
          this.penColor.v = 50;
          this.warp(this.drawRect)(
            -175 + 60 * this.toNumber(this.stage.vars.J4) + 11,
            100 - 60 * this.toNumber(this.stage.vars.J3) - 20,
            28,
            22,
            8
          );
          this.penColor.v = 78;
          this.warp(this.drawCircle)(
            -175 + 60 * this.toNumber(this.stage.vars.J4) + 25,
            100 - 60 * this.toNumber(this.stage.vars.J3) - 28,
            8
          );
          this.warp(this.drawLine)(
            -175 + 60 * this.toNumber(this.stage.vars.J4) + 25,
            100 - 60 * this.toNumber(this.stage.vars.J3) - 30,
            -175 + 60 * this.toNumber(this.stage.vars.J4) + 25,
            100 - 60 * this.toNumber(this.stage.vars.J3) - 36,
            4
          );
          this.warp(this.drawTriangle)(
            -175 + 60 * this.toNumber(this.stage.vars.J4) + 23,
            100 - 60 * this.toNumber(this.stage.vars.J3) - 38,
            2,
            6,
            -1,
            1,
            0
          );
          this.warp(this.drawTriangle)(
            -175 + 60 * this.toNumber(this.stage.vars.J4) + 26,
            100 - 60 * this.toNumber(this.stage.vars.J3) - 38,
            2,
            6,
            1,
            1,
            0
          );
        } else {
          this.penColor = Color.rgb(0, 0, 0);
          if (this.compare(this.stage.vars.J5, 10) < 0) {
            this.warp(this.drawXYSize)(
              this.stage.vars.J5,
              -157 + 60 * this.toNumber(this.stage.vars.J4),
              85 - 60 * this.toNumber(this.stage.vars.J3),
              0.55,
              3
            );
          } else {
            this.warp(this.drawXYSize)(
              this.stage.vars.J5,
              -166 + 60 * this.toNumber(this.stage.vars.J4),
              85 - 60 * this.toNumber(this.stage.vars.J3),
              0.55,
              3
            );
          }
        }
        if (
          !(
            this.compare(this.stage.vars.levelsUnlocked, this.stage.vars.J5) < 0
          )
        ) {
          this.warp(this.rectCollision)(
            -175 + 60 * this.toNumber(this.stage.vars.J4),
            100 - 60 * this.toNumber(this.stage.vars.J3),
            -125 + 60 * this.toNumber(this.stage.vars.J4),
            50 - 60 * this.toNumber(this.stage.vars.J3),
            this.mouse.x,
            this.mouse.y,
            this.mouse.x,
            this.mouse.y
          );
          if (this.mouse.down) {
            if (this.toNumber(this.stage.vars.collision2) === 1) {
              this.stage.vars.level = this.stage.vars.J5;
              this.broadcast("reset_transition");
            }
          }
        }
        if (this.keyPressed("space") || this.keyPressed("enter" + "")) {
          if (this.compare(this.stage.vars.levelsUnlocked, 25) < 0) {
            this.stage.vars.level = this.stage.vars.levelsUnlocked;
          } else {
            this.stage.vars.level = 24;
          }
          this.broadcast("reset_transition");
        }
        this.stage.vars.J4++;
      }
      this.stage.vars.J3++;
    }
  }

  *whenKeyBPressed() {
    if (this.toNumber(this.stage.vars.menu) === 0) {
      for (let i = 0; i < 16; i++) {
        this.stage.vars.backFade -= 6.25;
        yield;
      }
      yield* this.wait(0.1);
      this.stage.vars.menu = 1;
      for (let i = 0; i < 16; i++) {
        this.stage.vars.backFade += 6.25;
        yield;
      }
      this.stage.vars.backFade = 100;
    }
  }

  *whenIReceiveResetTransition() {
    while (!!(this.keyPressed("space") || this.keyPressed("enter" + ""))) {
      yield;
    }
    for (let i = 0; i < 16; i++) {
      this.stage.vars.backFade -= 6.25;
      yield;
    }
    yield* this.wait(0.1);
    this.stage.vars.menu = 0;
    yield* this.reset();
    this.stage.vars.arrowGhost.splice(0, 1, 0);
    for (let i = 0; i < 16; i++) {
      this.stage.vars.backFade += 6.25;
      yield;
    }
    this.stage.vars.backFade = 100;
  }

  *Sounds() {
    this.stage.vars.J6 = 0;
    for (let i = 0; i < this.stage.vars.soundTimes.length; i++) {
      this.stage.vars.J6++;
      if (
        this.arrayIncludes(this.stage.vars.soundsPlayed, this.stage.vars.J6)
      ) {
        if (
          !(
            this.compare(
              this.toNumber(this.stage.vars.gameFrame) -
                this.toNumber(
                  this.itemOf(
                    this.stage.vars.soundTimer,
                    this.stage.vars.J6 - 1
                  )
                ),
              this.itemOf(this.stage.vars.soundTimes, this.stage.vars.J6 - 1)
            ) < 0
          )
        ) {
          yield* this.startSound(
            this.itemOf(this.stage.vars.soundOptions, this.stage.vars.J6 - 1)
          );
          this.stage.vars.soundsPlayed.splice(
            this.indexInArray(this.stage.vars.soundsPlayed, this.stage.vars.J6),
            1
          );
          this.stage.vars.soundTimer.splice(
            this.stage.vars.J6 - 1,
            1,
            this.stage.vars.gameFrame
          );
        }
      }
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.arrowGhost = [];
    this.stage.vars.arrowGhost.push(100);
    this.stage.vars.arrowGhost.push(100);
    this.stage.vars.arrowGhost.push(100);
    this.stage.vars.soundsPlayed = [];
    this.visible = false;
    this.stage.vars.menu = 1;
    this.stage.vars.backFade = 100;
    this.stage.vars.transitionVal = 0;
    this.stage.vars.gameFrame = 0;
    this.stage.vars.level = 1;
    this.stage.vars.levelsUnlocked = 1;
    yield* this.reset();
    while (true) {
      this.stage.vars.gameFrame++;
      this.clearPen();
      yield* this.resetPlatformData();
      if (this.toNumber(this.stage.vars.menu) === 1) {
        this.stage.costume = "menu";
        yield* this.drawMenu();
        yield* this.drawRestBackground();
      } else {
        yield* this.drawPlatforms();
        if (this.compare(this.stage.vars.level, 25) < 0) {
          this.stage.costume = "grid";
          yield* this.trampRegul();
          yield* this.platforming(1);
          yield* this.platforming(2);
          yield* this.platforming(3);
          yield* this.renderPlayers();
          yield* this.drawArrows();
        } else {
          this.stage.costume = "end";
          yield* this.drawEnding();
        }
        if (
          this.compare(this.stage.vars.level, 0) > 0 &&
          this.compare(this.stage.vars.level, 25) < 0
        ) {
          this.penColor = Color.rgb(0, 0, 0);
          yield* this.drawXYSize(this.stage.vars.level, -235, 175, 0.3, 1.7);
        }
        yield* this.drawTransition();
        if (this.stage.vars.inGamePlayers.length === 0) {
          if (Math.round(this.toNumber(this.stage.vars.transitionVal)) === 0) {
            this.broadcast("transition");
          }
        }
      }
      this.penColor = Color.rgb(0, 0, 0);
      this.penColor.a = 1 - this.stage.vars.backFade / 100;
      yield* this.drawCircle(0, 0, 600);
      yield* this.Sounds();
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      yield* this.playSoundUntilDone("new-beginning-SBA-300418064");
      yield;
    }
  }
}
