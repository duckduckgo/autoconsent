import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_flickr.com_2jw', ['https://www.flickr.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
