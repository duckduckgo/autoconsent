import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ancestry.fr_04q', ['https://www.ancestry.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
