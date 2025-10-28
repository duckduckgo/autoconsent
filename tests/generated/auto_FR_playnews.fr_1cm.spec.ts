import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_playnews.fr_1cm', ['https://www.playnews.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
