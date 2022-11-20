// NO: 1

/* function log ( message ){
    console.log(message);
}

var message = 'Hello World';
log(message) */

// NO: 2 (declaring variable)

function doSomething () {
    for( var i = 0; i<5; i++ ){
        console.log(i);
    }
    console.log('Finally' + i);
}

doSomething();
