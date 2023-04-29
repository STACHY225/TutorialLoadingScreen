AddEventHandler("playerSpawned", function()
    SendLoadingScreenMessage(json.encode({
        action = "start"
    }))
end)

RegisterNUICallback("start", function(data, cb)
    ShutdownLoadingScreenNui()
    cb(true)
end)