import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.bonprix.ch_ofi', ['https://fr.bonprix.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
