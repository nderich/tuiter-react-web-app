import React, {useState} from "react";
import ProfileComponent from "../profile/profile-component";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {editProfile} from "../reducers/profile-reducer";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const [firstName, changeFirstName] = useState(profile.firstName);
    const [lastName, changeLastName] = useState(profile.lastName);
    const [bio, changeBio] = useState(profile.bio);
    const [location, changeLocation] = useState(profile.location);
    const [website, changeWebsite] = useState(profile.website);
    const [dateOfBirth, changeDateOfBirth] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();
    const editProfileHandler = () => {
        dispatch(editProfile({firstName, lastName, bio, location, website, dateOfBirth}));
    }
    return(
        <>
            <div>
                <div className="row">
                    <h5 className="col-10">Edit profile</h5>
                    <Link to="/tuiter/profile" className="col-2">
                        <button type="button" className="btn btn-outline-primary rounded-pill float-end mb-2" onClick={editProfileHandler}>Save</button>
                    </Link>
                </div>

                <img src={profile.bannerPicture} className="img-fluid" />

            </div>
            <div>
                <img src={profile.profilePicture} className="rounded-circle border border-white " height="160px" />
                <Link to="/tuiter/profile" className="col-2">
                    <button type="button" className="btn btn-outline-primary rounded-pill float-end mb-2">X</button>
                </Link>
            </div>
            <div className="mt-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => changeFirstName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => changeLastName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <input type="text" className="form-control" id="bio" value={bio} onChange={(e) => changeBio(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" className="form-control" id="location" value={location} onChange={(e) => changeLocation(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">DOB</label>
                        <input type="date" className="form-control" id="dateOfBirth" value={dateOfBirth} onChange={(e) => changeDateOfBirth(e.target.value)}/>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditProfile;