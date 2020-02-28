let count = 0
let list = [sprites.builtin.couchSide0, sprites.builtin.couchSide1, sprites.builtin.couchSide2, sprites.builtin.couchFront0, sprites.builtin.couchFront1, img`
. . . c c c c c c c c c c c c c c c c c c . . . 
. . c d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d c . . 
. c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c . 
. c 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 7 c . 
. c 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 c . 
. c 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 c . 
c 6 6 6 c c c c c c c c c c c c c c c c 6 6 6 c 
c 7 7 c 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 c 7 7 c 
c 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c 7 7 c 
c 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c 7 7 c 
c 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c 7 7 c 
c 6 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c 7 6 c 
c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c 
c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
. . c b b c . . . . . . . . . . . . c b b c . . 
`]
let Couch = sprites.create(list[0], SpriteKind.Player)
game.onUpdateInterval(1, function () {
    Couch.setImage(list[count % list.length])
    count += 1
})
