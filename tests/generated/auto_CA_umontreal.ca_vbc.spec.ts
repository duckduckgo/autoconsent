import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_umontreal.ca_vbc', ['https://www.umontreal.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
