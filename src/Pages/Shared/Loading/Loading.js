import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loading = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center'
            }}
        >
            <CircularProgress variant="solid" size={"lg"} />
        </Box>
    );
};

export default Loading;