import generateCMPTests from '../playwright/runner';

generateCMPTests('bankofengland.co.uk', [
    'https://www.bankofengland.co.uk/',
    'https://www.bankofengland.co.uk/banknotes/help-us-design-our-next-series-of-banknotes',
]);
