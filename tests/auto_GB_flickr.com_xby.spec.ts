import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_flickr.com_xby', ['https://flickr.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
