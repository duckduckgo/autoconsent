import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_brandonsanderson.com_r7x', ['https://www.brandonsanderson.com/blogs/blog/state-of-the-sanderson-2025'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
