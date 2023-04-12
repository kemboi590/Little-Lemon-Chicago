import React from 'react'
import Image1 from '../../assets/images/testimonial 1.jpeg'
import Image2 from '../../assets/images/testimonial 2.jpeg'
import Image3 from '../../assets/images/testimonial 3.jpeg'
 import Image4 from '../../assets/images/testimonial 4.jpeg'
 import {AiOutlineStar} from 'react-icons/ai'

const testimonies = [
    {
    id: 1,
    review:  <AiOutlineStar/>,
    image: Image1,
    userName: 'Fred John',
    comment: ' LitleLemon Chicago serves the most delicious meals at a very pocket friendly price. I give them a five out of five'
    },
    {
        id: 2,
        review: <AiOutlineStar/>,
        image: Image2,
        userName: 'Emily Meddie',
        comment: ' LitleLemon Chicago serves the most delicious meals at  a very pocket friendly price. I give them a five out of five'
    },
    {
        id: 3,
        review: <AiOutlineStar/>,
        image: Image3,
        userName: 'Christopher Wooddy',
        comment: ' LitleLemon Chicago serves the most delicious meals at a very pocket friendly price. I give them a five out of five'
    },
    {
        id: 4,
        review: <AiOutlineStar/>,
        image: Image4,
        userName: 'Jane Jimmy',
        comment: ' LitleLemon Chicago serves the most delicious meals at a very pocket friendly price. I give them a five out of five'
        }
]

export default testimonies