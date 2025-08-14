import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_braumarkt.com_wfi', ['https://braumarkt.com/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
