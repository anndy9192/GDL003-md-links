const path = require('path');
//export permite que use la logica de otro archivo (asi node sabe que hay mas logica en otros archivos)
module.exports = filePath => path.extname(filePath) === '.md';
