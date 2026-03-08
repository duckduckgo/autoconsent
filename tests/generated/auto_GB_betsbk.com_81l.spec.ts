import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_betsbk.com_81l', ['https://betsbk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
