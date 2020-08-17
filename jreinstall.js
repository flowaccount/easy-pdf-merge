const njre = require('njre')
const fs = require("fs")

njre.install()
  .then(dir => {
    // Do stuff
    var opsys = process.platform;
      if (opsys == "win32" || opsys == "win64") {
          opsys = "windows";
      } else {
          opsys = "linux";
      }

    
    fs.readdir(dir, function (err, files) {
        if (err) {
            throw err;
        }

        fs.rename(dir + '/' + files[0], dir + '/' + opsys, function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log('install success');
            }
        })

    })
  })
  .catch(err => {
    // Handle the error
    console.log('install error', err);
  })