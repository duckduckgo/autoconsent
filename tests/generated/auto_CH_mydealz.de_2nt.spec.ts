import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mydealz.de_2nt', ['https://www.mydealz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
