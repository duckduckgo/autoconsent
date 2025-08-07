import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_autodesk.com_bv7', ['https://www.autodesk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
