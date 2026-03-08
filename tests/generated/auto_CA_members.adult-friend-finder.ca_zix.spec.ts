import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_members.adult-friend-finder.ca_zix', ['http://members.adult-friend-finder.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
