import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thewi.org.uk_rwe', ['https://www.thewi.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
