import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hvcgroep.nl_3su', ['https://www.hvcgroep.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
