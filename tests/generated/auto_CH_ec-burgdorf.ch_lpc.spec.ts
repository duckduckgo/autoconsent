import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ec-burgdorf.ch_lpc', ['https://ec-burgdorf.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
