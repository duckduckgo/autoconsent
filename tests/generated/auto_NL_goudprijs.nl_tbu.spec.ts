import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_goudprijs.nl_tbu', ['https://www.goudprijs.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
