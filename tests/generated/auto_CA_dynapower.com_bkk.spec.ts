import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dynapower.com_bkk', ['https://dynapower.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
