import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import data from '../demo.json';
import Skeletons from './Skeletons';

function Cards({name,src}){
	return(
	<Card>
      <CardMedia
        sx={{ height: 140 }}
        image="demo.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">{name}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="success" className='w-full'><a href={src} target='_blank'>pdf demo</a></Button>
        <Button size="small" variant="contained" color="success" className='w-full'>Buy</Button>
      </CardActions>
    </Card>
	)
}

function Products() {
	return (
    <>
	<div className="container mx-auto p-5 gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{
			data.map((item,i)=><Cards key={i} name={item.name} src={item.src}/>)
		}
	</div>
  <div className="p-2 flex justify-center">
      <Pagination count={data.length} />
  </div>
  </>
	)
}

export default Products