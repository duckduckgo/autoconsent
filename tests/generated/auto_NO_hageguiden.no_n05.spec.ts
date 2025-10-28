import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hageguiden.no_n05', ['https://hageguiden.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
