import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import './Meeting.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Meeting({ date, month, name }) {
  const classes = useStyles();

	return (
		<div className="meeting">
			<div className="meeting__date">
				<h1>{date}</h1>
				<h3>{month}</h3>
			</div>
			<div className="meeting__details">
				<h3>{name}</h3>
        <AvatarGroup max={4}>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small}/>
					<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.small}/>
					<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={classes.small}/>
					<Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" className={classes.small}/>
				</AvatarGroup>
			</div>
		</div>
	);
}

export default Meeting;
