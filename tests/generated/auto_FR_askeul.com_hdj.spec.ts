import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_askeul.com_hdj', ['https://askeul.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
