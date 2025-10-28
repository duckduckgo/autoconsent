import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gearnews.de_pvk', ['https://www.gearnews.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
