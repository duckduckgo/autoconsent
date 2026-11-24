// Types of the rule test data in tests/sites/**/*.json. scripts/validate-rule-sites.js builds the JSON schema from them.

/**
 * Region code, as in the REGION env var.
 * @pattern ^[A-Z]{2}$
 */
export type Region = string;

/**
 * Page URL to test.
 * @pattern ^https?://
 */
export type SiteUrl = string;

export type TestOptions = {
    /** Define an optOut test (default: true). */
    testOptOut: boolean;
    /** Run the rule's self-test after the action (default: true). */
    testSelfTest: boolean;
    /** Define an optIn test (default: true). */
    testOptIn: boolean;
    /** Do not define the tests in these regions. */
    skipRegions?: Region[];
    /** Define the tests only in these regions. */
    onlyRegions?: Region[];
    /** Run on the mobile projects instead of the desktop ones (default: false). */
    mobile: boolean;
    /** Expect the rule to find an open popup (default: true). */
    expectPopupOpen: boolean;
    /** How many autoconsentDone messages are fine before it counts as a reload loop (default: 1). */
    expectedRuns: number;
    /** Send the Global Privacy Control signal (default: false). */
    gpc: boolean;
    /**
     * Minimum test timeout in milliseconds, for sites that show the popup late.
     * @minimum 1
     */
    timeout?: number;
};

export type RuleSiteGroup = {
    /** Why these sites are here, or why they need these options. */
    note?: string;
    /** @minItems 1 */
    sites: SiteUrl[];
    options?: Partial<TestOptions>;
};

export type RuleSiteSpec = {
    /** Name of the rule that should handle the sites. */
    cmp: string;
    /** Applies to every group in the file. */
    note?: string;
    /** @minItems 1 */
    tests: RuleSiteGroup[];
};
