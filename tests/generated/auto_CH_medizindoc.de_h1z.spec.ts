import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_medizindoc.de_h1z', ['https://medizindoc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
