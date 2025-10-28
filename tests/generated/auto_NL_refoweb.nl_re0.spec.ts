import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_refoweb.nl_re0', ['https://www.refoweb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
