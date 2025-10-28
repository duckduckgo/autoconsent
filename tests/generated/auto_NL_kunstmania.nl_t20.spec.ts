import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kunstmania.nl_t20', ['https://kunstmania.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
