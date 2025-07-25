import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_psv.nl_7o9', ['https://www.psv.nl/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
