import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_es.pornhub.com_uvz', ['https://es.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
