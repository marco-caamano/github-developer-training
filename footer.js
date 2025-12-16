class Footer {
  constructor(text) {
    this.copyrightText = text;
  }
  
  render() {
    return `<footer>${this.copyrightText}</footer>`;
  }
}

module.exports = Footer;
