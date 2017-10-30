$(function() {
    $garden = $(".garden");
    if ($garden.width() >= $garden.height()) {
        $garden.width($garden.height());
    } else {
        $garden.height($garden.width());
    }
    if (window.DeviceMotionEvent) {
        window.addEventListener("devicemotion", motionHandler, false);
    } else {
        document.body.innerHTML = "What user agent u r using???";
    }

    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", orientationHandler, false);
    } else {
        document.body.innerHTML = "What user agent u r using???";
    };
});
// var ball = document.querySelector('.ball');
// var garden = document.querySelector('.garden');
// var output = document.querySelector('.output');

// var maxX = garden.clientWidth - ball.clientWidth;
// var maxY = garden.clientHeight - ball.clientHeight;

function orientationHandler(event) {
    var ball = document.querySelector('.ball');
    var garden = document.querySelector('.garden');
    var output = document.querySelector('.output');

    var maxX = garden.clientWidth - ball.clientWidth;
    var maxY = garden.clientHeight - ball.clientHeight;
    var x = event.beta; // In degree in the range [-180,180]
    var y = event.gamma; // In degree in the range [-90,90]

    output.innerHTML = "beta : " + x + "\n";
    output.innerHTML += "gamma: " + y + "\n";

    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
    if (x > 90) {
        x = 90
    };
    if (x < -90) {
        x = -90
    };

    // To make computation easier we shift the range of 
    // x and y to [0,180]
    x += 90;
    y += 90;

    // 10 is half the size of the ball
    // It center the positioning point to the center of the ball
    ball.style.top = (maxX * x / 180) + "px";
    ball.style.left = (maxY * y / 180) + "px";

    var valAlpha = event.alpha;

    document.getElementById("alpha").innerHTML = valAlpha;
    document.getElementById("beta").innerHTML = x;
    document.getElementById("gamma").innerHTML = y;
    document.getElementById("heading").innerHTML = event.webkitCompassHeading;
    document.getElementById("accuracy").innerHTML = event.webkitCompassAccuracy;
    var $needle = $(".needle");
    var $orientation = $("#orientation");

    var valNeedleAngle = parseInt(valAlpha);
    var valOrientationNum = parseInt(valAlpha / 45);

    $needle.css("transform", "rotate(" + valNeedleAngle + "deg)");

    switch (valOrientationNum) {
        case 0:
            $orientation.text("北");
            break;
        case 1:
            $orientation.text("东北");
            break;
        case 2:
            $orientation.text("东");
            break;
        case 3:
            $orientation.text("东南");
            break;
        case 4:
            $orientation.text("南");
            break;
        case 5:
            $orientation.text("西南");
            break;
        case 6:
            $orientation.text("西");
            break;
        case 7:
            $orientation.text("西北");
            break;
    }
}

function motionHandler(event) {
    document.getElementById("interval").innerHTML = event.interval;
    var acc = event.acceleration;
    document.getElementById("x").innerHTML = acc.x;
    document.getElementById("y").innerHTML = acc.y;
    document.getElementById("z").innerHTML = acc.z;
    var accGravity = event.accelerationIncludingGravity;
    document.getElementById("xg").innerHTML = accGravity.x;
    document.getElementById("yg").innerHTML = accGravity.y;
    document.getElementById("zg").innerHTML = accGravity.z;
    var rotationRate = event.rotationRate;
    document.getElementById("Ralpha").innerHTML = rotationRate.alpha;
    document.getElementById("Rbeta").innerHTML = rotationRate.beta;
    document.getElementById("Rgamma").innerHTML = rotationRate.gamma;
}


// var ball = document.querySelector('.ball');
// var garden = document.querySelector('.garden');
// var output = document.querySelector('.output');

// var maxX = garden.clientWidth - ball.clientWidth;
// var maxY = garden.clientHeight - ball.clientHeight;

// function handleOrientation(event) {
//     var x = event.beta; // In degree in the range [-180,180]
//     var y = event.gamma; // In degree in the range [-90,90]

//     output.innerHTML = "beta : " + x + "\n";
//     output.innerHTML += "gamma: " + y + "\n";

//     // Because we don't want to have the device upside down
//     // We constrain the x value to the range [-90,90]
//     if (x > 90) {
//         x = 90
//     };
//     if (x < -90) {
//         x = -90
//     };

//     // To make computation easier we shift the range of 
//     // x and y to [0,180]
//     x += 90;
//     y += 90;

//     // 10 is half the size of the ball
//     // It center the positioning point to the center of the ball
//     ball.style.top = (maxX * x / 180) + "px";
//     ball.style.left = (maxY * y / 180) + "px";
// }

// window.addEventListener('deviceorientation', handleOrientation);