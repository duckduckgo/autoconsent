import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_recettes.de_lcp', ['https://recettes.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
