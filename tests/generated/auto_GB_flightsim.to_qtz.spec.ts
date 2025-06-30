import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_flightsim.to_qtz', ['https://flightsim.to/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
