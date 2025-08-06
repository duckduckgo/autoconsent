import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_surfshark.com_7qg', ['https://surfshark.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
