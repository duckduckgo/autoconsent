import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aquaparc.ch_ar9', ['https://www.aquaparc.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
