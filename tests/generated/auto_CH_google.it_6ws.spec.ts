import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_google.it_6ws', ['https://www.google.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
