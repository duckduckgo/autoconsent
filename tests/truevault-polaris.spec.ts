import generateCMPTests from '../playwright/runner';

generateCMPTests('truevault-polaris', [
    'https://www.mcgeeandco.com/products/calvert-brass-tissue-box-cover',
    'https://www.crossfit.com/',
    'https://www.crunch.com/',
    'https://www.thorne.com/',
    // "Okay" instead of "Accept"
    'https://www.famous-smoke.com/',
    // "Customize / Strictly Necessary / Accept All" variant
    'https://www.philzcoffee.com/',
]);
