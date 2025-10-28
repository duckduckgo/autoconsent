import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stassen.nl_yvd', ['https://www.stassen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
