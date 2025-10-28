import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sabaton.net_ke2', ['https://www.sabaton.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
