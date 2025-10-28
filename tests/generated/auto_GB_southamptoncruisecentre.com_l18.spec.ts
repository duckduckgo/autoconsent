import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_southamptoncruisecentre.com_l18', ['https://www.southamptoncruisecentre.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
