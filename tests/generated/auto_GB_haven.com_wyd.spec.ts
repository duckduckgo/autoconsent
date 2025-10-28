import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_haven.com_wyd', ['https://www.haven.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
