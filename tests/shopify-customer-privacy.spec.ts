import { test } from '@playwright/test';
import generateCMPTests from '../playwright/runner';

const region = (process.env.REGION || 'NA').trim();
// Shopify's storefront privacy banner is shown for EU/EEA-like visitors, not US/NA.
if (!['US', 'NA'].includes(region)) {
    generateCMPTests('shopify-customer-privacy', ['https://store.leviton.com/collections/smart-load-center', 'https://store.leviton.com/']);
} else {
    test.describe('shopify-customer-privacy', () => {
        test('skipped in US/NA (no GDPR-style banner to exercise)', () => {});
    });
}
