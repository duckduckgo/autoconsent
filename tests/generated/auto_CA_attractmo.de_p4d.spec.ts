import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_attractmo.de_p4d', ['https://attractmo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
