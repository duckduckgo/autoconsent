import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nl.pornhub.com_v60', ['https://nl.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
