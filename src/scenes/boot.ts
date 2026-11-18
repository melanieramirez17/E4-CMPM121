import Phaser from "phaser";
import { LaunchOptions } from "../main.ts";
import { makeTextures } from "../textures.ts";
import { loadSounds } from "../sounds.ts";

export function sceneStartHelper(
  scene: Phaser.Scene,
  target: string,
  data?: object,
) {
  if (scene.cameras.main.fadeEffect.isRunning) {
    return;
  }
  scene.cameras.main.fadeOut(450, 4, 2, 12);
  scene.cameras.main.once("camerafadeoutcomplete", () => {
    scene.scene.start(target, data);
  });
}

export class BootScene extends Phaser.Scene {
  constructor(
    private readonly options: LaunchOptions,
  ) {
    super("boot");
  }
  create(): void {
    makeTextures(this);
    loadSounds(this);
    if (this.options.attract === true) {
      this.scene.start("play", { attract: true });
    } else {
      this.scene.start("title");
    }
  }
}
