import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rijnmond.nl_fve', ['https://www.rijnmond.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
