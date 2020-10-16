import React from 'react';
import './Scheduler.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import SearchIcon from '@material-ui/icons/Search';
import UpcomingMeets from './UpcomingMeets';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  }
}));

function Scheduler() {

  const classes = useStyles();

	return (
		<div className="scheduler">
      <div className='bar'>
        <input className='searchBar' type='text' placeholder='Search for contacts & groups ...' />
        <a href='#' className='searchIcon'><SearchIcon /></a>
      </div>
			<div className='participants'>
        <h3>Participants</h3>

				<AvatarGroup max={4}>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
					<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.large} />
					<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={classes.large} />
					<Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" className={classes.large} />
				</AvatarGroup>
			</div>
      <UpcomingMeets />
      
		</div>
	);
}

export default Scheduler;
