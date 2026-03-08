import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bn.org.uk_sal', ['https://bn.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
