import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_supremecourt.uk_0', ['https://supremecourt.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
