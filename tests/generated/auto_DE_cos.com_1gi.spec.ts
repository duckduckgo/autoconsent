import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cos.com_1gi', ['https://www.cos.com/en-de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
