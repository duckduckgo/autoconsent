import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aureusdrive.ch_7ui', ['https://aureusdrive.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
