import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aok.de_w0q', ['https://www.aok.de/pk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
