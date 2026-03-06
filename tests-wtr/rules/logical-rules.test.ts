import { expect } from '@esm-bundle/chai';
import { AutoConsentCMP } from '../../lib/cmps/base';
import AutoConsent from '../../lib/web';
import { DomActions } from '../../lib/dom-actions';
import sinon from 'sinon';

describe('AutoConsentCMP', () => {
    let autoconsentMock: AutoConsent;
    let domActionsMock: sinon.SinonStubbedInstance<DomActions>;
    let cmp: AutoConsentCMP;

    beforeEach(() => {
        domActionsMock = sinon.createStubInstance(DomActions);
        autoconsentMock = {
            config: {
                // @ts-expect-error - it's a mock!
                logs: {},
            },
            domActions: domActionsMock,
            sendContentMessage: sinon.stub(),
            // @ts-expect-error - it's a mock!
            state: {},
            updateState: () => Promise.resolve(),
        };
        cmp = new AutoConsentCMP(
            {
                name: 'test',
                detectCmp: [],
                detectPopup: [],
                optOut: [],
                optIn: [],
                test: [],
            },
            autoconsentMock,
        );
    });

    describe('negating rules', () => {
        it('correctly handles non-negated rules', async () => {
            domActionsMock.cookieContains.returns(false);
            expect(await cmp._runRulesSequentially([{ cookieContains: 'testcookie1' }])).to.equal(false);
        });

        it('correctly negates true results', async () => {
            domActionsMock.cookieContains.returns(true);
            expect(await cmp._runRulesSequentially([{ cookieContains: 'testcookie1', negated: true }])).to.equal(false);
        });

        it('correctly negates false results', async () => {
            domActionsMock.cookieContains.returns(false);
            expect(await cmp._runRulesSequentially([{ cookieContains: 'testcookie1', negated: true }])).to.equal(true);
        });

        it('correctly negates results of "any" rules', async () => {
            domActionsMock.cookieContains.returns(false);
            expect(
                await cmp._runRulesSequentially([
                    {
                        any: [{ cookieContains: 'testcookie1' }, { cookieContains: 'testcookie2' }],
                        negated: true,
                    },
                ]),
            ).to.equal(true);
        });

        it('does not negate empty results', async () => {
            // @ts-expect-error - it's a mock!
            expect(await cmp._runRulesSequentially([{ unrecognizedRule: 'bla', negated: true }])).to.equal(false);
        });
    });

    describe('"any" rules', () => {
        it('returns true as soon as one of the steps returns true', async () => {
            domActionsMock.cookieContains.returns(false);
            expect(
                await cmp._runRulesSequentially([
                    {
                        any: [{ cookieContains: 'testcookie1', negated: true }, { cookieContains: 'testcookie2' }],
                    },
                ]),
            ).to.equal(true);
            expect(domActionsMock.cookieContains.callCount).to.equal(1);
        });

        it('does not give up until it tries all the options', async () => {
            domActionsMock.cookieContains.returns(false);
            expect(
                await cmp._runRulesSequentially([
                    {
                        any: [{ cookieContains: 'testcookie1' }, { cookieContains: 'testcookie2', negated: true }],
                    },
                ]),
            ).to.equal(true);
            expect(domActionsMock.cookieContains.callCount).to.equal(2);
        });

        it('returns false if all steps return false', async () => {
            domActionsMock.cookieContains.returns(false);
            expect(
                await cmp._runRulesSequentially([
                    {
                        any: [{ cookieContains: 'testcookie1' }, { cookieContains: 'testcookie2' }],
                    },
                ]),
            ).to.equal(false);
            expect(domActionsMock.cookieContains.callCount).to.equal(2);
        });
    });

    describe('"if" rules', () => {
        it('executes "then" branch when "if" condition is true', async () => {
            domActionsMock.elementExists.withArgs('selector1').returns(true);
            domActionsMock.click.withArgs('selector2').returns(Promise.resolve(true));

            const result = await cmp._runRulesSequentially([
                {
                    if: { exists: 'selector1' },
                    then: [{ click: 'selector2' }],
                    else: [{ click: 'selector3' }],
                },
            ]);
            expect(result).to.equal(true);
            expect(domActionsMock.elementExists.calledWith('selector1')).to.be.true;
            expect(domActionsMock.click.calledWith('selector2')).to.be.true;
            expect(domActionsMock.click.calledWith('selector3')).to.be.false;
        });

        it('executes "else" branch when "if" condition is false', async () => {
            domActionsMock.elementExists.withArgs('selector1').returns(false);
            domActionsMock.click.withArgs('selector3').returns(Promise.resolve(true));

            const result = await cmp._runRulesSequentially([
                {
                    if: { exists: 'selector1' },
                    then: [{ click: 'selector2' }],
                    else: [{ click: 'selector3' }],
                },
            ]);
            expect(result).to.equal(true);
            expect(domActionsMock.elementExists.calledWith('selector1')).to.be.true;
            expect(domActionsMock.click.calledWith('selector2')).to.be.false;
            expect(domActionsMock.click.calledWith('selector3')).to.be.true;
        });

        it('returns false if the executed branch returns false', async () => {
            domActionsMock.elementExists.withArgs('selector1').returns(false);
            domActionsMock.click.returns(Promise.resolve(false));

            const result = await cmp._runRulesSequentially([
                {
                    if: { exists: 'selector1' },
                    then: [{ click: 'selector2' }],
                    else: [{ click: 'selector3' }],
                },
            ]);
            expect(result).to.equal(false);
        });

        it('handles missing "else" branch by returning true when "if" is false', async () => {
            domActionsMock.elementExists.withArgs('selector1').returns(false);

            const result = await cmp._runRulesSequentially([
                {
                    if: { exists: 'selector1' },
                    then: [{ click: 'selector2' }],
                },
            ]);
            expect(result).to.equal(true);
        });

        it('handles missing "then" branch by returning false when "if" is true', async () => {
            domActionsMock.elementExists.withArgs('selector1').returns(true);

            const result = await cmp._runRulesSequentially([
                {
                    if: { exists: 'selector1' },
                    else: [{ click: 'selector2' }],
                },
            ]);
            expect(result).to.equal(false);
        });

        it('supports nested "if" rules', async () => {
            domActionsMock.elementExists.withArgs('selector1').returns(true);
            domActionsMock.elementExists.withArgs('selector2').returns(false);
            domActionsMock.click.withArgs('selector3').returns(Promise.resolve(true));
            domActionsMock.click.withArgs('selector4').returns(Promise.resolve(false));

            const result = await cmp._runRulesSequentially([
                {
                    if: { exists: 'selector1' },
                    then: [
                        {
                            if: { exists: 'selector2' },
                            then: [{ click: 'selector3' }],
                            else: [{ click: 'selector4' }],
                        },
                    ],
                },
            ]);
            expect(result).to.equal(false);
            expect(domActionsMock.click.calledWith('selector4')).to.be.true;
        });
    });
});
