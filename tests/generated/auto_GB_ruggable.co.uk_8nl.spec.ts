import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ruggable.co.uk_8nl', ['https://ruggable.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
