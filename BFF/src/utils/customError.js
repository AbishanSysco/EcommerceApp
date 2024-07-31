class customError extends error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

module.exports = customError;
