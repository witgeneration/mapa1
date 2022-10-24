controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    princess.setImage(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    princess.setImage(img`
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . f 3 e e e f b f b b b b f . . 
        . . f e 4 4 f 1 e b b b b f . . 
        . . . f 4 4 4 4 f b b b b f f . 
        . . . f e e e f f f b b b b f . 
        . . . f d d d e 4 4 f b b f . . 
        . . . f d d d e 4 4 e f f . . . 
        . . f b d b d b e e b f . . . . 
        . . f f 1 d 1 d 1 d f f . . . . 
        . . . . f f b b f f . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    princess.setImage(img`
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . . f b b b b f b f e e e 3 f . 
        . . f b b b b e 1 f 4 4 e f . . 
        . f f b b b b f 4 4 4 4 f . . . 
        . f b b b b f f f e e e f . . . 
        . . f b b f 4 4 e d d d f . . . 
        . . . f f e 4 4 e d d d f . . . 
        . . . . f b e e b d b d b f . . 
        . . . . f f d 1 d 1 d 1 f f . . 
        . . . . . . f f b b f f . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    princess.setImage(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `)
})
let princess: Sprite = null
scene.setBackgroundColor(12)
scene.setTileMap(assets.image`myImage`)
scene.setTile(5, img`
    b d d d d d d c b d d d d d d c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b b d b b b b b b b 
    c c c c c c b a c c c c c c b a 
    b d d d d d d c b d d d d d d c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b b d b b b b b b b 
    c c c c c c b a b c c c c c c a 
    `, false)
scene.setTile(0, img`
    7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 
    7 7 5 7 5 5 7 7 7 7 7 7 7 7 7 7 
    7 6 5 5 7 5 7 5 5 7 7 7 7 7 7 7 
    7 7 6 5 7 7 5 5 6 7 7 7 7 7 7 7 
    7 7 7 6 7 7 5 6 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, true)
scene.setTile(6, img`
    7 7 7 7 7 7 7 c c 7 7 7 7 7 7 7 
    7 7 7 7 c c c 6 5 c 6 6 7 7 7 7 
    7 7 7 7 c 6 c 5 5 c 7 6 7 7 7 7 
    7 7 7 6 c c 7 5 5 7 c 6 6 7 7 7 
    7 7 c c 7 7 7 7 7 5 7 7 c 6 7 7 
    7 6 6 6 c 6 7 7 7 7 6 c c 6 6 7 
    c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
    c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
    7 c c 7 6 6 6 6 6 7 7 7 7 c 6 7 
    7 c 7 7 6 6 7 6 6 7 7 6 7 7 c 7 
    7 c c c c 7 7 6 f 7 7 c c c c 7 
    7 7 7 7 c 7 c f f c 7 c 7 7 7 7 
    7 7 7 7 7 6 f e e e c 7 7 7 7 7 
    7 7 7 7 7 e e e e e e 7 7 7 7 7 
    7 7 7 7 e e 7 e e 7 e e 7 7 7 7 
    7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7 
    `, true)
princess = sprites.create(img`
    . . . . . . f f f f 4 4 f . . . 
    . . . . f f b f 5 4 5 5 4 f . . 
    . . . f b 3 3 e 4 5 5 5 5 f . . 
    . . f b 3 3 3 3 e 4 4 4 e f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 3 3 e b 3 e e 3 3 f . 
    . . f 3 3 3 3 f f e e e 3 3 f . 
    . . f b b b b f b f e e e 3 f . 
    . . f b b b b e 1 f 4 4 e f . . 
    . f f b b b b f 4 4 4 4 f . . . 
    . f b b b b f f f e e e f . . . 
    . . f b b f 4 4 e d d d f . . . 
    . . . f f e 4 4 e d d d f . . . 
    . . . . f b e e b d b d b f . . 
    . . . . f f d 1 d 1 d 1 f f . . 
    . . . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
princess.setScale(0.8, ScaleAnchor.Middle)
princess.setPosition(0, 40)
controller.moveSprite(princess)
scene.cameraFollowSprite(princess)
