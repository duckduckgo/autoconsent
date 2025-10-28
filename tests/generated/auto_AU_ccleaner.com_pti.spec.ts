import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ccleaner.com_pti', ['https://www.ccleaner.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
