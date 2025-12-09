import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_autodoc.de_zzs', ['https://www.autodoc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
