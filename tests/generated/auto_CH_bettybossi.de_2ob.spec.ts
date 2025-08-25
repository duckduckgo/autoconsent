import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bettybossi.de_2ob', ['https://bettybossi.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
