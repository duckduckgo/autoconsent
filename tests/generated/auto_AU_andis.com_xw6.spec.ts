import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_andis.com_xw6', ['https://andis.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
