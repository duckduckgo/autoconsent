import generateCMPTests from '../playwright/runner';

generateCMPTests('rule34-xxx', ['https://rule34.xxx/index.php?page=post&s=list&tags=all'], {
    onlyRegions: ['DE'],
    testOptIn: false,
});
