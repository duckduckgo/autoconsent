import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aimlapi.com_dyk', ['https://aimlapi.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
