import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_slo.nl_93g', ['https://www.slo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
