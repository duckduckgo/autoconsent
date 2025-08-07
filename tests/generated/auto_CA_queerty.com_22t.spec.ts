import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_queerty.com_22t', ['https://www.queerty.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
