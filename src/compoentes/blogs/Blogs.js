import React from "react";

const Blogs = () => {
  return (
    <div className="row m-auto g-4">
      <div className=" col-5 border m-2 ms-5 p-2 ">
        <h4>Difference between authorization and authentication?</h4>
        <hr />
        <p>
          authentication is the process of verifying who someone is, whereas
          authorization is the process of verifying what specific applications,
          files, and data a user has access to.Authentication is used to verify
          that users really are who they represent themselves to be. Once this
          has been confirmed, authorization is then used to grant the user
          permission to access different levels of information and perform
          specific functions, depending on the rules established for different
          types of users.Authentication is the first step of a good identity and
          access management process. Authentication is visible to and partially
          changeable by the user.Authorization always takes place after
          authentication.Authorization isn’t visible to or changeable by the
          user.
        </p>
      </div>
      <div className=" col-5 border m-2 ms-5 p-2 ">
        <h4>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <hr />
        <p>
          Firebase Authentication aims to make building secure authentication
          systems easy, while improving the sign-in and onboarding experience
          for end users. It provides an end-to-end identity solution, supporting
          email and password accounts, phone auth, and Google, Twitter,
          Facebook, and GitHub login, and more.Usually, authentication by a
          server entails the use of a user name and password. Other ways to
          authenticate can be through cards, retina scans, voice recognition,
          and fingerprints.Top Alternatives to Firebase Authentication are
          Auth0(A set of unified APIs and tools that instantly enables Single
          Sign On and user management to all your applications).MongoDB(MongoDB
          stores data in JSON-like documents that can vary in
          structure).Passport.Okta.JSON Web Token.Amazon Cognito.Keycloak.
        </p>
      </div>
      <div className="col-5 border m-2 ms-5 p-2 mt-2">
        <h4>
          What other services does firebase provide other than authentication?
        </h4>
        <hr />
        <p>
          Firebase is originally developed by Firebase inc and later acquired by
          Google. It provides different kinds of services that help you to
          develop high-quality mobile and web applications to grow your
          business.Firebase is a full package that can help in developing your
          mobile or web applications faster with fewer resources and more
          efficiency. Now, let’s look at some of the services and use of
          it.There are many services which Firebase provides, Most useful of
          them are:Cloud Firestore, Cloud Functions, Authentication, Hosting,
          Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic
          Links, Remote Config.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
<h2>this is blogs</h2>;
