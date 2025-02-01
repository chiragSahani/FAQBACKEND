class APIResponse {
    constructor(statusCode, data, message) {
      this.statusCode = statusCode;
      this.data = data;
      if (message) {
        this.message = message;
      } else {
        this.message = statusCode < 400 ? "Success" : "Error";
      }
    }
  }
  
  export default APIResponse;
  export { APIResponse };