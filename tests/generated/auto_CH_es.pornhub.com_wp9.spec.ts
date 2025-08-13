import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_es.pornhub.com_wp9', ['https://es.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
