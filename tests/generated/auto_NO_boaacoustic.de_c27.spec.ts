import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_boaacoustic.de_c27', ['https://boaacoustic.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
