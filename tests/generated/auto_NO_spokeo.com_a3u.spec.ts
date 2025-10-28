import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_spokeo.com_a3u', ['https://www.spokeo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
