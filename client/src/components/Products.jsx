import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Skeletons from "./Skeletons";
import axios from "axios";
import { LuIndianRupee } from "react-icons/lu";
import { Link } from "react-router-dom";

function Cards({ prop }) {
  return (
    <Card className="flex flex-col justify-between">
      <CardMedia sx={{ height: 200 }} image={prop.image} title="green iguana" />
      <CardContent className="text-sm">
        <Typography gutterBottom variant="h5" component="div">
          {prop.title}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Author- {prop?.author}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {prop?.description.slice(0, 100)}...
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Genre- {prop?.genre}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Tags-{" "}
          {prop.tags.map((item, i) => (
            <span key={i} className="bg-gray-100 text-xs mx-1 p-1 rounded">
              {item}{" "}
            </span>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          color="success"
          className="w-full"
        >
          <Link to={`/description/${prop?._id}`} state={prop}>
            description
          </Link>
        </Button>
        <Button
          size="small"
          variant="contained"
          color="success"
          className="w-full"
        >
          <LuIndianRupee /> {prop?.price}
        </Button>
      </CardActions>
    </Card>
  );
}

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/book/allbooks`)
        .then((res) => {
          setData(res.data.books);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="container mx-auto p-5 gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {data.length == 0 ? (
          <>
            <Skeletons />
            <Skeletons />
            <Skeletons />
            <Skeletons />
          </>
        ) : (
          data?.map((item, i) => <Cards key={i} prop={item} />)
        )}
      </div>
      <div className="p-2 flex justify-center">
        <Pagination count={data.length} />
      </div>
    </>
  );
}

export default Products;
