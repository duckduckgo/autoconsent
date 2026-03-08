import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bccsw.ca_8s4', ['https://bccsw.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
