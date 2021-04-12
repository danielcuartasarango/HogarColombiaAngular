'use strict';

module.exports = function(Categoria) {
    Categoria.sendEmail = (nombre, apellido, mensaje, asunto, emailAddresses, cb) => {
        Categoria.app.models.Email.send({
            to: emailAddresses,
            from: "email test sender",
            subject: asunto,
            name: nombre,
            lastName: apellido,
            text: mensaje,
            html: `<h2>El mensaje fue enviado por: ${nombre} ${apellido}</h2>
            <h2>El correo del remitente es: ${emailAddresses}</h2>
            <h2>Mensaje: </h2>
            <p style="font-size: large; text-align: justify;">${mensaje}</p>`
        }, function ( err, mail){
            console.log("email enviado");
            if (err) return err;
        }
        );
        cb(null, 'mensaje enviado: ' + mensaje);
    }

    Categoria.remoteMethod(
        'sendEmail', 
    {
        http:{
            path:'/sendEmail',
            verb: 'post'
        },
            description: [
                "Api para enviar mensajes de email."
            ],
            accepts: [
                {
                    arg: 'nombre',
                    type: 'string',
                    required: true
                },
                {
                    arg: 'apellido',
                    type: 'string',
                    required: true
                },
                {
                    arg: 'mensaje',
                    type: 'string',
                    required: true
                },
                {
                    arg: "asunto",
                    type: 'string',
                    required: true
                },
                {
                    arg: "emailAddresses",
                    type: 'string',
                    required: true
                }
            ],
            returns: {arg  : 'Email', type: 'string'}
    });
};
