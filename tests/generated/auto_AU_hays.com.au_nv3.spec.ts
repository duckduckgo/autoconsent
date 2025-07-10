import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hays.com.au_nv3', ['https://www.hays.com.au/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
