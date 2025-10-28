import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_element.io_dt5', ['https://element.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
