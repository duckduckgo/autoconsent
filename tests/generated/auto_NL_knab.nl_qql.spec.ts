import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_knab.nl_qql', ['https://www.knab.nl/zakelijk'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
