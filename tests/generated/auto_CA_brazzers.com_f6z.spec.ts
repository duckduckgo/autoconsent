import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_brazzers.com_f6z', ['https://www.brazzers.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
