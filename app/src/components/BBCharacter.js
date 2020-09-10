import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

function BBCharacter({ character }) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={character.name}
                    height="420"
                    image={character.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{character.name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">Nickname: {character.nickname}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">Status: {character.status}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">Birthday: {character.birthday}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BBCharacter