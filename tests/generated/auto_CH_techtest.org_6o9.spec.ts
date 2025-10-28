import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_techtest.org_6o9', ['https://techtest.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
