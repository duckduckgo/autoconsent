import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_umontreal.ca_1cg', ['https://www.umontreal.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
