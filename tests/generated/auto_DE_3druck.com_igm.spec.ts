import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_3druck.com_igm', ['https://3druck.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
