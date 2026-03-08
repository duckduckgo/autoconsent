import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_alarm.com_fa9', ['https://alarm.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
