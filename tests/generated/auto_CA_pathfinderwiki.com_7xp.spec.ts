import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pathfinderwiki.com_7xp', ['https://pathfinderwiki.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
