import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_es.pornhub.com_oc8', ['https://es.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
