'use strict';

module.exports = function(Inmueble) {

};

/* module.exports = function(Inmueble) {

      Inmueble.getName = function(_id, cb) {
        Inmueble.findById( _id, function (err, instance) {
            var response = "Name of coffee shop is " + instance.name;
            cb(null, response);
            console.log(response);
        });
      }

      Inmueble.remoteMethod (
            'getName',
            {
              http: {path: '/getname', verb: 'get'},
              accepts: {arg: 'id', type: 'string', required: true, http: { source: 'query' } },
              returns: {arg: 'name', type: 'string'}
            }
        );
    } */
    