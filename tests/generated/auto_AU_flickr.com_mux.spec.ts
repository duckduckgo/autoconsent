import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_flickr.com_mux', ['https://flickr.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
