import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_community.netskope.com_y3n', ['https://community.netskope.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
