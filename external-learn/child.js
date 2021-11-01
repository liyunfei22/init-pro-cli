console.log('output from the child');
process.on('message', function(m){
  console.log('message from parent: ' + JSON.stringify(m));
});

process.send({from: 'child'});