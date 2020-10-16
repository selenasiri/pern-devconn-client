import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import DashboardActions from './DashboardActions'
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentProfile} from '../../actions/profile';
import Spinner from '../layout/Spinner'

const Dashboard = () => {
  const { user } = useSelector(state => state.auth)
  const { profile, loading} = useSelector(state => state.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <> 
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
          <DashboardActions />
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>Create Profile</Link>
        </> 
      )}
    </>
  );
};

export default Dashboard

