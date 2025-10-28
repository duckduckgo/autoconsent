import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chatelet.com_2qg', ['https://www.chatelet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
