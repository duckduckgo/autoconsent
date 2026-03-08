import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_b-und-w.com_ff6', ['https://b-und-w.com/de?utm_source=vhbw.de&utm_medium=Redirect'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
