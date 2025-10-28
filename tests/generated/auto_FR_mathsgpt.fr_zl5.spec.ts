import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mathsgpt.fr_zl5', ['https://mathsgpt.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
