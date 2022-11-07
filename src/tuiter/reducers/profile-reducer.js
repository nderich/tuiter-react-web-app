import { createSlice } from "@reduxjs/toolkit";

const initialProfile = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    profilePicture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.ecartelera.com%2Fnoticias%2F30400%2F30440-m.jpg&f=1&nofb=1&ipt=93d4e2f68ee69467d058b62249e952d7e0e71631a3a30dd085ac04c77bb6472b&ipo=images',
    bannerPicture: 'https://4.bp.blogspot.com/-bjnhZb4NPRc/V5F6h8ZwiOI/AAAAAAAAB7w/GsiZkmHXt2MGQAgdU6ihlyTHDJlpRTksgCLcB/s1600/mr-robot-review.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1968',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
    reducers: {
        editProfile(state, action) {
            const p = action.payload;
            state.firstName = p.firstName;
            state.lastName = p.lastName;
            state.bio = p.bio;
            state.location = p.location;
            state.website = p.website;
            state.dateOfBirth = p.dateOfBirth;

            // console.log(state.location);

            return state;
        }
    }
});

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;
