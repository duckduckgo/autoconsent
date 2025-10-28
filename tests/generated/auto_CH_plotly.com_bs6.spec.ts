import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_plotly.com_bs6', ['https://plotly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
