import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return(
        <>
        <div>
            <h5>{profile.firstName} {profile.lastName}</h5>
            <img src={profile.bannerPicture} className="img-fluid" />

        </div>
        <div>
            <img src={profile.profilePicture} className="rounded-circle border border-white " height="160px" />
            <Link to="/tuiter/edit-profile">
                <button type="button" className="btn btn-outline-primary rounded-pill float-end mt-3">Edit Profile</button>
            </Link>

        </div>
        <div className="mt-4">
            <h5>{profile.firstName} {profile.lastName}</h5>
            <h6 className="text-muted">{profile.handle}</h6>
            <p>{profile.bio}</p>
            <div>
                <span><i className="bi bi-geo-alt"></i> {profile.location} </span>
                <span><i className="bi bi-balloon"></i> Born {profile.dateOfBirth} </span>
                <span><i className="bi bi-calendar"></i> Joined {profile.dateJoined} </span>
            </div>
            <div className="mt-2">
                <span className="text-muted"><b className="text-body">{profile.followingCount}</b> Following <b className="text-body">{profile.followersCount}</b> Followers</span>
            </div>
        </div>
        </>
    );
}

export default ProfileComponent;