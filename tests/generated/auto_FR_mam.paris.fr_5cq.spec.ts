import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mam.paris.fr_5cq', ['https://www.mam.paris.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
