import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hvcgroep.nl_1o1', ['https://www.hvcgroep.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
