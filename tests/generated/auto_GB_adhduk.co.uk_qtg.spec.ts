import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_adhduk.co.uk_qtg', ['https://adhduk.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
