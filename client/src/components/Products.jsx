import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Skeletons from './Skeletons';
import axios from 'axios';

function Cards({prop}){
	return(
	<Card>
      <CardMedia
        sx={{ height: 200 }}
        image={prop.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{prop.title}</Typography>
        <Typography gutterBottom variant="p" component="div">{prop.description}</Typography>
        <Typography gutterBottom variant="p" component="div">{prop.price}</Typography>
        <Typography gutterBottom variant="p" component="div">{prop.genre}</Typography>
        <Typography gutterBottom variant="p" component="div">{prop.author}</Typography>
        <Typography gutterBottom variant="p" component="div">{prop.tags.join(', ')}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="success" className='w-full'><a href='' target='_blank'>pdf demo</a></Button>
        <Button size="small" variant="contained" color="success" className='w-full'>Buy</Button>
      </CardActions>
    </Card>
	)
}

function Products() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    try{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/book/allbooks`)
        .then(res=>{
        setData(res.data.books)
      });
        }
        catch(error){
          console.log(error);
        }
  },[])
	return (
    <>
	<div className="container mx-auto p-5 gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{
			data?.map((item,i)=><Cards key={i} prop={item}/>)
		}
	</div>
  <div className="p-2 flex justify-center">
      <Pagination count={data.length} />
  </div>
  </>
	)
}

export default Products