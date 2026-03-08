import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bimmercode.app_pi9', ['https://bimmercode.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
