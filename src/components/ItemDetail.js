import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { TextConstants } from '../constants/TextConstants'

const Styles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignContent: 'center',
  width: '50%',
  margin: 10,
  padding: 10,
  paddingBottom: 6,
  border: '1px',
  borderStyle: 'solid',
  borderColor: '#ff829e',
}

const ItemDetail = ({item, goBack}) => {
  if (!item) return null //page 404
    return (
      <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <Card
          style={Styles}
        >
          <div style={{
            display: 'flex',
            width: '30%',
            justifyContent: 'center',
            // border: '1px',
            // borderStyle: 'solid'
          }}>
            <CardMedia>
              <img src={item.general.avatar} alt=""/>
            </CardMedia>
          </div>

          <div style={{
            display: 'flex',
            width: '60%',
            justifyContent: 'center',
            // border: '1px',
            // borderStyle: 'solid'
          }}>
            <CardContent>
              <Typography color="secondary" gutterBottom variant="display1" component="h2">
                {item.general.firstName} {item.general.lastName}
              </Typography>

              <Typography color="primary" gutterBottom variant="headline"
                          component="h2">{TextConstants.JOBTITLE}</Typography>
              <Typography gutterBottom component="p">{item.job.title}</Typography>

              <Typography color="primary" gutterBottom variant="headline"
                          component="h2">{TextConstants.CONTACTTITLE}</Typography>
              <Typography component="p">{item.contact.email}</Typography>
              <Typography gutterBottom component="p">{item.contact.phone}</Typography>

              <Typography color="primary" gutterBottom variant="headline"
                          component="h2">{TextConstants.ADDRESSTITLE}</Typography>
              <Typography component="p">{item.address.street}</Typography>
              <Typography component="p">{item.address.city}</Typography>
              <Typography component="p">{item.address.zipCode}</Typography>
              <Typography component="p">{item.address.country}</Typography>
            </CardContent>
          </div>

          <div style={{
            display: 'flex',
            width: '10%',
            justifyContent: 'flex-end',
            // border: '1px',
            // borderStyle: 'solid'
          }}>
            <CardActions>
              <Button
                style={{margin: -14}}
                size="small"
                color="secondary"
                variant="contained"
                onClick={goBack}
              >
                Back
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
    )
}

ItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired
}

export default ItemDetail