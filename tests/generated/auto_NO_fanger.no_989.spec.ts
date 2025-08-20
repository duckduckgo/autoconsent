import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fanger.no_989', ['https://www.fanger.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
