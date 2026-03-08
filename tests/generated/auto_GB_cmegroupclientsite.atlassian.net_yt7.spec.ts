import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cmegroupclientsite.atlassian.net_yt7', ['https://cmegroupclientsite.atlassian.net/wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
