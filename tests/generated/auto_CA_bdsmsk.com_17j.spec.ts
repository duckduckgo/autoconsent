import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bdsmsk.com_17j', ['https://bdsmsk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
