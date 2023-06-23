/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AppHeader.css";

const AppHeader = ({ authenticated, onLogout }) => {
  return (
    <>
      <header aria-label="Page Header" className="bg-red-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-xl text-white sm:text-4xl">
                <Link to="/" className="app-title aptitle">
                <div className="float-left "><div className="font-black float-right">Drop🍽️</div><div className="font-thint float-right">Meal</div></div>
                
                </Link>
              </h1>
              <div className="float-left"> <p className="mt-0 text-lg text-white mb-2" >
                Bring up your best recipe! 🥐🥯🥞🍔🍕
              </p></div>
             
            </div>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <label className="sr-only" htmlFor="search">
                    {" "}
                    Search{" "}
                  </label>

                  <input
                    className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                    id="search"
                    type="search"
                    placeholder="Search recipe..."
                  />

                  <button
                    type="button"
                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>

                <a
                  href="#"
                  className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  <span className="sr-only">Notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </a>

                <span
                  areahidden="true"
                  className="block h-6 w-px rounded-full bg-gray-200"
                ></span>
              </div>

              <nav className="app-nav ">
                {authenticated ? (
                  <ul className="navwhite" >
                    <li>
                      <NavLink to="/users" style={{ color: "white" }}>Users</NavLink>
                    </li>
                    <li>
                      <NavLink to="/profile" style={{ color: "white" }}>Profile</NavLink>
                    </li>
                    <li>
                      <a onClick={onLogout} style={{ color: "white" }}>Logout</a>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/signup">Signup</NavLink>
                    </li>
                  </ul>
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
