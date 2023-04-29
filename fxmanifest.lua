fx_version "cerulean"
game "gta5"
lua54 "yes"
author "Babicz"

files {
    "ui/index.html",
    "ui/script.js",
    "ui/style.css",
    "ui/logo.png"
}

loadscreen "ui/index.html"
loadscreen_cursor "yes"
loadscreen_manual_shutdown "yes"

ui_page "ui/index.html"

client_script "client.lua"