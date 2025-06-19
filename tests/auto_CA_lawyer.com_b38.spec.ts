import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_lawyer.com_b38', ['http://www.lawyer.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
