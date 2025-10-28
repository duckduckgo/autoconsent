import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rentshop.ch_388', ['https://www.rentshop.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
