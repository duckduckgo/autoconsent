import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_openai.com_7xz', ['https://openai.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
