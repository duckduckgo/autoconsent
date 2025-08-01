import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tvgids.nl_h6g', ['https://www.tvgids.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
