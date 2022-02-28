(new EyeDropper()).open().then(color => {
    navigator.clipboard.writeText(color.sRGBHex)
})