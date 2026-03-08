import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eastsidegym.it_lap', ['https://eastsidegym.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
