import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vodafone.de_nc3', ['https://www.vodafone.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
