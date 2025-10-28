import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zubi.swiss_cyp', ['https://zubi.swiss/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
