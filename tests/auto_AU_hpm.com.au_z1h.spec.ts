import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_hpm.com.au_z1h', ['https://www.hpm.com.au/en'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
