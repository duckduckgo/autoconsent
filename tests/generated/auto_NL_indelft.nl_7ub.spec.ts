import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_indelft.nl_7ub', ['https://www.indelft.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
