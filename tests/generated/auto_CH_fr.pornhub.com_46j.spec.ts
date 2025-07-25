import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.pornhub.com_46j', ['https://fr.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
