import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ansage.org_0f9', ['https://ansage.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
