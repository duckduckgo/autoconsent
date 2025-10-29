import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_libgen.help_k38', ['https://www.libgen.help/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
