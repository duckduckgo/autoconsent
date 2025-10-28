import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_jonet.nl_kor', ['https://jonet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
