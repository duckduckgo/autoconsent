import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_elastic.co_c7r', ['https://www.elastic.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
