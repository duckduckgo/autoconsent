import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mam.paris.fr_vbh', ['https://www.mam.paris.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
