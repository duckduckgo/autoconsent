import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vaadin.com_rht', ['https://vaadin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
