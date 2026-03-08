import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_en.uhomes.com_4ov', ['https://en.uhomes.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
