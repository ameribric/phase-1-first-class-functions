// function greeting(name) {
//     alert('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);

function spying(spy) {
    alert ("hello" + spy);
}
function receivesAFunction(callback) {
    var spy = prompt('Please enter your name.'); 
    callback(spy);
}
receivesAFunction(spying);

function name(named) {
    alert("greetings" + named)
}

function returnsANamedFunction(callback) {
    var named = prompt('Please enter your name.');
    callback(named)

}

function anonymous (anyms) {
    alert('hi' + anyms)
}

function returnsAnAnonymousFunction(callback) {
    var anyms = prompt('Please enter your name');
    callback(anyms)
}