function telephoneCheck(str) {
// return /(1\s)?(\([0-9]{3}\)|[0-9]{3})(\s|-)?[0-9]{3}(-|\s)?[0-9]{4}/g.test(str);
  let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
        rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (rex1.test(str)) {
        return true;
    }
    else {
        return rex2.test(str) ? true : false
    }
}

telephoneCheck("555-555-5555");