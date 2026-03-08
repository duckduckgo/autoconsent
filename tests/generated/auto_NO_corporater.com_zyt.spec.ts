import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_corporater.com_zyt', ['https://corporater.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
