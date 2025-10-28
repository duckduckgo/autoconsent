import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_plotly.com_ile', ['https://plotly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
