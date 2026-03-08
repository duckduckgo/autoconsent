import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dubbelglas.nu_lm0', ['https://dubbelglas.nu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
