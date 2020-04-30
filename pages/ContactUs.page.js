class ContactUs {
  url() {
    return "index.php?controller=contact";
  }

  subjectHeader(subject) {
    switch (subject) {
      case "Customer service":
        return $("//select[@id='id_contact']//option[@value='2']");
        break;
      case "Webmaster":
        return $("//select[@id='id_contact']//option[@value='1']");
        break;
      default:
        `The selected subject ${subject} does not exists`;
        break;
    }
  }

  email() {
    return $("#email");
  }

  orderReference() {
    return $("#id_order");
  }

  message() {
    return $("#message");
  }

  sendButton() {
    return $("#submitMessage");
  }

  errorMessage() {
    return $("//ol//li");
  }

  /**
   * @param {String} subject passes a subject which calls function to return givens subject selector
   * @param {String} email an valid email
   * @param {String} orderReference a sequence of numbers and/or characters
   * @param {String} message given message to send which is a string
   */
  fillContactUs(subject, email, orderReference, message) {
    this.subjectHeader(subject).click();
    this.email().addValue(email);
    this.orderReference().addValue(orderReference);
    this.message().addValue(message);
  }
}

module.exports = new ContactUs();
