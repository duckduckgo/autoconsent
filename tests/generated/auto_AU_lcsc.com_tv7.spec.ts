import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lcsc.com_tv7', ['https://lcsc.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
