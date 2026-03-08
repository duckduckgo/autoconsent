import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_freel.ca_zdx', ['https://freel.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
