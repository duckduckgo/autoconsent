import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.ba.com_k4s', ['https://careers.ba.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
