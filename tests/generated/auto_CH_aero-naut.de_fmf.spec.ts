import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aero-naut.de_fmf', ['https://aero-naut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
