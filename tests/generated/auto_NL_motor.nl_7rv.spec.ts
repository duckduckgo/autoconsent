import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_motor.nl_7rv', ['https://www.motor.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
