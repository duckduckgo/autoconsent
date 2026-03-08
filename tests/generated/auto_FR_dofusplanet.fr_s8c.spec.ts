import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dofusplanet.fr_s8c', ['https://dofusplanet.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
