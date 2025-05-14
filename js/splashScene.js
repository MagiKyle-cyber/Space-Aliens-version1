/* global Phaser */

// Copyright (c) 2025 Kyle Matthew All rights reserved
//
// Created by: Kyle Matthew
// Created on: Apr 2025
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: 'splashScene' })
    this.splashSceneBackgroundImage = null
  }

  /**
   * @param {object} data 
   */
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }

  /**
   * @param {object} data 
   */
  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      'splashSceneBackground'
    )
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }


  /**
   * @param {number} time 
   * @param {number} delta
   */
  update(time, delta) {
    if (time > 3000) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene
