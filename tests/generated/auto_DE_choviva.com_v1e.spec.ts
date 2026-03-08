import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_choviva.com_v1e', ['https://choviva.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
