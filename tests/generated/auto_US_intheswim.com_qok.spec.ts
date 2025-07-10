import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_intheswim.com_qok', ['https://intheswim.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
