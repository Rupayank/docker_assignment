const { format, createLogger, transports } = require("winston");
const { combine, timestamp, printf, colorize, errors } = format;
const myFormat = printf(({ level, message, timestamp, stack }) => {
	return `${timestamp} ${level}: ${stack || message}`;
});
const logger = createLogger({
	level: "debug",
	format: combine(
		colorize(),
		timestamp({ format: "YYYY-MM-DD HH:MM:SS" }),
		errors({ stack: true }),
		myFormat
	),
	transports: [new transports.Console()],
});
module.exports = logger;
