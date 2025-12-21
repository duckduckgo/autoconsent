import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_acetool.com_n0w', ['https://www.acetool.com/products/makita-drc200pt-robotic-vacuum-kit'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
