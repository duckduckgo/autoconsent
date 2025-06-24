import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_redtube.com_0', ['https://www.redtube.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
