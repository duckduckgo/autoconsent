import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stagemarkt.nl_yan', ['https://stagemarkt.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
