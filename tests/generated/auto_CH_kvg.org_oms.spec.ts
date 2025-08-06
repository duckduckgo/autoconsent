import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kvg.org_oms', ['https://www.kvg.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
