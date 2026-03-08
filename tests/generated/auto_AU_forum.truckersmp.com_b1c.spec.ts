import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_forum.truckersmp.com_b1c', ['https://forum.truckersmp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
