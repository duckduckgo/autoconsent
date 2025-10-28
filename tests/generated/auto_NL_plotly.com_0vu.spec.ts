import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_plotly.com_0vu', ['https://plotly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
