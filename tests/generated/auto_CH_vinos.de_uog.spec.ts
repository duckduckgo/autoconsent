import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vinos.de_uog', ['https://www.vinos.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
