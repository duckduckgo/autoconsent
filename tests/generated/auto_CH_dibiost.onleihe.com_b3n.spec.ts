import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CH_dibiost.onleihe.com_b3n',
    ['https://dibiost.onleihe.com/dibiost/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] },
);
