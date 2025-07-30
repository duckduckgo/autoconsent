import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tennet.eu_9gv', ['https://www.tennet.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
