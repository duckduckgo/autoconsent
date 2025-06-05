import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_bandlab.com_0', ['https://www.bandlab.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
