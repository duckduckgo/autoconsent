import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_no.co_0zf', ['https://no.co/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
