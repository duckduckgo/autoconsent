import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kinsta.com_6tb', ['https://kinsta.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
