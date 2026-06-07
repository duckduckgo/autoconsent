import generateCMPTests from '../playwright/runner';

generateCMPTests('Complianz notice', ['https://yrc.com/', 'https://www.worldometers.info/'], {
    skipRegions: ['GB'],
});

generateCMPTests('Complianz notice', ['https://www.thelightphone.com/shop/products/light-phone-ii-black']);
