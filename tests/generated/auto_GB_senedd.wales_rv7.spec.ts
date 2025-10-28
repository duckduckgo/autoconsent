import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_senedd.wales_rv7', ['https://senedd.wales/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
