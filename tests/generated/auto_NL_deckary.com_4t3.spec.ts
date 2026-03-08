import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deckary.com_4t3', ['https://deckary.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
