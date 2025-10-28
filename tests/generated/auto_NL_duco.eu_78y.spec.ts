import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_duco.eu_78y', ['https://www.duco.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
