import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_taxlive.nl_h3q', ['https://www.taxlive.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
