import generateCMPTests from '../playwright/runner';

generateCMPTests('cassie', [
    'https://zepbound.lilly.com/coverage-savings',
    'https://www.lilly.com/',
    'https://www.rnib.org.uk/',
    'https://www.mskcc.org/',
]);
