import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_equifarm.de_udc', ['https://equifarm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
