import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_certideal.com_8kw', ['https://certideal.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
