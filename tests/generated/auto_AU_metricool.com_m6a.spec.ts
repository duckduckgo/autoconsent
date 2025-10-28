import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_metricool.com_m6a', ['https://metricool.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
