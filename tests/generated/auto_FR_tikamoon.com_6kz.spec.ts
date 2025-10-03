import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tikamoon.com_6kz', ['https://www.tikamoon.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
