import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kinsta.com_0l3', ['https://kinsta.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
