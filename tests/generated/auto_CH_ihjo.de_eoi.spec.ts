import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ihjo.de_eoi', ['https://ihjo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
