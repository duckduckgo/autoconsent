import generateCMPTests from '../playwright/runner';

generateCMPTests('dpgmedia-nl', ['https://www.rtl.nl/', 'https://www.ad.nl/', 'https://www.volkskrant.nl/'], {});
