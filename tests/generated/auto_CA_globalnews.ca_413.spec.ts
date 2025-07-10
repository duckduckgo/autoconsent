import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_globalnews.ca_413', ['https://globalnews.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
