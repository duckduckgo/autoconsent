import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_xhamster19.com_f10', ['https://xhamster19.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
