import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_euronews.com_emb', ['https://www.euronews.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
