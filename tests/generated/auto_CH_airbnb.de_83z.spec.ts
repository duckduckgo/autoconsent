import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_airbnb.de_83z', ['https://www.airbnb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
