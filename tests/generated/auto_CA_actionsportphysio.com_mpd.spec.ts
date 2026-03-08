import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_actionsportphysio.com_mpd', ['https://actionsportphysio.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
