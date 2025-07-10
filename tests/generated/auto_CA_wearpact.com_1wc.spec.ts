import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_wearpact.com_1wc', ['https://wearpact.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
