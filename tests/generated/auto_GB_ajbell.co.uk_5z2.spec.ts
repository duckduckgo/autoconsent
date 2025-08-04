import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ajbell.co.uk_5z2', ['https://www.ajbell.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
