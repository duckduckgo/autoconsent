import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jlpjobs.com_0', ['https://www.jlpjobs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
