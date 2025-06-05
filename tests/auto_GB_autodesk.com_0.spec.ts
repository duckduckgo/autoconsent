import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_autodesk.com_0', ['https://www.autodesk.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
