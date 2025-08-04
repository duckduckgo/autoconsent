import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.pornhub.com_15v', ['https://fr.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
