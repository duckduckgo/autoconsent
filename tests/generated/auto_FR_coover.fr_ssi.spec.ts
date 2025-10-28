import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_coover.fr_ssi', ['https://www.coover.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
