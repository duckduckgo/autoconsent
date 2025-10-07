import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_south32.net_b9x', ['https://www.south32.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
