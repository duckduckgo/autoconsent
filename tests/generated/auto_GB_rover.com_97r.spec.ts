import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rover.com_97r', ['https://www.rover.com/uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
