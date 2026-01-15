import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_autodoc.de_krd', ['https://www.autodoc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
