import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_next.co.uk_54m', ['https://www.next.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
