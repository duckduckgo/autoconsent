import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_flickr.com_t0f', ['https://www.flickr.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
