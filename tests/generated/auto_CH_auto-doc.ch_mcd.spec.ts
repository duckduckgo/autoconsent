import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_auto-doc.ch_mcd', ['https://www.auto-doc.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
