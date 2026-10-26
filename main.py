a = 0

def on_button_pressed_a():
    basic.show_number(a)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global a
    a = pins.analog_read_pin(AnalogPin.P0)
    serial.write_value("a", pins.analog_read_pin(AnalogPin.P0))
basic.forever(on_forever)
