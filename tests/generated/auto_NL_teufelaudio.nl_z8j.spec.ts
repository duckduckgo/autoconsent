import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_teufelaudio.nl_z8j', ['https://teufelaudio.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
