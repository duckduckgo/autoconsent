import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lesitedelasneaker.com_71a', ['https://www.lesitedelasneaker.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
