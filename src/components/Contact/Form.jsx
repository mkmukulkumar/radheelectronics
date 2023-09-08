import "./Form.css"
const Form = () => {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    
    fetch(
      "https://script.google.com/macros/s/AKfycbyLHZQtQ0Vs4pMy3OVeVzCfOcF8_40n478AqySMDnpeXS3aTQLIKPSTzMfEBI6j5M14tA/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="form-container">
      <div className="form-inner-container">
        <text className="form-heading h1-heading">WE ARE HAPPY TO PARTNER YOU</text>
        <div className="form-form-container">
          <form className="form-form" onSubmit={(e) => Submit(e)}>
            <div className="form-field">
              <input className="form-field-input contactrightmrgn bottommrgn" name="First_Name" type="text" placeholder="First Name" />
              <input className="form-field-input contactleftmrgn" name="Last_Name" type="text" placeholder="Last Name" />
            </div>
            <div className="form-field">
              <input className="form-field-input contactrightmrgn bottommrgn" name="Email" type="email" placeholder="Email" />
              <input className="form-field-input contactleftmrgn" name="Phone" type="number" placeholder="Phone" />
            </div> 
            <div className="form-field">
              <input className="form-field-input" name="Subject" type="text" placeholder="Subject"/>
            </div>
            <div className="form-field">
              <textarea className="form-field-input-message" name="Message" type="text" placeholder="Message..."/>
            </div>           
            <button className="form-field-submit" name="Name" type="submit"> Submit </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Form;