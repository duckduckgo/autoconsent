import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sceneplus.ca_5zu', ['https://www.sceneplus.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
