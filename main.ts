input.onButtonPressed(Button.A, function () {
    i += 1
})
input.onButtonPressed(Button.B, function () {
    i += -1
})
basic.showIcon(IconNames.Heart)
let i = 0
basic.forever(function () {
    basic.showNumber(i)
})
