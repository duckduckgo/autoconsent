import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_loudwire.com_ujv', ['https://loudwire.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
