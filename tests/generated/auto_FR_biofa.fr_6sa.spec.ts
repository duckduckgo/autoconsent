import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_biofa.fr_6sa', ['https://biofa.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
