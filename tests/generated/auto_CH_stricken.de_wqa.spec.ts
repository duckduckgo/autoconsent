import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stricken.de_wqa', ['https://www.stricken.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
