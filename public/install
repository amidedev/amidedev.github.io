#!/bin/sh
# AMIDE installer
#   curl -fsSL https://amide.dev/install.sh | sh
#
# Installs the amide CLI globally via npm (https://www.npmjs.com/package/@webboxes/amide).

set -eu

amide_package="${AMIDE_PACKAGE:-@webboxes/amide}"
amide_cmd="${AMIDE_CMD:-amide}"

info() { printf '%s\n' "$1"; }
err() { printf 'error: %s\n' "$1" >&2; }

require_node_npm() {
	if ! command -v node >/dev/null 2>&1; then
		err "Node.js 22.8.0 or newer is required. Install it from https://nodejs.org, then run this installer again."
		exit 1
	fi

	if ! node -e 'const [major, minor] = process.versions.node.split(".").map(Number); process.exit(major > 22 || (major === 22 && minor >= 8) ? 0 : 1)' >/dev/null 2>&1; then
		node_version="$(node --version)"
		err "AMIDE requires Node.js 22.8.0 or newer. Found $node_version."
		exit 1
	fi

	if ! command -v npm >/dev/null 2>&1; then
		err "npm is required to install AMIDE."
		exit 1
	fi
}

main() {
	require_node_npm

	info ""
	info "Installing AMIDE (npm install -g $amide_package)..."
	info ""

	npm install -g --no-fund --no-audit "$amide_package"

	info ""
	if command -v "$amide_cmd" >/dev/null 2>&1; then
		info "AMIDE was installed successfully."
		info ""
		info "Run it with: $amide_cmd"
	else
		info "AMIDE was installed, but $amide_cmd is not on your PATH yet."
		info "Check npm's global bin directory with: npm bin -g"
		info "Then add that directory to your shell PATH."
	fi
}

main "$@"
