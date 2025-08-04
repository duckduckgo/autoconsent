import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wikidiff.com_0', ['https://wikidiff.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
