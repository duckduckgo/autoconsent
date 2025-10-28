import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_telenor.com_s8l', ['https://www.telenor.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
