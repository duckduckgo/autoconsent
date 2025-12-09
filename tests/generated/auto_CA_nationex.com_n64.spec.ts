import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_nationex.com_n64', ['https://nationex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
