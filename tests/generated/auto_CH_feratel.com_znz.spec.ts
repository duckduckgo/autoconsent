import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_feratel.com_znz', ['https://www.feratel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
