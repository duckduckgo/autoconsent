import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_queerty.com_j4p', ['https://www.queerty.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
