import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_stortorvet.no_lln', ['https://stortorvet.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
