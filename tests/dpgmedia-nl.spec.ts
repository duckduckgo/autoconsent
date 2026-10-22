import generateCMPTests from '../playwright/runner';

generateCMPTests('dpgmedia-nl', ['https://www.ad.nl/', 'https://www.parool.nl/', 'https://www.volkskrant.nl/', 'https://www.hln.be/'], {});
