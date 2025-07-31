import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_peekyou.com_qez', ['https://www.peekyou.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
