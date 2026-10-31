/**
 * Required-literal prefilter for heuristic detect patterns (see docs/heuristic-prefilter.md): each built-in pattern has
 * literals that any match must contain, generated at build time into heuristic-literals.ts. A text is checked for all
 * of them in one pass, and a pattern whose literals are all absent can't match, so it is skipped without changing any
 * result.
 */

/** The literals, distinct and longest first, and the source of the lookahead regex over them. */
export function literalIndexSource(all: string[]): { literals: string[]; source: string } {
    const literals = [...new Set(all)].sort((a, b) => b.length - a.length);
    const escape = (l: string) => l.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
    return { literals, source: literals.length ? `(?=(${literals.map(escape).join('|')}))` : '' };
}

/**
 * A literal index from a prepared `literalIndexSource`: it finds which literals a text contains in one pass. A zero-width
 * lookahead over the literals, longest first, reports the longest one starting at each position, and any other literal
 * starting there is a prefix of it.
 */
export function literalIndexFrom({ literals: distinct, source }: { literals: string[]; source: string }): {
    present: (lower: string) => Set<string>;
} {
    if (distinct.length === 0) {
        return { present: () => new Set() };
    }
    const any = new RegExp(source, 'g');
    // which literals a reported one implies (itself and its prefixes), worked out only for literals a page contains
    const implies = new Map<string, string[]>();
    const impliedBy = (m: string) => {
        let list = implies.get(m);
        if (!list) {
            list = distinct.filter((l) => m.startsWith(l));
            implies.set(m, list);
        }
        return list;
    };
    return {
        present(lower: string) {
            const found = new Set<string>();
            for (const m of lower.matchAll(any)) {
                if (!found.has(m[1])) {
                    impliedBy(m[1]).forEach((l) => found.add(l));
                }
            }
            return found;
        },
    };
}
