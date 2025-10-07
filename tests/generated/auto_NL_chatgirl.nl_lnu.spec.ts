import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_chatgirl.nl_lnu', ['https://www.chatgirl.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
