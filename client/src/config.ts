// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'rv6h02iv7e'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-n2xulfrdcmmhtfuk.us.auth0.com',            // Auth0 domain
  clientId: 'AUUYtbv94UTN6saiveE94qz3p5DVOg3F',          // Auth0 client id
  callbackUrl: 'http://http://todoappclient2-dev.us-east-1.elasticbeanstalk.com/callback'
}
