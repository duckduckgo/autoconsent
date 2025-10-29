import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_obelink.nl_y04', ['https://www.obelink.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
