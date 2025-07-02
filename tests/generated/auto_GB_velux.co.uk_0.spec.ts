import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_velux.co.uk_0', ['https://www.velux.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
