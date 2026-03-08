import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fep.asso.fr_0vl', ['https://fep.asso.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
