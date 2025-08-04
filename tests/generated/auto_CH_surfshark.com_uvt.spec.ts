import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_surfshark.com_uvt', ['https://surfshark.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
