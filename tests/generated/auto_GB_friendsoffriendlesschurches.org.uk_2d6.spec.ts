import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_friendsoffriendlesschurches.org.uk_2d6', ['https://friendsoffriendlesschurches.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
