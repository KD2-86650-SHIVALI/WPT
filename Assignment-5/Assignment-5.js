let car = document.getElementById("car");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let xAxisInput = document.getElementById("x-axis");
let yAxisInput = document.getElementById("y-axis");
let carContainer = document.getElementById("car-container");
let carInContainer = document.getElementById("car-in-container");

let animation; 
let hasDropped = false;

function moveCar() {
    let x = parseInt(xAxisInput.value) || 0;

    if (x <= 500 && !hasDropped) {
        car.style.left = x + 'px';
        car.style.top = '100px'; 
        xAxisInput.value = x + 5;
    } else if (x > 500 && !hasDropped) {
        hasDropped = true; 
        fallDown();
    }
}

function fallDown() {
    let y = 100;
    let dropInterval = setInterval(function () {
        y += 5;
        car.style.top = y + 'px';
        yAxisInput.value = y;

        if (y >= 300) { 
            clearInterval(dropInterval);
            clearInterval(animation);

            car.style.display = "none";
            carInContainer.style.display = "block";
            carContainer.style.display = "block";
            carContainer.style.left = car.style.left;
            carContainer.style.top = y + "px";

            setTimeout(function() {
                xAxisInput.value = 0;
                yAxisInput.value = 0;
            }, 1000); 
        }
    }, 100);
}

// Start the car animation
startBtn.addEventListener("click", function () {
    car.style.display = "block";
    carContainer.style.display = "none";
    hasDropped = false;
    animation = setInterval(moveCar, 20); 
});

stopBtn.addEventListener("click", function () {
    clearInterval(animation);
});
