import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kinsta.com_pqs', ['https://kinsta.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
