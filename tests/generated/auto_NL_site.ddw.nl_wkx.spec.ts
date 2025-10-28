import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_site.ddw.nl_wkx', ['https://site.ddw.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
