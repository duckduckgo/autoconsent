import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meubles.fr_bem', ['https://www.meubles.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
