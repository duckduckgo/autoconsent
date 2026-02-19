import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chinesisches-horoskop.de_0je', ['https://www.chinesisches-horoskop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
