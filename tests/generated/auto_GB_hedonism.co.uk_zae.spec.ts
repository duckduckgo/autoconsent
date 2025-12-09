import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hedonism.co.uk_zae', ['https://hedonism.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
