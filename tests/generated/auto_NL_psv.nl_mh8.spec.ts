import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_psv.nl_mh8', ['https://www.psv.nl/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
