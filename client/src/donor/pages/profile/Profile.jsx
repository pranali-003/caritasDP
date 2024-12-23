import React from 'react';
import './profile.css'
import Layout from '../../components/layout/Layout';
import Main from '../../components/main/Main'
import Hero from '../../components/hero/Hero'; 
import About from '../../components/about/About'
import RecentDonors from '../../components/recent-donors/RecentDonors'

const Profile = () => {
  return (
    <Layout>
      <Main/>
      <Hero /> 
      <About/>
      <RecentDonors/>
    </Layout>
  );
};

export default Profile;
