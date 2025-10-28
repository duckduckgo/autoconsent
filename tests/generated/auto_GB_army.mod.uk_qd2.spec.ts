import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_army.mod.uk_qd2', ['https://www.army.mod.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
