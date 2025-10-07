import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_atd.ahk.nl_e8r', ['https://www.atd.ahk.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
