import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_b4rn.org.uk_gqo', ['https://b4rn.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
