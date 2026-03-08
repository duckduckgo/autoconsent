import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arwa.de_ug3', ['https://arwa.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
