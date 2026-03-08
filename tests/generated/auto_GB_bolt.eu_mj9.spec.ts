import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bolt.eu_mj9', ['https://bolt.eu/en-gb/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
