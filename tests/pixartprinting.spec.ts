import generateCMPTests from '../playwright/runner';

const urls = ['https://www.pixartprinting.it/', 'https://www.pixartprinting.de/', 'https://www.pixartprinting.co.uk/'];

generateCMPTests('pixartprinting', urls);

generateCMPTests('pixartprinting', urls, {
    mobile: true,
});
