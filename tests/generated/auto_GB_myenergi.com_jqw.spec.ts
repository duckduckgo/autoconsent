import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_myenergi.com_jqw', ['https://www.myenergi.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
