import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'localbiz-cookie-notice',
    ['https://appartementhotel-bs.de/', 'https://jennyshaarstudio.de/', 'https://rosarium-park.nl/', 'https://beautybaraesthetics.co.uk/'],
    {},
);
