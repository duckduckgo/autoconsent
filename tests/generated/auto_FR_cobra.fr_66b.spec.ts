import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cobra.fr_66b', ['https://cobra.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
