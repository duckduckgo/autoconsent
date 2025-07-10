import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_iwantclips.com_8gn', ['https://iwantclips.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
