import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_autodesk.com_uz5', ['https://www.autodesk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
