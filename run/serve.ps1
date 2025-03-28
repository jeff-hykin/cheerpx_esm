#!/usr/bin/env sh
echo --% >/dev/null;: ' | out-null
<#'

#
# for not-Windows operating systems
#
deno run --allow-net --allow-read --allow-write --allow-run --allow-sys https://raw.githubusercontent.com/jeff-hykin/archaeopteryx/2b2de2a286817637c298bb9c23f102a77c5cde72/mod.ts --allowAbsolute --cors main/

exit #>

#
# for windows (powershell)
#
deno run --allow-net --allow-read --allow-write --allow-run --allow-sys https://raw.githubusercontent.com/jeff-hykin/archaeopteryx/2b2de2a286817637c298bb9c23f102a77c5cde72/mod.ts --allowAbsolute --cors main/