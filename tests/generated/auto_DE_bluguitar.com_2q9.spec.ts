import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bluguitar.com_2q9', ['https://bluguitar.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
