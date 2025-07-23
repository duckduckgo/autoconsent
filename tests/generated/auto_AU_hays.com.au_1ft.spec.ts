import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hays.com.au_1ft', ['https://www.hays.com.au/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
