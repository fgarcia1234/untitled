namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true, effects.confetti)
})
tiles.setTilemap(tiles.createTilemap(
            hex`10002e000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b01010c0c0c0c0c0101010c0c01010b0b01030a0a0a0a0a0a0a0a0a0a09010b0b010402020202020202020202070c0b0b0104022e2f302b020202020207010b0b0104022724252d020202020207010b0b0c04022722262d0202020202070c0b0b0c04022829292c0202020202070c0b0b0c0402023131020202020202070c0b0b01040202020202020202020207010b0b01040202020202020202020207010b0b0c040202020202020202020207010b0b0c040202020202020202020207010b0b01050606020202020202060608010b0b0b010c0c0402020202070c0c010b0b0b0b0b010c0402020202070c010b0b0b0b0b0b0c0c110d0d0d0d110c0c0b0b0b0b0b0c0c0e110d0d0d0d110e0c0c0b0b0b0b0c0e0e110d0d0d0d110e0e0c0b0b0b0c0e0e0e110d0d0d0d110e0e0e0c0c0c0c0e0e0e110d0d0d0d110e0e0e0e0c0c0e0e0e0e110d0d0d0d110e0e0e0e0e0e0e0e0e0e110d0d0d0d110e0e0e0e0e0e0e0e0e0e110d0d0d0d110e0e0e0e0e0101010d0d0d0d0d0d0d0d0d0d0101010d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d16101c100d0d0d0d0d0d101c10170d0d141d1d1d1d1d1d1d1d1d1d1d1d130d0d142020201d201d1f1f1d1d2020130d0d141d1e1d1d20201d1f1d1d1d1d130d0d141d1e1f1f1d20201f1f1f1f1d130d0d141d1d1f1f1e1d201d1d1d1f1d130d0d141d1d1d1f1e1e1d1d1d1d1d1d130d0d141d1d1d1e1d1e1d1d1d1d1d1f130d0d141d1d1e1e1d1d1d1e1d1d1f1f130d0d141d1e1e1e1e1e1e1d1e1e1f1d130d0d141d1e1e1d1f1d1e1d1e1e1e1d130d0d141d1e1e1e1f1d1e1d1f1f1e1d130d0d141d1e1e1e1d1e1e1e1e1f1d1d130d0d141d1d1d1f1d1d1d1e1e1f1f1d130d0d141d1d1d1f1e1e1d1d211d1d1d130d0d141d1d1d1f1d1e1d1d1d1d1d1d130d0d15181818181818181818181818190d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d`,
            img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . 2 2 2 2 . . . . . . . 2
                2 . . . 2 2 2 2 . . . . . . . 2
                2 . . . 2 2 2 2 . . . . . . . 2
                2 . . . 2 2 2 2 . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 2 . . . . . . . . . . . . 2 2
                2 2 2 . . . . . . . . . . 2 2 2
                2 2 2 . . 2 . . . . 2 . . 2 2 2
                2 2 . . 2 2 . . . . 2 2 . . 2 2
                2 2 . 2 2 2 . . . . 2 2 2 . 2 2
                2 . 2 2 2 2 . . . . 2 2 2 2 . .
                . . 2 2 2 2 . . . . 2 2 2 2 2 .
                . 2 2 2 2 2 . . . . 2 2 2 2 2 2
                2 2 2 2 2 2 . . . . 2 2 2 2 2 2
                2 2 2 2 2 2 . . . . 2 2 2 2 2 2
                2 2 2 . . . . . . . . . . 2 2 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 . . . . . . . . . . . . . . 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.builtin.brick,sprites.castle.tileDarkGrass3,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.castle.rock0,sprites.dungeon.hazardHole,sprites.dungeon.purpleSwitchUp,sprites.dungeon.floorLight4,sprites.dungeon.floorLight2,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight5,sprites.dungeon.chestClosed,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.floorLight0,sprites.dungeon.greenSwitchDown],
            TileScale.Sixteen
        ))
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
