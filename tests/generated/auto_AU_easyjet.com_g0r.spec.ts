import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_easyjet.com_g0r', ['https://www.easyjet.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
