import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_poppen.de_p1u', ['https://www.poppen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
