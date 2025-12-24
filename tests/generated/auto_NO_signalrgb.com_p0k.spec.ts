import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_signalrgb.com_p0k', ['https://signalrgb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
