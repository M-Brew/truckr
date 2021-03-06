declare function require(name: string);
const config = require('../../config/config.json');

export const environment = {
  production: true,
   firebaseConfig: {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    projectId: config.projectId,
    corporateSiteUrl: 'http://www.truckrtech.com'
  }
};
