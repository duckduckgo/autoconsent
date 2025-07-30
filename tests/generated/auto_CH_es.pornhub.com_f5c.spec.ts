import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_es.pornhub.com_f5c', ['https://es.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
