import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_timsweather.au_35p', ['https://timsweather.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
