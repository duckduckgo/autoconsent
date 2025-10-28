import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_globuli.de_djf', ['https://www.globuli.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
