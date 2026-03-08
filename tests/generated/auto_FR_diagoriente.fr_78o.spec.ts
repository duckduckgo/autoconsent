import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_diagoriente.fr_78o', ['https://diagoriente.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
