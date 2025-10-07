import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_papajohns.ca_wmn', ['https://www.papajohns.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
