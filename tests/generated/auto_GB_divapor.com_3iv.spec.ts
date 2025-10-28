import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_divapor.com_3iv', ['https://www.divapor.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
