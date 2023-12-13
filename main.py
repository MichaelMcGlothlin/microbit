def on_button_pressed_a():
    global speed
    music.play(music.tone_playable(330, music.beat(BeatFraction.QUARTER)),
        music.PlaybackMode.IN_BACKGROUND)
    speed = max(0, speed - 10)
input.on_button_pressed(Button.A, on_button_pressed_a)

def showMood():
    if input.light_level() < 127:
        basic.pause(randint(0, 200))
        cuteBot.color_light(cuteBot.RGBLights.RGB_L, randint(0, 15))
        basic.pause(randint(0, 200))
        cuteBot.color_light(cuteBot.RGBLights.RGB_R, randint(0, 15))

def on_button_pressed_ab():
    global speed
    music.play(music.tone_playable(349, music.beat(BeatFraction.QUARTER)),
        music.PlaybackMode.IN_BACKGROUND)
    speed = 50
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global speed
    music.play(music.tone_playable(392, music.beat(BeatFraction.QUARTER)),
        music.PlaybackMode.IN_BACKGROUND)
    speed = min(speed + 10, 100)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_ir_callback():
    if cuteBot.IR_Button(cuteBot.IRButtons.UP):
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            """)
    if cuteBot.IR_Button(cuteBot.IRButtons.DOWN):
        basic.show_leds("""
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            """)
    if cuteBot.IR_Button(cuteBot.IRButtons.LEFT):
        basic.show_leds("""
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            """)
    if cuteBot.IR_Button(cuteBot.IRButtons.RIGHT):
        basic.show_leds("""
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            """)
    if cuteBot.IR_Button(cuteBot.IRButtons.PLUS):
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            """)
    if cuteBot.IR_Button(cuteBot.IRButtons.MINUS):
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            """)
    if cuteBot.IR_Button(cuteBot.IRButtons.MENU):
        basic.show_icon(IconNames.HEART)
    if cuteBot.IR_Button(cuteBot.IRButtons.OK):
        basic.show_icon(IconNames.YES)
    if cuteBot.IR_Button(cuteBot.IRButtons.BACK):
        basic.show_icon(IconNames.NO)
    if cuteBot.IR_Button(cuteBot.IRButtons.ZERO):
        basic.show_number(0)
cuteBot.IR_callback(on_ir_callback)

def on_logo_pressed():
    global go
    go = not (go)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

speed = 0
go = False
input.calibrate_compass()
go = False
speed = 50
displaySpeed = speed

def on_every_interval():
    if go:
        showMood()
loops.every_interval(500, on_every_interval)

def on_forever():
    global displaySpeed
    if speed != displaySpeed:
        displaySpeed = speed
        if speed >= 100:
            basic.show_icon(IconNames.HAPPY)
        elif speed <= 0:
            basic.show_icon(IconNames.ASLEEP)
        else:
            basic.show_number(speed / 10)
        basic.clear_screen()
basic.forever(on_forever)

def on_every_interval2():
    if go:
        music.play(music.string_playable("E B C5 A B G A F ", 120),
            music.PlaybackMode.UNTIL_DONE)
loops.every_interval(5000, on_every_interval2)
