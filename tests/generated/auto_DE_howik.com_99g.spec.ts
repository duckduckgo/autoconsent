import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_howik.com_99g', ['https://howik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
