import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.community.sonos.com_ghi', ['https://de.community.sonos.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
