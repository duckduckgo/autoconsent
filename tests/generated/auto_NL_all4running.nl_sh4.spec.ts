import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_all4running.nl_sh4', ['https://all4running.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
