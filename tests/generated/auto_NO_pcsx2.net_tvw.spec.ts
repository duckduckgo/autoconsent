import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pcsx2.net_tvw', ['https://pcsx2.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
