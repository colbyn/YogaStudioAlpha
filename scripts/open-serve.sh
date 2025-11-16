#!/bin/bash
set -e

# Run both in background, silence output
./scripts/serve.sh >/dev/null 2>&1 &
pid1=$!

./scripts/open.sh >/dev/null 2>&1 &
pid2=$!

# Trap Ctrl+C (SIGINT) or kill (SIGTERM)
trap 'kill $pid1 $pid2 2>/dev/null; exit 0' INT TERM

wait
