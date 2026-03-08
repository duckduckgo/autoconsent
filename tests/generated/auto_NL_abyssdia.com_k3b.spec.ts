import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_abyssdia.com_k3b', ['https://abyssdia.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
