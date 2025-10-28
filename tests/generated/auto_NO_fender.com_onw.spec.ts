import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fender.com_onw', ['https://eu.fender.com/?t-p-c=NO&t-p-l=en&_s=_s-c-u&t-p-r='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
