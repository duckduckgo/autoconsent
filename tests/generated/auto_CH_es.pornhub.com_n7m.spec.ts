import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_es.pornhub.com_n7m', ['https://es.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
