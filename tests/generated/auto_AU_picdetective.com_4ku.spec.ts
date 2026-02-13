import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_picdetective.com_4ku', ['https://picdetective.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
