import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_api.flickr.com_vi2', ['https://api.flickr.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
