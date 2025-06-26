import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pricespy.co.uk_6rz', ['https://pricespy.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
