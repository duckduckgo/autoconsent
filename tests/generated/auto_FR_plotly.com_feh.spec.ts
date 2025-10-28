import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_plotly.com_feh', ['https://plotly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
