input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Click), function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Wenn Mutti früh zur Arbeit geht")
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Click), function () {
    music.playMelody("C G E F A G G E ", 120)
    music.playMelody("C D D G G E - - ", 120)
    music.playMelody("C G E F A G G E ", 120)
    music.playMelody("C D D G G C - - ", 120)
})
