import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bonprix.fr_o83', ['https://www.bonprix.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
