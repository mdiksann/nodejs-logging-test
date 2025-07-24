import winston from "winston";

test("logging with shortcut function", () => {

    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.debug("This is a debug message");
    logger.info("This is an info message"); 
    logger.warn("This is a warning message");
    logger.error("This is an error message");   
    logger.verbose("This is a verbose message");
    logger.silly("This is a silly message");
    logger.http("This is an HTTP message");
});
