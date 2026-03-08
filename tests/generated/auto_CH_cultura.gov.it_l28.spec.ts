import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cultura.gov.it_l28', ['https://cultura.gov.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
