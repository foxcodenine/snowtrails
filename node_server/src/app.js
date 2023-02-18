let x = 3;

let countdown = setInterval(()=>{

    console.log(x);
    x--;

    if (x <= 0) {
        clearInterval(countdown);
        console.log('...so far, so good!');
    };

}, 500);


