import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_metricool.com_osw', ['https://metricool.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
