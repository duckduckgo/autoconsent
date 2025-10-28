import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bang-olufsen.com_n4l', ['https://www.bang-olufsen.com/de/ch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
