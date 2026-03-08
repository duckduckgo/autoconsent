import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_abegghuus.ch_rhv', ['https://abegghuus.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
