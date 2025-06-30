import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_api.flickr.com_0kk', ['https://api.flickr.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
