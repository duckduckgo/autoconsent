import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_freo.nl_mpt', ['https://www.freo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
