import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_opcoep.fr_ls8', ['https://www.opcoep.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
