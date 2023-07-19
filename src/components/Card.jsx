import React from 'react' ; 
import PropTypes from 'prop-types'


export default function Card({element:{images, id , name , team , nationality }}) {
  return (
    <div key={id} className='card col-4' style={{padding:"1rem" , margin:".3rem" , }}>
                    <img style={{width:'100%' , height:'50%' }} src={images} alt={name} /> 
                    <div className='row'>
                        <h4 className='col-8'>{name}</h4>
                        <span className='col-4'>{nationality} DT</span>
                    </div>
                    <p style={{fontSize:'.6rem'}} className='row'>
                        {team}
                    </p>
                    
    </div>
    
  )
}

Card.defaultProps={
    data : "test" , 
    newFunction : ()=>alert('test')
}

Card.propTypes = {
    data : PropTypes.string.isRequired ,
    name : PropTypes.string ,
    newFunction : PropTypes.func , 
    children : PropTypes.any 
}
