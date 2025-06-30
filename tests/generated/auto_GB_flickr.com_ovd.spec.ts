import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_flickr.com_ovd', ['https://flickr.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
