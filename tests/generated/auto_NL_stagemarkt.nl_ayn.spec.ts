import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stagemarkt.nl_ayn', ['https://stagemarkt.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
