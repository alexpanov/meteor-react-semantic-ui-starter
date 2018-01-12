const hostName = process.env.APP_HOST || 'localhost:3000';
const entryPoint = `http://${hostName}/`;

module.exports = entryPoint;
