import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sceneplus.ca_vfn', ['https://www.sceneplus.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
