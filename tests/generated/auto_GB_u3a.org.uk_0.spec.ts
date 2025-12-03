import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_u3a.org.uk_0', ['https://www.u3a.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
