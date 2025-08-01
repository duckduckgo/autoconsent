import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ugc.fr_e14', ['https://www.ugc.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
