import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_gacgroup.com_4co', ['https://www.gacgroup.com/en-au'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
