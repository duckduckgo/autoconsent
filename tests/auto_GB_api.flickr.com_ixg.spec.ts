import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_api.flickr.com_ixg', ['https://api.flickr.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
