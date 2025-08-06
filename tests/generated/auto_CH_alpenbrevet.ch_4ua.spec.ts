import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alpenbrevet.ch_4ua', ['https://alpenbrevet.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
