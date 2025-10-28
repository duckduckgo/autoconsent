import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_radfahren.de_o0x', ['https://www.radfahren.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
