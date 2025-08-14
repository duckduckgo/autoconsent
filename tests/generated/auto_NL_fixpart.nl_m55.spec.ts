import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fixpart.nl_m55', ['https://fixpart.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
