import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rijnmond.nl_5u0', ['https://www.rijnmond.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
