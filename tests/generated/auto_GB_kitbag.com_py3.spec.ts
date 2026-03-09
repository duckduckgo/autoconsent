import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kitbag.com_py3', ['https://www.kitbag.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
