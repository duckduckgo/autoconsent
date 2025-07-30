import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_queerty.com_gwq', ['https://www.queerty.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
