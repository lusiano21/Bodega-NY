import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Media = () => {

  return (
    <Grid container wrap="wrap">
      {lista.map((index) => (
        <Box key={index} sx={{ width: 288, margin: 5, my: 5 }}>
          <Skeleton variant="rectangular" width={288} height={300} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

export default Media;
export const Detail = () => {

  return (
    <Box sx={{ width: 1000 }}>
      <Skeleton variant="rectangular" width={1000} height={480} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  );
}