import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_franceverif.fr_tkm', ['https://franceverif.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
