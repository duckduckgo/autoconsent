import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kinsta.com_b2l', ['https://kinsta.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
