import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_amazon.de_y28', ['https://www.amazon.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
