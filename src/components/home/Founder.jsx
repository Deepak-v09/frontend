import React from 'react'
import{motion} from "framer-motion"



function Founder() {
    const options={initial:{x:"-100%",opacity:0} ,whileInView:{x:0,opacity:1}

    }

  return (
    <>
    
    <section className="founder">
        <motion.div {...options} >
            
            <div className='image'></div>
            <h3>Sarthak Singh</h3>
            <p>Hey, Everyone I am Sarthak Singh, the founder of Btech Burger Wala.<br/>
            
            Our aim is to create tasty & delicious burger. </p>

        </motion.div>
    </section>
    </>
  )
}

export default Founder