'use strict';

const DiscoveryV1Experimental = require('watson-developer-cloud/discovery/v1-experimental');

const discovery = new DiscoveryV1Experimental({
  // if left unspecified here, the SDK will fall back to the DISCOVERY_USERNAME and DISCOVERY_PASSWORD
  // environment properties, and then Bluemix's VCAP_SERVICES environment property
  // username: 'INSERT YOUR USERNAME FOR THE SERVICE HERE',
  // password: 'INSERT YOUR PASSWORD FOR THE SERVICE HERE'
  version_date: DiscoveryV1Experimental.VERSION_DATE_2016_07_11
});

discovery.getEnvironments({}, function(error, data) {
  console.log(JSON.stringify(data, null, 2));
});
