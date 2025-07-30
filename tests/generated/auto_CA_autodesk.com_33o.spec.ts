import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_autodesk.com_33o', ['https://www.autodesk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
