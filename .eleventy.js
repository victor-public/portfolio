module.exports = (config) => {
    config.addFilter("debug", (obj) => JSON.stringify(obj))

    config.addFilter("formatDate", (obj) => obj.toLocaleDateString())

    return {
        dir : {
            input: "src",
            output: "_dist",
            data: "_data"
        }
    }
} 