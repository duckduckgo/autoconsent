import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hpdetijd.nl_tix', ['https://www.hpdetijd.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
