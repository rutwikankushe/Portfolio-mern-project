import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';



const Profile = () => {

  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callProfilePage = async () => {
    try {

      const res = await fetch('/profile', {

        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "include",

      });

      const data = await res.json();
      console.log(data);

      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      // history.push('/login');
      window.location.href = '/login';
     
      

    }
  }


  useEffect(() => {

    callProfilePage();

  }, []);




  return (
    <>
      <div className="container emp-profile">
        <form method="GET" >
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src="https://i.ibb.co/0rQt7rD/1.png" alt="profile photo" />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="profile-head">
                <h5>
                  {userData.name}
                </h5>
                <h6>
                  {userData.work}
                </h6>
                <p className="proile-rating"></p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Education</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="project-tab" data-toggle="tab" href="#project" role="tab" aria-controls="project" aria-selected="true">Project</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="skills-tab" data-toggle="tab" href="#skills" role="tab" aria-controls="skills" aria-selected="true">Skills</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div> */}
        </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="">Website Link</a><br />
                <a href="">Bootsnipp Profile</a><br />
                <a href="">Bootply Profile</a>
                <p>SKILLS</p>
                <a href="">Web Designer</a><br />
                <a href="">Web Developer</a><br />
                <a href="">WordPress</a><br />
                <a href="">WooCommerce</a><br />
                <a href="">PHP, .Net</a><br />
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <form>

                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Name</label>
                        <input type="text" class="form-control" id="name" value={userData.name} placeholder="User Name" />
                      </div>

                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Phone</label>
                        <input type="text" class="form-control" id="phone" value={userData.phone} placeholder="Phone" />
                      </div>

                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" value={userData.email} placeholder="Email" />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputAge">Age</label>
                        <input type="password" class="form-control" id="inputAge" placeholder="Age" />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress">Address</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>

                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                      </div>
                      <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                          <option selected>Choose...</option>
                          <option>Maharastra</option>
                          <option>Maharastra</option>
                          <option>Maharastra</option>
                        </select>
                      </div>
                      <div class="form-group col-md-4">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress2">Hobby</label>
                      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>

                    <button type="submit" class="btn btn-reg  py-2"><i class="fa fa-refresh" aria-hidden="true"></i><span class="ml-1">Update</span></button>
                  </form>

                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <form>
                    <div class="list_wrapper">
                      <div class="form-row">
                        <div class="form-group col-md-12">
                          <label for="inputEmail4">College Name</label>
                          <input type="text" name="list[0][]" class="form-control" id="name" placeholder="College Name" />
                        </div>

                        <div class="form-group col-md-6">
                          <label for="inputEmail4">Course Name</label>
                          <input type="text" name="list[0][]" class="form-control" id="phone" placeholder="Course Name" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputEmail4">Branch </label>
                          <input type="text" name="list[0][]" class="form-control" id="phone" placeholder="Branch " />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputEmail4">Year </label>
                          <input type="text" name="list[0][]" class="form-control" id="phone" placeholder="Year " />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputEmail4">Aggregate </label>
                          <input type="text" name="list[0][]" class="form-control" id="phone" placeholder="Aggregate " />
                        </div>
                      </div>
                      <div>
                        <button class="btn btn-reg py-1 list_add_button" type="button"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                        <br></br>
                      </div>

                    </div>
                    <br></br>
                    <button type="submit" class="btn btn-reg  py-2"><i class="fa fa-refresh" aria-hidden="true"></i><span class="ml-1">Update</span></button>
                  </form>

                </div>

                <div className="tab-pane fade" id="project" role="tabpanel" aria-labelledby="project-tab">
                  <form>
                    <div class="list_wrapper1">
                      <div class="form-row">

                        <div class="form-group col-md-12">
                          <label for="inputCollege">Project Name</label>
                          <input type="text" name="list[0][]" class="form-control" id="name" placeholder="Enter College Name" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputCollege">Start Date</label>
                          <input type="date" name="list[0][]" class="form-control" id="name" placeholder="Start Date" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputCollege">End Date</label>
                          <input type="date" name="list[0][]" class="form-control" id="name" placeholder="End Date" />
                        </div>

                        <div class="form-group col-md-12">
                          <label for="inputEmail4">Description</label>
                          <textarea type="text" name="list[0][]" class="form-control" id="phone" placeholder="Description" />
                        </div>

                        <div class="form-group col-md-12">
                          <label for="inputEmail4">Responsibilities</label>
                          <textarea type="email" name="list[0][]" class="form-control" id="inputEmail4" placeholder="Responsibilities" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputAge">key Technologies</label>
                          <input type="password" name="list[0][]" class="form-control" id="inputAge" placeholder="key Technologies" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputAge">Tools Used</label>
                          <input type="password" name="list[0][]" class="form-control" id="inputAge" placeholder="Tools Used" />
                        </div>
                      </div>
                      <div>
                        <button class="btn btn-reg py-1 list_add_button1" type="button"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                        <br></br>
                      </div>
                    </div>
                    <br></br>


                    <button type="submit" class="btn btn-reg  py-2"><i class="fa fa-refresh" aria-hidden="true"></i><span class="ml-1">Update</span></button>
                  </form>

                </div>

                <div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
                  <form>
                    <div class="list_wrapper2">
                      <div class="form-row">
                        <div class="form-group col-md-8">
                          <label for="inputCity">Skills</label>
                          <input type="text" name="list[0][]" class="form-control" id="inputCity" />
                        </div>

                        <div class="form-group col-md-4">
                          <label for="inputZip">Percentage</label>
                          <input type="text" name="list[0][]" class="form-control" id="inputZip" />
                        </div>
                      </div>

                      <div>
                        <button class="btn btn-reg py-1 list_add_button2" type="button"><i class="fa fa-plus-circle" ></i></button>

                      </div>
                    </div>
                    <br></br>


                    <button type="submit" class="btn btn-reg  py-2"><i class="fa fa-refresh" aria-hidden="true"></i><span class="ml-1">Update</span></button>
                  </form>


                </div>




              </div>
            </div>
          </div>
        </form>
      </div>


    </>

  )
}

export default Profile