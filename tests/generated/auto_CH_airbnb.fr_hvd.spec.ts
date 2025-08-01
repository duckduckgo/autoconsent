import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_airbnb.fr_hvd', ['https://www.airbnb.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
