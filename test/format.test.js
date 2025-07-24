import winston from "winston";

test("logging with printf format", () => {

    const logger = winston.createLogger({
        level:"info",

        format: winston.format.printf(log => {
            return `${new Date()} : ${log.level.toUpperCase()}: ${log.message}`;
        }),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info("This is a test log message");
    logger.warn("This is a warning message");   
    logger.error("This is an error message");
});