import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.pornhub.com_u41', ['https://fr.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
