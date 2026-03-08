import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fonda.asso.fr_0tu', ['https://fonda.asso.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
