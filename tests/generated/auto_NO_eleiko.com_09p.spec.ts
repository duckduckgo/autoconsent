import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eleiko.com_09p', ['https://eleiko.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
