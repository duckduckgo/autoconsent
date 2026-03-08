import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_browning.no_pkg', ['https://browning.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
