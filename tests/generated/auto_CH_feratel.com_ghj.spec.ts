import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_feratel.com_ghj', ['https://www.feratel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
