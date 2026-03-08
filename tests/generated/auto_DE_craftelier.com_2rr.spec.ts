import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_craftelier.com_2rr', ['https://craftelier.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
