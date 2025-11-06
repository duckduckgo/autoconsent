import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ruggable.co.uk_32q', ['https://ruggable.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
