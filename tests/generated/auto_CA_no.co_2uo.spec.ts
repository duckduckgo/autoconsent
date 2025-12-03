import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_no.co_2uo', ['https://no.co/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
