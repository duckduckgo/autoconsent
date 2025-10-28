import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ahaslides.com_htl', ['https://ahaslides.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
