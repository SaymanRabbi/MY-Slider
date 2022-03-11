const sliderUrl = ['./img/slider1.jpg', './img/slider2.jpg', './img/slider3.jpg', './img/slider4.jpg', './img/slider5.jpg', './img/slider6.jpg'];
let sliderIndex = 0;
const slider = document.getElementById('slider');
setInterval(() => {
    if (sliderIndex>=sliderUrl.length) {
        sliderIndex = 0;
    }
    let sliderUrlMain = sliderUrl[sliderIndex];
    slider.setAttribute('src',sliderUrlMain)
    sliderIndex++;
},3000)