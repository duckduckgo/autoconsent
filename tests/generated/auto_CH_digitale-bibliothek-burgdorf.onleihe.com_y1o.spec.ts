import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CH_digitale-bibliothek-burgdorf.onleihe.com_y1o',
    ['https://digitale-bibliothek-burgdorf.onleihe.com/burgdorf/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] },
);
