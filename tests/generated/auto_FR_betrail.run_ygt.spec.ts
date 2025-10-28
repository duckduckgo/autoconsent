import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_betrail.run_ygt', ['https://www.betrail.run/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
