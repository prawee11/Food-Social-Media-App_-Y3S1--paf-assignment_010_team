/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from "react";
import "./Profile.css";
import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";
import {
  deleteProfileById,
  getAllPost,
  getCurrentUser
} from "../../util/APIUtils";
import { toast } from "react-toastify";
import { ACCESS_TOKEN } from "../../constants";
import { useNavigate } from "react-router";
import EditUserModal from "../../components/EditUserModal";

const Profile = ({ currentUser }) => {
  const [user, setUser] = useState(currentUser);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const refetchUser = async () => {
    try {
      const response = await getCurrentUser();
      if (!response) return;

      setUser(response);
    } catch (error) {
      toast("Oops something went wrong!", { type: "error" });
    }
  };

  const fetchAllPost = useCallback(async () => {
    try {
      const response = await getAllPost();
      if (!response.length) return;

      setPosts(
        response.reverse().filter(post => post.userId === user.id)
      );
    } catch (error) {
      toast("Oops something went wrong!", { type: "error" });
    }
  }, [user.id]);

  useEffect(() => {
    fetchAllPost();
  }, [fetchAllPost]);

  const editProfile = async () => {
    setOpen(true);
  };

  const deleteProfile = async () => {
    try {
      const response = await deleteProfileById(user.id);
      if (response != null) {
        toast("profile remove successfully", { type: "success" });
        localStorage.removeItem(ACCESS_TOKEN);
        window.location.href = "/login";
      }
    } catch (error) {
      toast("Oops something went wrong!", { type: "error" });
    }
  };

  const handleSharedPosts = () => {
    navigate("/shared");
  };

  return (
    <>
      <header aria-label="Page Header" className="bg-white profilebg">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mt-8">
            <a href="#" className="block shrink-0">
              <span className="sr-only">Profile</span>
              <img
                alt={user.name}
                src={user.imageUrl}
                className="h-200 w-200 mb-2 rounded-full object-cover"
              />
            </a>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome Back, {user.name}
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">{user.email}</p>
          </div>

          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div
                  onClick={handleSharedPosts}
                  className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 bg-zinc-600 ml-auto"
                >
                  Shared Posts
                </div>
              </div>

              <div className="relative">
                <div
                  onClick={editProfile}
                  className="btn border border-orange-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 bg-orange-500 ml-auto"
                >
                  Edit Profile
                </div>
              </div>

              <div
                onClick={deleteProfile}
                className="btn border border-red-400 p-1 px-4 font-semibold cursor-pointer text-gray-200 bg-red-800 ml-auto"
              >
                Delete Profile
              </div>
              <span
                areahidden="true"
                className="block h-6 w-px rounded-full bg-gray-200"
              ></span>
            </div>
          </div>
        </div>
        <div className="count ml-auto">
          <div className="buttons flex"></div>
        </div>
      </header>

      <div className="home-container">
        <div className="container">
          <CreatePost currentUser={user} refetchPosts={fetchAllPost} />

          {posts.map(post => (
            <Post
              key={post.id}
              currentUser={user}
              refetchPosts={fetchAllPost}
              {...post}
            />
          ))}
        </div>
      </div>

      <EditUserModal
        open={open}
        setOpen={setOpen}
        currentUser={user}
        refetchUser={refetchUser}
      />
      
    </>
    
  );
};

export default Profile;
