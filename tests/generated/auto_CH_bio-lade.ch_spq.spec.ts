import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bio-lade.ch_spq', ['https://bio-lade.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
