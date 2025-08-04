import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cos.com_66l', ['https://www.cos.com/en-de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
