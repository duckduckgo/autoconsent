import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.klapp.pro_15n', ['https://fr.klapp.pro/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
