import React, { Component} from "react";
import {hot} from "react-hot-loader";

class Footer extends Component{
  render(){
    return(
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Sample Site</strong> by <a href="https://github.com">Chris</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
          is licensed.
        </p>
      </div>
    </footer>
    );
  }
}


 export default hot(module)(Footer);
//export default Footer;