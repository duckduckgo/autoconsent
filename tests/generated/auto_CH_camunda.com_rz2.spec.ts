import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_camunda.com_rz2', ['https://camunda.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
