import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_equiniti.com_jf6', ['https://equiniti.com/uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
