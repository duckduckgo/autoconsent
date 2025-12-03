import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_mastersintime.com_q6g', ['https://www.mastersintime.com/movement/4n30/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
