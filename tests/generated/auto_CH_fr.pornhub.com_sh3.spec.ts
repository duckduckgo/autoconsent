import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.pornhub.com_sh3', ['https://fr.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
