import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_swedavia.com_r0x', ['https://www.swedavia.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
