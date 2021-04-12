// Copyright IBM Corp. 2014,2019. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var config = require('../../server/config.json');
var path = require('path');

//Replace this address with your actual address
var senderAddress = 'lucas.1701716343@gmail.com'; 

module.exports = function(User) {
  //send verification email after registration
  User.afterRemote('create', function(context, user, next) {
    var options = {
      type: 'email',
      to: user.email,
      from: senderAddress,
      subject: 'Gracias por registrarse.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: 'http://localhost:4200/user/login',
      user: user,
      host:"localhost",
      protocol:"http",
      port:"4200"
    };

    user.verify(options, function(err, response) {
        if (err) {
          User.deleteById(user.id);
          return next(err);
        }
        context.res.render('response', {
          title: 'Signed up successfully',
          content: 'Por favor verifique su email y siga el link de verificación ' +
              'antes de loguearse',
          redirectTo: 'http://localhost:4200/user/login',
          redirectToLinkText: 'Log in'
        });
      });
    });
    
  
  // Method to render
  User.afterRemote('prototype.verify', function(context, user, next) {
    context.res.render('response', {
      title: 'A Link to reverify your identity has been sent '+
        'to your email successfully',
      content: 'Please check your email and click on the verification link '+
        'before logging in',
      redirectTo: '/',
      redirectToLinkText: 'Log in'
    });
  });

  //send password reset link when requested
  User.on('resetPasswordRequest', function(info) {
    var url = 'http://localhost:4200/user/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' +
        info.accessToken.id + '">aquí</a> para cambiar su contraseña';

    User.app.models.Email.send({
      to: info.email,
      from: senderAddress,
      subject: 'Cambio de contraseña',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });

  //render UI page after password change
  User.afterRemote('changePassword', function(context, user, next) {
    context.res.render('response', {
      title: 'Password changed successfully',
      content: 'Please login again with new password',
      redirectTo: '/',
      redirectToLinkText: 'Log in'
    });
  });

  //render UI page after password reset
  User.afterRemote('setPassword', function(context, user, next) {
    context.res.render('response', {
      title: 'Password reset success',
      content: 'Your password has been reset successfully',
      redirectTo: '/',
      redirectToLinkText: 'Log in'
    });
  });
};
