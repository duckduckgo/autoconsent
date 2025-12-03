import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_papajohns.ca_n5j', ['https://www.papajohns.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
