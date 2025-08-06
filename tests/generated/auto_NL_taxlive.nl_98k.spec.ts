import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_taxlive.nl_98k', ['https://www.taxlive.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
