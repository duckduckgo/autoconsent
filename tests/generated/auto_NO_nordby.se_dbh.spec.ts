import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nordby.se_dbh', ['https://nordby.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
