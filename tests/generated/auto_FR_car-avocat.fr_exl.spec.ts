import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_car-avocat.fr_exl', ['https://car-avocat.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
