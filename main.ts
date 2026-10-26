let a = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(a)
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
basic.forever(function () {
    a = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("a", pins.analogReadPin(AnalogPin.P0))
})
