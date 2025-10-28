import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_neptune.com_wib', ['https://www.neptune.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
