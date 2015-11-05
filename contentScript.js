document.addEventListener('click', function(e){
   var someInformation = {
     url: this.URL,
     type: e.type,
     timestamp: e.timestamp,
     viewDimensions: {
       width: window.innerWidth,
       height: window.innerHeight,
     },
     x: e.x,
     y: e.y
   };
   chrome.extension.sendMessage(someInformation, function(response) {
      //callback
   });
}, false);
