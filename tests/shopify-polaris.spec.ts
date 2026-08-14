import generateCMPTests from '../playwright/runner';

generateCMPTests('shopify-polaris', ['https://www.mcgeeandco.com/products/calvert-brass-tissue-box-cover']);
generateCMPTests('shopify-polaris', ['https://mightyvault.com/'], { testOptOut: false, testSelfTest: false });
