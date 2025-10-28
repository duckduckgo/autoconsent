import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pdf-xchange.de_s69', ['https://pdf-xchange.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
