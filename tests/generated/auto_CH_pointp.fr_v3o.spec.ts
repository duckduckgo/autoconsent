import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pointp.fr_v3o', ['https://www.pointp.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
