import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jeux.com_m9c', ['https://www.jeux.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
