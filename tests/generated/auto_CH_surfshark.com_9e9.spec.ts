import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_surfshark.com_9e9', ['https://surfshark.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
