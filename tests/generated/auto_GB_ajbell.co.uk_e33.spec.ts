import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ajbell.co.uk_e33', ['https://www.ajbell.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
