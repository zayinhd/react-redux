import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";


const CardItem = () => {
    return (
        <Card sx={ { maxWidth: 240 } }>
            <CardMedia
                image="https://www.google.com/url?sa=i&url=https%3A%2F%2Few.com%2Fmovies%2Fsuperman-henry-cavill-farewell%2F&psig=AOvVaw2sJj3dwDxIpVG4XbO6LeGR&ust=1712413194943000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICR9sCiq4UDFQAAAAAdAAAAABAE"
                title="Superman"
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component="div">
                    Superman
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Rating</Button>
                <Button size="small">Views</Button>
            </CardActions>
        </Card>
    )
}

export default CardItem;