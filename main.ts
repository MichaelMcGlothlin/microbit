input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
    speed = Math.max(0, speed - 10)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("up")
    basic.showString("U")
    basic.pause(250)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("left")
    basic.showString("L")
    basic.pause(250)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    screenUp = true
})
function showMood () {
    if (input.lightLevel() < 127) {
        basic.pause(randint(0, 200))
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, randint(0, 15))
        basic.pause(randint(0, 200))
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, randint(0, 15))
    }
}
input.onGesture(Gesture.ScreenDown, function () {
    screenUp = false
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(50)
    basic.showIcon(IconNames.Diamond)
    basic.pause(50)
    basic.showIcon(IconNames.Target)
    basic.pause(50)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(50)
    basic.showIcon(IconNames.Square)
    basic.pause(50)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
    speed = 50
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
    speed = Math.min(speed + 10, 100)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
    basic.showString("R")
    basic.pause(250)
    basic.clearScreen()
})
cuteBot.IR_callback(function () {
    if (go) {
        if (cuteBot.IR_Button(cuteBot.IRButtons.Up)) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # . # #
                . . # . .
                . . # . .
                `)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Down)) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # . # #
                . # # # .
                . . # . .
                `)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Left)) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # . # #
                . # # . .
                . . # . .
                `)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Right)) {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # . # #
                . . # # .
                . . # . .
                `)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Plus)) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Minus)) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
                `)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Menu)) {
            basic.showIcon(IconNames.House)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.OK)) {
            basic.showIcon(IconNames.Yes)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Back)) {
            basic.showIcon(IconNames.No)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Zero)) {
            basic.showNumber(0)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.One)) {
            basic.showNumber(1)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Two)) {
            basic.showNumber(2)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Three)) {
            basic.showNumber(3)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Four)) {
            basic.showNumber(4)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Five)) {
            basic.showNumber(5)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Six)) {
            basic.showNumber(6)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Seven)) {
            basic.showNumber(7)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Eight)) {
            basic.showNumber(8)
        }
        if (cuteBot.IR_Button(cuteBot.IRButtons.Nine)) {
            basic.showNumber(9)
        }
    }
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("down")
    basic.showString("D")
    basic.pause(250)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
    go = !(go)
})
let speed = 0
let screenUp = false
let go = false
go = false
screenUp = false
speed = 50
let displaySpeed = speed
input.setSoundThreshold(SoundThreshold.Loud, 64)
radio.setGroup(0)
loops.everyInterval(500, function () {
    if (go) {
        showMood()
    }
})
basic.forever(function () {
    basic.pause(250)
    if (go) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (speed != displaySpeed) {
        displaySpeed = speed
        music.setTempo(100 + speed * 0.4)
        if (speed >= 100) {
            basic.showIcon(IconNames.Happy)
        } else if (speed <= 0) {
            basic.showIcon(IconNames.Asleep)
        } else {
            basic.showNumber(speed / 10)
        }
        basic.pause(250)
        basic.clearScreen()
    }
    basic.pause(250)
})
