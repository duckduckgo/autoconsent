import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stagemarkt.nl_kzd', ['https://stagemarkt.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
