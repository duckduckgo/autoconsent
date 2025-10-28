import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thebms.org.uk_iio', ['https://thebms.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
