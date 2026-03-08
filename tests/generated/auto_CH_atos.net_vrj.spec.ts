import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_atos.net_vrj', ['https://atos.net/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
