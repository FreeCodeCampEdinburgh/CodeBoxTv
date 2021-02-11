const glob = require('glob');
const path = require('path');

const dynamicallyLoadRoutes = (app) => {
  console.log('dynamicallyLoadRoutes has started execution');
  const routerFileNames = glob.sync(`./**/*.routes.js`);
  console.log(`Found routes`, routerFileNames);
  routerFileNames.forEach((file) => {
    app.use('/', require(path.resolve(file)));
  });
  console.log('dynamicallyLoadRoutes has finished execution');
};

module.exports = dynamicallyLoadRoutes;
