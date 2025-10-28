import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rohner-socks.com_1yd', ['https://rohner-socks.com/en?_rb=o&_s=_s-l-f'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
