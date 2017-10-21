exports.id = "interop";


var result = "dummy";


//
// var Spawn = require('child_process').spawn;
// var py = Spawn('python', ['py/learn.py', {detached: true}]);
// /*Here we are saying that every time our
//  node application receives data from the python
//   process output stream(on 'data'), we want to
//   convert that received data into a string and
//   append it to the overall dataString.*/
// py.stdout.on('data', function(data){
//     console.log("got data back from python");
//     result =  data.toString();
//     //callback(data.toString());
// });
//
// /*Once the stream is done (on 'end') we want
//  to simply log the received data to the console.*/
// py.stdout.on('end', function(){
// console.log("ended data");
// });

var PythonShell = require('python-shell');
var pyshell = new PythonShell('py/learn.py');
// end the input stream and allow the process to exit


// PythonShell.run('py/learn.py', function (err) {
//   if (err) throw err;
//   console.log('finished');
// });

// pyshell.send('america');
// pyshell.send('great');
// console.log("SENT");
// pyshell.end(function (err) {
//   if (err) throw err;
//   console.log('finished');
// });
var compute = function(obj) {
  console.log("begin compute");

  pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    if (message.trim()) {
        console.log("RECIEVED", message);
        result = message;
    }
  });
  pyshell.send(JSON.stringify(obj));

  // py.stdin.write(JSON.stringify([1,2,3]));
  console.log("written string");
  // py.stdin.end();
  console.log("end compute");
};


var getres = function() {
    console.log("getting res");
    return result;
}


module.exports = {
  compute: compute,
  getres: getres
};

// var helper = function(obj) {
//   console.log('Inside helper');
//
//   var pyshell = new PythonShell('learn.py', pyshell_options);
//
//   received = false;
//
//   console.log("Object:", obj);
//   // sends a message to the Python script via stdin
//   pyshell.send(JSON.stringify(obj));
//
//   pyshell.on('message', function (message) {
//     // received a message sent from the Python script (a simple "print" statement)
//     console.log("message received");
//     received = true;
//     result = message;
//
//   });
//
//   // end the input stream and allow the process to exit
//   pyshell.end(function (err) {
//     if (err) throw err;
//     console.log('Python script finished');
//   });
// }
