const path = require('path');

const isMd = (filePath) => {

  if (path.extname(filePath) === '.md') {

    return true
  } else {

    return false
  }
};


//export permite que use la logica de otro archivo (asi node sabe que hay mas logica en otros archivos)
module.exports = {
  isMd,

}

