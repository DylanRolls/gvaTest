// Opens and email window to sales@gvanw.com that pulls the body text from the input forms

function mailForm(form) {
  window.open("mailto:sales@gvanw.com?subject=Quote%20Request%20From:%20&body=Name:%20"
  + form.inputName.value +"%0DEmail:%20" + form.inputEmail.value + "%0DAddress:%20"
  + form.inputAddress.value + "%0DAddress2:%20" + form.inputAddress1.value +
   "%0DCity:%20" + form.inputCity.value + "%0DState:%20" + form.inputState.value
 + "%0DZip:%20" + form.inputZip.value + "%0DJob%20Details:%20" + form.inputDetails.value);
  return false; /* cancel submit or else page reloads */
}
