import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_naolib.fr_tw7', ['https://naolib.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
