import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_perfactive.fr_df8', ['https://perfactive.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
