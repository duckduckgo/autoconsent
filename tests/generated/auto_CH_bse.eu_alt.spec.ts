import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bse.eu_alt', ['https://bse.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
