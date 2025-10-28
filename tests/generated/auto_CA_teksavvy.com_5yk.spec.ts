import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_teksavvy.com_5yk', ['https://www.teksavvy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
