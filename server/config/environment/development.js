'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connection opions
  sequelize: {
    uri: process.env.URI,
    options: {
      logging: false,
      storage: 'dev.sqlite',
      define: {
        timestamps: false
      },
      dialect: 'postgres',
      dialectOptions: {
        native: true,
        ssl: true
      }
    }
  },

  // Seed database on startup
  seedDB: false

};
