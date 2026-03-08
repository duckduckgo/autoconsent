import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_deye.com_6vb', ['https://deye.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
