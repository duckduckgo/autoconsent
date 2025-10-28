import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_amazon.ie_0sy', ['https://www.amazon.ie/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
