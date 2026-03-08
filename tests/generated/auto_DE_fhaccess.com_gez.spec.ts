import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fhaccess.com_gez', ['https://fhaccess.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
