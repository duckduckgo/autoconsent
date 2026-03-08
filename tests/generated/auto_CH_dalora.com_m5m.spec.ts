import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dalora.com_m5m', ['https://dalora.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
