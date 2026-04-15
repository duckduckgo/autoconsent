import generateCMPTests from '../playwright/runner';

generateCMPTests('dmgmedia-us', ['https://www.dailymail.co.uk/ushome/index.html'], {
    onlyRegions: ['US'],
});

generateCMPTests('dmgmedia-us', ['https://www.dailymail.co.uk/ushome/index.html'], {
    onlyRegions: ['US'],
    mobile: true,
});
