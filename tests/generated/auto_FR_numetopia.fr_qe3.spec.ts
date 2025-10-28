import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_numetopia.fr_qe3', ['https://www.numetopia.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
