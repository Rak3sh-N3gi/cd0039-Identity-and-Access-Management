/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-7pu1qwqr0730cbbq.us', // the auth0 domain prefix
    audience: '', // the audience set for the auth0 app
    clientId: 'RyxYYSPrCpzTldnx38BnmG5djvMHOkMI', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:4200', // the base url of the running ionic application. 
  }
};
