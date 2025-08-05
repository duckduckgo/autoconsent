import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tennet.eu_rrh', ['https://www.tennet.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
