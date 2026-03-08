import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_beatcancer.eu_ye9', ['https://beatcancer.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
