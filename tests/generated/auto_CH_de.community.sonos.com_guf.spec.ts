import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.community.sonos.com_guf', ['https://de.community.sonos.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
