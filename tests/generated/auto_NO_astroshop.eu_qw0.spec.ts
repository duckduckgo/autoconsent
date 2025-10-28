import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_astroshop.eu_qw0', ['https://www.astroshop.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
