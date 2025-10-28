import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_plotly.com_s9v', ['https://plotly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
