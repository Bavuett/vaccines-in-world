function logError(exception: Error) {
    console.log("\nWhoops! Couldn't tweet. \nHere's what happened. " + exception + "\n")
}

export default logError;