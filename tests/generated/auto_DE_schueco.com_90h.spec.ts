import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schueco.com_90h', ['https://www.schueco.com/com'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
