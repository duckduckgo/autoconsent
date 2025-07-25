import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pestor.nl_mb2', ['https://pestor.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
