import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProfileCard = ({image, title, handler, text}) => {
    return (
        <Card sx={{maxWidth: 190, height: 350, padding: "5px" }}>
            <CardMedia 
                component="img"
                image={image}
            />
            <CardContent>
               <Typography variant='h5'>
                {title}
                </Typography>
                <Typography variant='caption'>
                {handler}
                </Typography>
                <Typography variant='body1'>
                {text}
                </Typography> 
            </CardContent>
        </Card>
    );
}

export default ProfileCard;

// import React, { Component } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

// class ProfileCard extends Component {
//     render() {
//         const {image, title, handler, text} = this.props;
//     return (
//         <Card sx={{maxWidth: 190, height: 350, padding: "5px" }}>
//             <CardMedia 
//                 component="img"
//                 image={image}
//             />
//             <CardContent>
//                <Typography variant='h5'>
//                 {title}
//                 </Typography>
//                 <Typography variant='caption'>
//                 {handler}
//                 </Typography>
//                 <Typography variant='body1'>
//                 {text}
//                 </Typography> 
//             </CardContent>
//         </Card>
//     );
//     }
// }

// export default ProfileCard;