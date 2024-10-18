const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'SIH_2023_LightHouse_Website-main',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

