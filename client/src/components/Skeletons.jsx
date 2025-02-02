import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Skeletons() {
	return (
		<div>
			<Stack spacing={1}>
		      <Skeleton variant="rectangular" width={'100%'} height={100} />
		      <Skeleton variant="text" sx={{ fontSize: '1.3rem' }} width={'50%'} />
		      <Skeleton variant="text" sx={{ fontSize: '1rem' }} height={60} />
		      <div className="flex gap-6">
		      <Skeleton variant="rounded" width={'100%'} height={40} />
		      <Skeleton variant="rounded" width={'100%'} height={40} />
		      </div>
    		</Stack>
		</div>
	)
}

export default Skeletons