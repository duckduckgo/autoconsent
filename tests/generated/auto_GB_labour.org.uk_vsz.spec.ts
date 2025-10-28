import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_labour.org.uk_vsz', ['https://labour.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
