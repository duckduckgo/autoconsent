import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_api.flickr.com_0nq', ['https://api.flickr.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
