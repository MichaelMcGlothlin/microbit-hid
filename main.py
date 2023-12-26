def on_bluetooth_connected():
    basic.show_icon(IconNames.HAPPY)
    basic.pause(250)
    basic.clear_screen()
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_icon(IconNames.ASLEEP)
    basic.pause(250)
    basic.clear_screen()
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_button_pressed_a():
    if active:
        mouse.click()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_screen_up():
    global active
    active = True
input.on_gesture(Gesture.SCREEN_UP, on_gesture_screen_up)

def my_function():
    basic.show_icon(IconNames.SURPRISED)
    basic.pause(250)
    basic.clear_screen()
mouse.set_status_change_handler(my_function)

def on_gesture_screen_down():
    global active
    active = False
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_button_pressed_ab():
    if active:
        mouse.middle_click()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    if active:
        mouse.right_click()
input.on_button_pressed(Button.B, on_button_pressed_b)

active = False
mouse.start_mouse_service()
sensitivity = 500
nsensitivity = sensitivity * -1
step = 10
nstep = step * -1
active = False

def on_forever():
    if active:
        if input.acceleration(Dimension.X) > sensitivity:
            mouse.movexy(step, 0)
        elif input.acceleration(Dimension.X) < nsensitivity:
            mouse.movexy(nstep, 0)
        if input.acceleration(Dimension.Y) > sensitivity:
            mouse.movexy(0, step)
        elif input.acceleration(Dimension.Y) < nsensitivity:
            mouse.movexy(0, nstep)
    basic.pause(50)
basic.forever(on_forever)
