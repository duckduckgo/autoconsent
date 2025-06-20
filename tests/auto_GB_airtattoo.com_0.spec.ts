import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_airtattoo.com_0', ['https://www.airtattoo.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
