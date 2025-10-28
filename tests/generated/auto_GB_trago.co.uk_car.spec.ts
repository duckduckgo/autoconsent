import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_trago.co.uk_car', ['https://www.trago.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
