import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hofweb.nl_m1p', ['https://www.hofweb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
