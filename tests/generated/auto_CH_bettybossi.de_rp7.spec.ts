import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bettybossi.de_rp7', ['https://bettybossi.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
