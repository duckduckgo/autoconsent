import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pricespy.co.uk_qkc', ['https://pricespy.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
