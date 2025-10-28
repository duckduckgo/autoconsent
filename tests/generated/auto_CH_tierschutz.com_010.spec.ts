import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tierschutz.com_010', ['https://tierschutz.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
