import React from 'react'


function Signupform() {
    return (
        <div className="container">
    <h1>Sign Up</h1>

    

   

{/* 


    <div class="white-bg center modal-header">
      <div class="login-register-div">
        <input id="tab1" type="radio" name="tabs" checked="">
        <label class="tab-label" for="tab1">Sign In</label>
      
        <input id="tab2" type="radio" name="tabs">
        <label class="tab-label" for="tab2">Sign Up</label>

        <section id="content1">
          <form method="POST" class="login-form" id="Login">
            <input type="hidden" name="reqType" value="Login">
            <div class="modal-form-group">
              <div class="extra"></div>
            </div>
            <div class="modal-form-group">
              <i class="input-icon material-icons">account_circle</i>
              <input name="user" id="luser" required="required" type="text" class="modal-form-input" placeholder="Username or email">
            </div>
            <div class="modal-form-group">
              <i class="input-icon material-icons">lock</i>
              <input name="pass" id="password" type="password" required="required" class="modal-form-input" placeholder="Password">
            </div>
            <div class="modal-form-group left">
              <input name="rem" type="hidden" value="false">
              <input name="to" type="hidden" value="https://auth.geeksforgeeks.org/?to=https://www.geeksforgeeks.org/how-to-install-z-shellzsh-on-linux/">
              <input name="rem" type="checkbox" checked="">
              <label class="modal-form-label" for="remember">Remember me</label>
              <a class="pull-right forgot-link">Forgot Password</a>
            </div>
	    <div class="modal-form-group left" style="display:none;">
              <center><div id="loginCaptcha"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LexF0sUAAAAADiQjz9BMiSrqplrItl-tWYDSfWa&amp;co=aHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmc6NDQz&amp;hl=en&amp;v=4rwLQsl5N_ccppoTAwwwMrEN&amp;size=normal&amp;cb=6u7ns59byoj1" width="304" height="78" role="presentation" name="a-664kvfsj36ih" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response-1" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div></div></center>
	    </div>
            <button class="btn btn-green signin-button" type="submit">Sign In</button>
          </form>
        </section>
        <section id="content2">
          <form method="POST" class="login-form" id="Register">
            <input type="hidden" name="reqType" value="Register">
            <div class="modal-form-group">
              <div class="extra"></div>
            </div>
            <div class="modal-form-group">
              <i class="input-icon material-icons">email</i>
              <input name="email" id="email" type="email" required="required" class="modal-form-input" placeholder="E-mail">
            </div>
            <div class="modal-form-group">
              <i class="input-icon material-icons">lock</i>
              <input name="pass" id="reg-password" type="password" required="required" class="modal-form-input" placeholder="Password">
            </div>
            <div class="modal-form-group">
              <i class="input-icon material-icons">business</i>
              <span class="twitter-typeahead" style="position: relative; display: inline-block;"><input autocomplete="off" type="text" class="modal-form-input typeahead tt-hint" readonly="" spellcheck="false" tabindex="-1" dir="ltr" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);"><input name="institute" id="organization" autocomplete="off" required="required" type="text" class="modal-form-input typeahead tt-input" placeholder="Institution/Organization" spellcheck="false" dir="auto" aria-activedescendant="" aria-owns="organization_listbox" role="combobox" aria-readonly="true" aria-autocomplete="list" style="position: relative; vertical-align: top; background-color: transparent;"><span role="status" aria-live="polite" style="position: absolute; padding: 0px; border: 0px; height: 1px; width: 1px; margin-bottom: -1px; margin-right: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap;"></span><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: RobotoDraft, Roboto, &quot;Helvetica Neue, Helvetica, Arial&quot;, sans-serif; font-size: 13.3333px; font-style: normal; font-variant: normal; font-weight: 500; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><div role="listbox" class="tt-menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;"><div role="presentation" class="tt-dataset tt-dataset-0"></div></div></span>
            </div>
            <div class="modal-form-group">
              <center><div id="registerCaptcha"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LexF0sUAAAAADiQjz9BMiSrqplrItl-tWYDSfWa&amp;co=aHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmc6NDQz&amp;hl=en&amp;v=4rwLQsl5N_ccppoTAwwwMrEN&amp;size=normal&amp;cb=mrqsjseau4il" width="304" height="78" role="presentation" name="a-uw8xhgishh9g" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div></div></center>
            </div>
	    <input name="to" type="hidden" value="https://auth.geeksforgeeks.org/?to=https://www.geeksforgeeks.org/how-to-install-z-shellzsh-on-linux/">
            <button class="btn btn-green signup-button" type="submit">Sign Up</button>
          </form>
        </section>
        <div class="social-signin-div">
          <div class="social-divider">
            <span>or</span>
          </div>
          <div class="google-div social-div pull-left">
            <a id="glogin" href="javascript:void(0)" class="btn btn-social btn-google">
              <span class="fa fa-google"></span>Google
            </a>
          </div>
          <div class="facebook-div social-div">
            <a id="fblogin" class="btn btn-social btn-facebook">
              <span class="fa fa-facebook"></span>Facebook
            </a>  
          </div>
	  <p style="display:block;margin:10px 0px;"></p>
	  <div class="linkedin-div social-div pull-left">
	    <a id="inlogin" class="btn btn-social btn-linkedin">
		<span class="fa fa-linkedin"></span>LinkedIn
	    </a>
	  </div>
	  <div class="github-div social-div pull-left">
	    <a id="gitlogin" class="btn btn-social btn-github">
		<span class="fa fa-github"></span>GitHub
	    </a>
	  </div>
	  <div style="padding: 10px 0px;font-size: 14px;font-weight: 500;padding-top: 50px;"><a href="https://www.geeksforgeeks.org/why-create-an-account-on-geeksforgeeks/" style="color: #0f9d58;" target="_blank">Why Create an Account?</a></div>
          <div class="tnc-div">
              By creating this account, you agree to our <a href="https://www.geeksforgeeks.org/privacy-policy/" target="_blank">Privacy Policy</a> &amp; <a href="https://www.geeksforgeeks.org/cookie-policy/" target="_blank">Cookie Policy</a>.
          </div>
        </div>
      </div>
      <div class="forgot-div">
        <form class="login-form" id="Forgot">
          <input type="hidden" name="reqType" value="Forgot">
          <div class="modal-form-group">
            <div class="extra"></div>
          </div>
          <div class="modal-form-group">
            <p class="left">Please enter your email address or userHandle.</p>
          </div>
          <div class="modal-form-group">
            <i class="input-icon material-icons">account_circle</i>
            <input name="user" id="fuser" type="text" class="modal-form-input" placeholder="Username/Email">
          </div>
          <div class="modal-form-group">
            <center><div id="forgotCaptcha"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LexF0sUAAAAADiQjz9BMiSrqplrItl-tWYDSfWa&amp;co=aHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmc6NDQz&amp;hl=en&amp;v=4rwLQsl5N_ccppoTAwwwMrEN&amp;size=normal&amp;cb=kplc0q37bs67" width="304" height="78" role="presentation" name="a-pirvgysgw8yq" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response-2" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div></center>
          </div>
          <div class="modal-form-group left">
            <a class="login-link">Back to Login</a>
          </div>
          <button class="btn btn-green center reset-button" type="submit">Reset Password</button>
        </form> 
      </div>
    </div>

 */}





        </div>

    )
}

export default Signupform
