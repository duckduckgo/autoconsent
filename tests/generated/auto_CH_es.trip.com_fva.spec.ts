import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_es.trip.com_fva', ['https://es.trip.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
