import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logging with daily rotate file", () => {

    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename: "test-%DATE%.log",
                zippedArchive: true,
                maxSize: "1m",
                maxFiles: "7d"
            })
        ]
    });

    for (let i = 0; i < 100000; i++) {
        logger.info(`This is log message number ${i}`);
    }

});
