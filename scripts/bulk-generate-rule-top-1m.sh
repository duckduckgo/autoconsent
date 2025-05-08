#!/bin/bash
set -e

SCRIPT_DIR="`dirname $0`"
DATA_FILE="${SCRIPT_DIR}/../generate-rule-data/top-1m.csv"

# Check if minimum required arguments are provided
if [ "$#" -lt 2 ]; then
    echo "Usage: $0 <count> <concurrency> [mode]"
    exit 1
fi

count="$1"
concurrency="$2"
mode="${3:-}" # Optional mode argument, will be empty if not provided

# Validate inputs
if ! [[ "$count" =~ ^[0-9]+$ ]] || ! [[ "$concurrency" =~ ^[0-9]+$ ]]; then
    echo "Count and concurrency must be positive integers"
    exit 1
fi

if [ "$concurrency" -gt "$count" ]; then
    echo "Concurrency cannot be greater than count"
    exit 1
fi

# Extract domains from CSV and convert to https URLs
domains=($(head -n "$count" "$DATA_FILE" | cut -d',' -f2 | sed 's/^/https:\/\//'))

# Process domain with generate-rule
process_domain() {
    local domain="$1"
    echo "Processing $domain"
    if [ -n "$mode" ]; then
        npx ts-node "$SCRIPT_DIR/generate-rule.ts" "$domain" "$mode"
    else
        npx ts-node "$SCRIPT_DIR/generate-rule.ts" "$domain"
    fi
}

# Process all domains maintaining maximum concurrent processes
for domain in "${domains[@]}"; do
    # Wait if we already have maximum number of background processes
    while [ $(jobs -r | wc -l) -ge "$concurrency" ]; do
        sleep 1
    done

    # Process domain in background
    process_domain "$domain" &
done

# Wait for all remaining background processes to complete
wait

echo "Completed processing $count domains"
