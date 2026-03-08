import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_app.flow.bio_tm2', ['https://app.flow.bio/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
