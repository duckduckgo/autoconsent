import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_qvcuk.com_0', ['https://www.qvcuk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
