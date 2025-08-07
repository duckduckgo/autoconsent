import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_peekyou.com_emw', ['https://www.peekyou.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
