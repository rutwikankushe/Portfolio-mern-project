import React from 'react';


function Contact() {
    return (
        <>
         <div className="container">
    <div className="row py-5 mt-4 align-items-center">
    
    
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto ">
        <div class="one">
              <h1>Get in Touch </h1>
          </div>
            <form action="#">
                <div className="row">
                <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-user text-muted"></i>
                            </span>
                        </div>
                        <input id="username" type="text" name="username" placeholder="Username" className="form-control bg-white border-left-0 border-md"/>
                    </div>
                   
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-envelope text-muted"></i>
                            </span>
                        </div>
                        <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"/>
                    </div>
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-comment text-muted"></i>
                            </span>
                        </div>
                        <textarea id="message" type="text" name="message" placeholder="message" className="form-control bg-white border-left-0 border-md"></textarea>
                        
                    </div>

                    
                   
                    
                    <div className="form-group col-lg-12 mx-auto mb-0">
                        <a href="#" className="btn btn-primary btn-block py-2">
                            <span className="font-weight-bold"><i className="fa fa-paper-plane "></i>   Send Message</span>
                        </a>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>
        </>
    )
}

export default Contact
