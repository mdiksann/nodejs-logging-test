import winston from "winston";

test("logging with combine format", () => {

    const logger = winston.createLogger({
        level:"info",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.simple()
        ),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info("This is a test log message");
    logger.warn("This is a warning message");
    logger.error("This is an error message");

});
