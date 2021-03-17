function 原地右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    -150
    )
}
function 原地左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    150
    )
}
function 右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    200,
    makerobo.Motors.Right,
    0
    )
}
function 左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    200
    )
}
function 后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    -150
    )
}
function 前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    150
    )
}
function 停止 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    0
    )
}
let 超声波的值 = 0
basic.showIcon(IconNames.Happy)
while (!(input.buttonIsPressed(Button.A))) {
    停止()
}
basic.forever(function () {
    超声波的值 = makerobo.ping(DigitalPin.P0, makerobo.PingUnit.Centimeters)
    TM1650.showNumber(超声波的值)
    if (超声波的值 == 0) {
        停止()
    } else if (超声波的值 < 6) {
        后退()
        basic.pause(500)
        if (Math.randomBoolean()) {
            原地左转()
        } else {
            原地右转()
        }
        basic.pause(1000)
    } else {
        前进()
        basic.pause(100)
    }
})
