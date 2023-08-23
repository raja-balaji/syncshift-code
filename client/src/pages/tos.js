export default function ToS({setTitle}){
  setTitle('Privacy & Security')
  return (<>
  <h1 className="title">SyncShift</h1>
  <h3 className="headline">Shifting Management Tools</h3>

  <div className="container1">
    <div className="privcontent">
      <h1 className = "privacy"><center> Privacy & Security Policy</center></h1>
      <p>At SyncShift, we are committed to providing you with a secure and private experience while using our productivity tools. Your privacy is of at most importance to us, and we have implemented robust security measures to safeguard your data. This Privacy and Security page outlines how we collect, use, and protect your information, as well as the steps we take to ensure a secure environment for your productivity needs..</p>
      <h1><center>Reach us at: Contact@syncshift.com</center></h1>
      
      <p>
    At SyncShift, your privacy and security are paramount. We strive to maintain the highest standards of data protection while delivering a seamless and productive user experience. By implementing industry best practices and providing you with the necessary controls, we aim to create a trustworthy and secure environment for all our users. If you have any questions or concerns regarding our privacy and security practices, please feel free to contact our support team. Thank you for choosing <em><b>SyncShift</b></em> for your productivity needs.
  </p>
    </div>
  </div>
 
  <center><button onClick={() => {window.location.href='/settings'}} className="button3" style={{width: "30%"}}>Back</button></center>
  </>)
}

  
