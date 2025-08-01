import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_airbnb.co.uk_1cd', ['https://www.airbnb.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
