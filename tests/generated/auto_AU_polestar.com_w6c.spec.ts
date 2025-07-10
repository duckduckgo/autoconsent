import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_polestar.com_w6c', ['https://www.polestar.com/au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
