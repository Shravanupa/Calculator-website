let screen = document.getElementById('result');
let buttons = document.getElementsByClassName('buttons');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

let cont = document.getElementsByClassName('cont2')[0];
let btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    if (cont.style.top == '-385px') {
        cont.style.top = '100px'
    }
    else{
        cont.style.top = '-385px'
    }
    
    if (btn.style.width == '100px' && btn.style.height == '100px') {
        btn.style.width = '150px'
        btn.style.height = '150px'
    }
    else{
        btn.style.width = '100px'
        btn.style.height = '100px'
    }

    if (btn.innerHTML == '🙂') {
        btn.innerHTML = '😛'
    }
    else if (cont.style.top == '-385px'){
        btn.innerHTML = '🙂'
    }

    if (btn.style.borderRadius == '10px') {
        btn.style.borderRadius = '75px'
    }
    else{
        btn.style.borderRadius = '10px'
    }
})
