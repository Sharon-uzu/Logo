var confirm = document.getElementById('confirm');
var pass = document.getElementById('pass');
var pass2 = document.getElementById('pass2');

function complete(){
    if (pass.value == '') {
        alert('Please enter password')
    } else if(pass2.value == ''){
        alert('Please confirm password')
    }
    else {
        confirm.style.display ="grid"
    }
    
}

function completes(){
        confirm.style.display ="grid"
    
}


// TIME TABLE
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');

var mon = document.getElementById('mon');
var tues = document.getElementById('tues');
var wed = document.getElementById('wed');
var thurs = document.getElementById('thurs');
var fri = document.getElementById('fri');


function time1(){
    mon.style.backgroundColor = '#559F94';
    tues.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    wed.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    thurs.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    fri.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';

    one.style.display = 'grid';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'none';
}

function time2(){
    mon.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    tues.style.backgroundColor = '#559F94';
    wed.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    thurs.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    fri.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';

    one.style.display = 'none';
    two.style.display = 'grid';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'none';
}

function time3(){
    mon.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    tues.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    wed.style.backgroundColor = '#559F94';
    thurs.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    fri.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';

    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'grid';
    four.style.display = 'none';
    five.style.display = 'none';
}

function time4(){
    mon.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    tues.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    wed.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    thurs.style.backgroundColor = '#559F94';
    fri.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';

    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'grid';
    five.style.display = 'none';
}

function time5(){
    mon.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    tues.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    wed.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    thurs.style.backgroundColor = 'hsla(0, 0%, 37%, .2)';
    fri.style.backgroundColor = '#559F94';

    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'grid';
}



// HAMBURGER
var menu = document.getElementById('menu');
var link = document.getElementById('link');
var close = document.getElementById('close')

menu.addEventListener('click', function(){
link.style.display = 'block';
menu.style.display = 'none';
close.style.display = 'block';
})

close.addEventListener('click', function(){
link.style.display = 'none';
menu.style.display = 'block';
close.style.display = 'none';
})




