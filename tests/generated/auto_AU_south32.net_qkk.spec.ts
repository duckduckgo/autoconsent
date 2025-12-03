import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_south32.net_qkk', ['https://www.south32.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
