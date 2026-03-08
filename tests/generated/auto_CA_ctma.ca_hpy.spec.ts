import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ctma.ca_hpy', ['https://ctma.ca/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
