set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="${SCRIPT_DIR}/.."
DEV_TOOL_DIR="/Users/colbyn/Developer/Tools/SuperSwiftDev-Projects/WebCompiler"
CARGO_MANIFEST_PATH="$DEV_TOOL_DIR/Cargo.toml"
# cd "$PROJECT_DIR"
# web-compiler build ./web-compiler.toml

# cd /Users/colbyn/Developer/Tools/SuperSwiftDev-Projects/WebCompiler

# echo "MANIFEST PATH: $CARGO_MANIFEST_PATH"
# echo "CURRENT DIR: $(pwd)"

cargo run --manifest-path "$CARGO_MANIFEST_PATH" --bin web-compiler -- build web-compiler.toml --target github-pages

