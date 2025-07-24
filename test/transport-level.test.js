import winston from "winston";

test("create new logger with console & file transport", () => {

    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "application.log"
            }),
            new winston.transports.File({
                level:"error",
                filename: "application-error.log"
            }),
        ]
    });

    logger.info("This is a test log message");
    logger.warn("This is a warning message");
    logger.error("This is an error message");
});