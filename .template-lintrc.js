/* jshint node:true */
'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    'bare-strings': {
      whitelist: ['(', ')', ',', '.', '&', '+', '-', '=', '*', '/', '#', '%', '!', '?', ':', '[', ']', '{', '}', 'test@example.com', 'whitelist string'],
      globalAttributes: ['title'],
      elementAttributes: { img: ['alt'], input: ['placeholder'] }
    }      
  }
};
