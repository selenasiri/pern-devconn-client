import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { getCurrentProfile } from '../../actions/profile'
// import { connect } from 'react-redux';
// import { getCurrentProfile} from '../../action/profile';

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <div>
      Dashboard
    </div>
  )
}

// Dashboard.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired,
// };

export default Dashboard

//get the profile state, get profile actions, 
