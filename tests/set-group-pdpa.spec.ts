import generateCMPTests from '../playwright/runner';

generateCMPTests('set-group-pdpa', [
    'https://www.set.or.th/th/home',
    'https://www.set.or.th/en/home',
    'https://www.tfex.co.th/th/home',
    'https://www.settrade.com/th/home',
    'https://www.setinvestnow.com/th/home',
]);
