var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      nome: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true,
         // Cada e-mail poderá ser utilizado por apenas
         // um contato
         index: {
            unique: true
         }
      }
   });

   return mongoose.model('Contato', schema);

}