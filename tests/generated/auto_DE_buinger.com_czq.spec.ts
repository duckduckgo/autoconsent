import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_buinger.com_czq', ['https://buinger.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
