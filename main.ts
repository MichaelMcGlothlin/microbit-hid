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
input.onGesture(Gesture.LogoUp, function () {
    if (active) {
        mouse.movexy(0, nstep)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (active) {
        mouse.movexy(nstep, 0)
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    active = true
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
input.onGesture(Gesture.TiltRight, function () {
    if (active) {
        mouse.movexy(step, 0)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (active) {
        mouse.movexy(0, step)
    }
})
let active = false
let nstep = 0
let step = 0
mouse.startMouseService()
step = 50
nstep = step * -1
