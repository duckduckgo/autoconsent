import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_healf.com_0', ['https://healf.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
