import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ugc.fr_pu9', ['https://www.ugc.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
