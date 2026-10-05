import generateCMPTests from '../playwright/runner';

generateCMPTests('pandectes', [
    'https://hollandscountryclothing.co.uk/',
    'https://cluse.com/',
    'https://swedishstockings.com/', // full-page overlay ("blocking") banner variant
    // shadow DOM (<pandectes-cmp>) variant
    'https://www.parent.com/',
    'https://www.stickley.com/products/walnut-grove-spindle-bench',
    'https://www.shoepalace.com/',
    'https://www.yakima.com/',
]);
