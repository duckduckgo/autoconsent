import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_forbes.com_eh6', ['https://www.forbes.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
