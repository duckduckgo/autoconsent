import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_airbnb.de_yt9', ['https://www.airbnb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
