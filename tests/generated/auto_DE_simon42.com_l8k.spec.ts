import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_simon42.com_l8k', ['https://www.simon42.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
