import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hertz.com_9tb', ['https://www.hertz.com/rentacar/reservation/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
