import generateCMPTests from '../playwright/runner';

generateCMPTests('shopware', [
    'https://www.trauttmansdorff.it/',
    'https://true-fruits.com/',
    'https://www.conalco.de/',
    'https://disana.de/',
    'https://tubus.com/',
]);

// Shopware binds the deny button to touchstart on touch devices, so cover the touch path too.
generateCMPTests('shopware', ['https://www.trauttmansdorff.it/', 'https://true-fruits.com/'], { mobile: true });
