let frames = [
    "assets/images/Asset19.png",
    "assets/images/Asset20.png",
    "assets/images/Asset21.png",
    "assets/images/Asset22.png",
    "assets/images/Asset23.png",
    "assets/images/Asset24.png",
    "assets/images/Asset25.png",
    "assets/images/Asset26.png",
    "assets/images/Asset27.png"
];

const heart = document.getElementById("heart");

let frameIndex = 0;
function animate() {
    heart.src = frames[frameIndex];
    //frameIndex = frameindex + 1;
    //frameIndex += 1;
    frameIndex++;
    if (frameIndex >= frames.length) {
        frameIndex = 0;
    }
}

setInterval(animate, 100);

// let frames = [
//     "assets/images/BOUNCE_0011_Layer-1.png",
//     "assets/images/BOUNCE_0011_Layer-2.png",
//     "assets/images/BOUNCE_0011_Layer-3.png",
//     "assets/images/BOUNCE_0011_Layer-4.png",
//     "assets/images/BOUNCE_0011_Layer-5.png",
//     "assets/images/BOUNCE_0011_Layer-6.png",
//     "assets/images/BOUNCE_0011_Layer-7.png",
//     "assets/images/BOUNCE_0011_Layer-8.png",
//     "assets/images/BOUNCE_0011_Layer-9.png",
//     "assets/images/BOUNCE_0011_Layer-10.png",
//     "assets/images/BOUNCE_0011_Layer-11.png",
//     "assets/images/BOUNCE_0011_Layer-12.png",
// ];

// const ball = document.getElementById("ball");

// let frameIndex = 0;
// function animateBall() {
//     ball.src = frames[frameIndex];
//     frameIndex++;
//     if (frameIndex >= frames.length) {
//         frameIndex = 0;
//     }
// }

// // setInterval(animateBall, 100);