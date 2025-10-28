import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_everand.com_f4l', ['https://www.everand.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
