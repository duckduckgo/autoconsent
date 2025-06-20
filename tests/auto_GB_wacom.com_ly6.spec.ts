import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_wacom.com_ly6', ['https://www.wacom.com/en-de'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
