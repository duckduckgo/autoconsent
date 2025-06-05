import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_arbtalk.co.uk_0', ['https://arbtalk.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
