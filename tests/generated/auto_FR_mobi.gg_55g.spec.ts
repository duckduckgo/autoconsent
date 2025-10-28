import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mobi.gg_55g', ['https://mobi.gg/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
