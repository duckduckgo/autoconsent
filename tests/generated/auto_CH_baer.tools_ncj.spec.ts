import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_baer.tools_ncj', ['https://baer.tools/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
