import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_seefeld.com_vxw', ['https://www.seefeld.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
