import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pestor.nl_vyp', ['https://pestor.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
