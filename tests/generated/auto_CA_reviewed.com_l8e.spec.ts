import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_reviewed.com_l8e', ['https://www.reviewed.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
