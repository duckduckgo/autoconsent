import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_asgi.ch_qhc', ['https://www.asgi.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
