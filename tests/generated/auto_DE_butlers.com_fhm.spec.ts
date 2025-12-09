import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_butlers.com_fhm', ['https://www.butlers.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
