import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_u-pec.fr_kqn', ['https://www.u-pec.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
