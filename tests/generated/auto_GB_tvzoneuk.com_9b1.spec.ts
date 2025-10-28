import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tvzoneuk.com_9b1', ['https://www.tvzoneuk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
