import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_arinfo.fr_np0', ['https://arinfo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
