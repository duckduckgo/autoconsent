import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ajbell.co.uk_kdk', ['https://www.ajbell.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
