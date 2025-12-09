import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_reverb.com_iry', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
