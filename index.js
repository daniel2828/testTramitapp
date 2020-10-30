const fs = require('fs');
const readline = require('readline');

// Handle if the password is found
var bFound = false;
readline.createInterface({
    input     : fs.createReadStream('xato-net-10-million-passwords.txt'),
    terminal  : false
}).on('line', function (line) {
      // Check if line matchs with the element
    if (line === process.argv[2]) {
        console.log(true);
        bFound = true;
        this.close();
    }
}).on('close', function () {
    // Return false in case not found
      if (!bFound) { 
          console.log(false);
      }
});