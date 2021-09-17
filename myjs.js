// change h2 color
const h2color = document.getElementsByTagName('h2');
for (const tagitem of h2color) {
    tagitem.style.color = 'lightblue';
}

// change background color of backpack section
const backpackbg = document.getElementById('backpack');
backpackbg.style.backgroundColor = 'tomato';

// change border radius of card
const cardItem = document.getElementsByClassName('card');
for (const item of cardItem) {
    item.style.borderRadius = '30px';
}

// a function that can log on console
function consoleFunction() {
    console.log('Hi I am here mamun');
}

//remove buy now button with click
const buyNowBtn = document.getElementsByClassName('panda-btn-buy-now');

for (const item of buyNowBtn) {
    item.addEventListener('click', function () {
        item.parentNode.removeChild(item);
        console.log('button removed');
    })
}

// submit btn verify
const inputFieldValue = document.getElementById('inputField');
inputFieldValue.addEventListener('keyup', function () {
    if (inputFieldValue.value == 'email') {
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.removeAttribute('disabled');
    }
    else {
        submitBtn.setAttribute('disabled', true);
    }
})

//change image when enter mouse
const arrImage = document.getElementsByTagName('img');
for (const item of arrImage) {
    const varImg = item.src;
    item.addEventListener('mouseenter', function () {
        this.src = 'eid.gif';
    })
    item.addEventListener('mouseleave', function () {
        this.src = varImg;
    })
}

//change background color of subscribe
const subscribePart = document.getElementById('subscribe');
subscribePart.addEventListener('dblclick', function () {
    subscribePart.style.backgroundColor = 'seagreen';
})


/* // a code from a student of phero group
document.getElementById('firstbag').addEventListener('mouseover', function () {
    document.getElementById('firstbag').setAttribute('src', '/user4.PNG');
})
document.getElementById('firstbag').addEventListener('mouseout', function () {
    document.getElementById('firstbag').setAttribute('src', '/eid.gif');
}) */