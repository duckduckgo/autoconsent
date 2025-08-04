import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_autodesk.com_kyw', ['https://www.autodesk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
