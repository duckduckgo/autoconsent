import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dishoom.com_1zg', ['https://www.dishoom.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
