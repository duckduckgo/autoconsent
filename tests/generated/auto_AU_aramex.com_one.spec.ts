import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aramex.com_one', ['https://www.aramex.com/ae/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
