import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pcsx2.net_grl', ['https://pcsx2.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
