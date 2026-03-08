import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_community.slido.com_6qy', ['https://community.slido.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
