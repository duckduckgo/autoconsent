import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nordvpn.com_4s6', ['https://nordvpn.com/cybersec-site/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
