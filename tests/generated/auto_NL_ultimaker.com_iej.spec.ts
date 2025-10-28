import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ultimaker.com_iej', ['https://ultimaker.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
