import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aquaparc.ch_k3l', ['https://www.aquaparc.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
