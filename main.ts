bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(250)
    basic.clearScreen()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(250)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    if (active) {
        mouse.click()
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    active = true
})
mouse.setStatusChangeHandler(function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(250)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    active = false
})
input.onButtonPressed(Button.AB, function () {
    if (active) {
        mouse.middleClick()
    }
})
input.onButtonPressed(Button.B, function () {
    if (active) {
        mouse.rightClick()
    }
})
let active = false
mouse.startMouseService()
let sensitivity = 500
let nsensitivity = sensitivity * -1
let step = 10
let nstep = step * -1
active = false
basic.forever(function () {
    if (active) {
        if (input.acceleration(Dimension.X) > sensitivity) {
            mouse.movexy(step, 0)
        } else if (input.acceleration(Dimension.X) < nsensitivity) {
            mouse.movexy(nstep, 0)
        }
        if (input.acceleration(Dimension.Y) > sensitivity) {
            mouse.movexy(0, step)
        } else if (input.acceleration(Dimension.Y) < nsensitivity) {
            mouse.movexy(0, nstep)
        }
    }
    basic.pause(50)
})
