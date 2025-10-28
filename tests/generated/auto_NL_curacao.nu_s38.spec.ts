import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_curacao.nu_s38', ['https://www.curacao.nu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
