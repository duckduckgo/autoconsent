import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_trents.co.uk_6n8', ['https://www.trents.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
