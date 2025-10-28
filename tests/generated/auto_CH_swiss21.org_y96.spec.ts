import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swiss21.org_y96', ['https://swiss21.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
