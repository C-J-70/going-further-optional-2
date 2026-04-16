controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    truck.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.gameOver(false)
})
let truck: Sprite = null
music.play(music.createSong(assets.song`masterpiece`), music.PlaybackMode.LoopingInBackground)
truck = sprites.create(assets.image`kamyon`, SpriteKind.Player)
truck.ay = 500
truck.vx = 100
scene.cameraFollowSprite(truck)
animation.runImageAnimation(
truck,
assets.animation`truck1 animated`,
100,
true
)
