import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schueco.com_asl', ['https://www.schueco.com/com'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
