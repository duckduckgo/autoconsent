import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vetuk.co.uk_0', ['https://www.vetuk.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
