import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schueco.com_vxv', ['https://www.schueco.com/com'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
