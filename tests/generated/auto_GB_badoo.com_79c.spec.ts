import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_badoo.com_79c', ['https://badoo.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
