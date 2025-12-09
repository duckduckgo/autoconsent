import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_picdetective.com_342', ['https://picdetective.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
