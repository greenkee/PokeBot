var PythonShell = require('python-shell');

var options = {
  mode: 'text',
  scriptPath: 'py'
}

var pyshell = new PythonShell('learn.py', options);

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

var obj = new Object();
obj.name = "Pikachu";
obj.type = "Electric";
obj.married = false;

// sends a message to the Python script via stdin
pyshell.send(JSON.stringify(obj));

// end the input stream and allow the process to exit
pyshell.end(function (err) {
  if (err) throw err;
  console.log('finished');
});
