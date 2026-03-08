import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_coating.ca_1dj', ['https://coating.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
