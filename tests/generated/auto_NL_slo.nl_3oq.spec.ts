import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_slo.nl_3oq', ['https://www.slo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
