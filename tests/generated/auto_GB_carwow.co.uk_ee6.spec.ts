import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_carwow.co.uk_ee6', ['https://www.carwow.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
