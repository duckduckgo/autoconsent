import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_plotly.com_nn3', ['https://plotly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
