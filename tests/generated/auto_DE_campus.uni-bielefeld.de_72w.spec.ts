import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_campus.uni-bielefeld.de_72w',
    ['https://campus.uni-bielefeld.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
