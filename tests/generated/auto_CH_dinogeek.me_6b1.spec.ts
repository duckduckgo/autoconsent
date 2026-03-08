import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dinogeek.me_6b1', ['https://dinogeek.me/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
