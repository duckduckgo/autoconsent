import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_plotly.com_7gc', ['https://plotly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
