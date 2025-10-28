import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hessenhof.nl_psu', ['https://hessenhof.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
