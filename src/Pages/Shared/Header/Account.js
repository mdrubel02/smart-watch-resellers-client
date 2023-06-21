import React from 'react';
import { Box, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';




const Item = ({ title, to, icon, }) => {
    return (
      <MenuItem
       
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };
const Account = () => {
    return (
        <Box>
        <Item
        //   title="Manage Team"
          to="/team"
          icon={<PersonOutlineIcon />}
        />
        <Item
          title="Contacts Information"
          to="/contacts"
          icon={<PersonOutlineIcon />}
         
        />
      

        {/* <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          Pages
        </Typography> */}
       
      </Box>
    );
};

export default Account;