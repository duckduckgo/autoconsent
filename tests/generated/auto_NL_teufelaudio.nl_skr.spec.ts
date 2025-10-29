import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_teufelaudio.nl_skr', ['https://teufelaudio.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
