module.exports = {
    apps: [
        {
            name: "server",
            instances: 1,
            script: "./server.ts",
            interpreter: "./node_modules/.bin/ts-node",
            exec_mode: "cluster",
            watch: [
                "server.ts",
            ],

            error_file: "./logs/error.log",
            out_file: "./logs/out.log",
            log_date_format: "YYYY-MM-DD HH:mm Z",
        },
    ],
};